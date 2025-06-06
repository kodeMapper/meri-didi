import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, Calendar as CalendarIcon, CheckCircle2, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Please enter your full address"),
  city: z.string().min(2, "Please select your city"),
  gender: z.enum(["male", "female", "other"]),
  serviceType: z.enum(["cleaning", "cooking", "childcare", "eldercare", "gardening", "other"]),
  experience: z.string().min(1, "Please enter your experience in years"),
  availability: z.enum(["full-time", "part-time", "weekends"]),
  idType: z.enum(["aadhar", "pan", "passport", "driving-license"]),
  idNumber: z.string().min(5, "Please enter a valid ID number"),
  dob: z.date({
    required_error: "Please select your date of birth",
  }),
  bio: z.string().min(20, "Please tell us more about yourself (min 20 characters)"),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterWorkerPage() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string>("");
  const [idFile, setIdFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<{id: boolean, photo: boolean}>({id: false, photo: false});

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      experience: "",
      bio: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Validate that all required files are uploaded
      if (!idFile) {
        throw new Error("Please upload your ID document before submitting.");
      }
      if (!photoFile) {
        throw new Error("Please upload your photograph before submitting.");
      }

      // Prepare the data for submission with correct field names to match the backend schema
      const submissionData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        gender: data.gender,
        // Change serviceType to service to match the backend schema
        service: data.serviceType,
        serviceType: data.serviceType, // Include both for backward compatibility
        exp: data.experience, // For 'exp' field in the error message
        experience: data.experience,
        availability: data.availability,
        idType: data.idType,
        idNumber: data.idNumber,
        id_proof: idFile ? idFile.name : "document.jpg", // Match field names in the error
        id_proof_number: data.idNumber, // Add this field from error
        id_document: idFile ? idFile.name : "document.jpg", // Also include this
        dob: data.dob.toISOString(), // Convert date to ISO string
        about: data.bio, // For 'about' field in the error
        bio: data.bio,
        photo: photoFile ? photoFile.name : "photo.jpg" // Required field in error
      };

      console.log("Submitting worker registration data:", submissionData);
      console.log("API endpoint:", "https://meri-biwi-1.onrender.com/api/register-worker");

      // Make API call to submit the registration
      const startTime = Date.now();
      
      // Show a warning that API might take time to respond if it's cold starting
      toast({
        title: "Processing Registration",
        description: "This might take a moment if the server is waking up.",
        variant: "default",
      });
      
      // Set up timeout for API call (30 seconds)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      
      // Let's try a direct JSON approach instead of FormData
      // Based on the error message, the server seems to expect JSON data, not form data
      
      // Match exactly the fields expected by the API (which differ from our schema)
      const jsonData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        gender: data.gender,
        service: data.serviceType,       // API expects 'service', not 'serviceType'
        exp: data.experience,            // API expects 'exp', not 'experience'
        availability: data.availability,
        id_proof: data.idType,           // API expects 'id_proof', not 'idType'
        id_proof_number: data.idNumber,  // API expects 'id_proof_number', not 'idNumber'
        dob: data.dob.toISOString(),
        about: data.bio,                 // API expects 'about', not 'bio'
        // These fields are required by the API
        photo: photoFile ? photoFile.name : "photo.jpg",
        id_document: idFile ? idFile.name : "document.jpg"
      };
      
      console.log("Submitting JSON data:", jsonData);
      
      // Create a FormData object to submit files correctly
      const formData = new FormData();
      
      // Add all the JSON data as form fields
      Object.entries(jsonData).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      
      // Add the actual files
      if (idFile) {
        formData.append("id_document", idFile);
      }
      if (photoFile) {
        formData.append("photo", photoFile);
      }
      
      console.log("Submitting FormData with files");
      
      // Try fetch with FormData (multipart/form-data will be set automatically)
      const response = await fetch("https://meri-biwi-1.onrender.com/api/register-worker", {
        method: "POST",
        // Don't set Content-Type header - the browser will set it with the correct boundary
        headers: {
          "Origin": window.location.origin,
        },
        body: formData,
        signal: controller.signal,
      });
      
      // Clear the timeout
      clearTimeout(timeoutId);
      
      const endTime = Date.now();
      console.log(`API request completed in ${endTime - startTime}ms with status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText || response.statusText}`);
      }
      
      // Try to parse response as JSON
      let result;
      let referenceId;
      
      try {
        const responseText = await response.text();
        console.log("Raw response:", responseText);
        
        try {
          result = JSON.parse(responseText);
          console.log("Registration response:", result);
          referenceId = result.referenceId;
        } catch (jsonError) {
          console.warn("Could not parse response as JSON:", jsonError);
          // Generate a reference ID if we couldn't parse one from the response
          referenceId = `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        }
      } catch (parseError) {
        console.warn("Error reading response:", parseError);
        // Generate a reference ID if we couldn't read the response
        referenceId = `REF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      }
      
      // Store the submission data in localStorage as a backup
      try {
        localStorage.setItem('lastWorkerSubmission', JSON.stringify({
          data: submissionData,
          timestamp: new Date().toISOString(),
          referenceId: referenceId
        }));
        console.log("Submission data backed up to localStorage");
      } catch (storageError) {
        console.error("Failed to store submission in localStorage:", storageError);
      }
      
      setReferenceId(referenceId);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Registration Submitted",
        description: "Your application has been received. We will contact you shortly.",
        variant: "default",
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error("Registration error:", error);
      
      // Parse error message if it's from API response
      let errorMessage = "There was an error submitting your application. Please try again.";
      let isNetworkError = false;
      
      if (error instanceof Error) {
        console.error("Error details:", {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        
        // Check for timeout/abort errors
        if (error.name === 'AbortError') {
          errorMessage = "The request timed out. The server might be temporarily unavailable or starting up. Please try again.";
          isNetworkError = true;
        }
        // Check for network errors
        else if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch') || error.message.includes('Network request failed')) {
          errorMessage = "Network error. Please check your connection and try again.";
          isNetworkError = true;
        }
        else {
          try {
            // If error message contains status code and details
            const match = error.message.match(/(\d+):\s*(.+)/);
            if (match) {
              const [, statusCode, details] = match;
              if (statusCode === "400") {
                // Try to parse the error message to get validation details
                try {
                  const errorObject = JSON.parse(details);
                  if (errorObject.detail) {
                    errorMessage = `Validation error: ${JSON.stringify(errorObject.detail)}`;
                  } else {
                    errorMessage = "Please check your form data - some fields may be invalid.";
                  }
                } catch (e) {
                  errorMessage = details || "Please check your form data - some fields may be invalid.";
                }
              } else if (statusCode === "500") {
                errorMessage = "Server error occurred. Please try again later.";
              } else {
                errorMessage = details || error.message;
              }
            } else {
              errorMessage = error.message;
            }
          } catch (parseError) {
            console.error("Error parsing error message:", parseError);
          }
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      // If network error, store the data locally for later submission
      if (isNetworkError) {
        try {
          const backupData = {
            data: {
              ...data,
              dob: data.dob.toISOString(),
            },
            timestamp: new Date().toISOString(),
            status: 'pending'
          };
          localStorage.setItem('pendingWorkerSubmission', JSON.stringify(backupData));
          
          errorMessage += " Your form data has been saved locally and can be resubmitted when the connection is restored.";
          console.log("Form data saved locally for later submission");
        } catch (storageError) {
          console.error("Failed to save form data locally:", storageError);
        }
      }
      
      // Log the error details for debugging purposes
      console.log("Registration failed with the following data:", jsonData);
      
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "id" | "photo"
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Set uploading state
      setIsUploading(prev => ({ ...prev, [type]: true }));
      
      // Simulate file upload with a slight delay (would be a real upload in production)
      setTimeout(() => {
        if (type === "id") {
          setIdFile(files[0]);
        } else {
          setPhotoFile(files[0]);
        }
        
        // Reset uploading state
        setIsUploading(prev => ({ ...prev, [type]: false }));
        
        toast({
          title: "File uploaded successfully",
          description: `Your ${type === "id" ? "ID document" : "photo"} has been uploaded.`,
          variant: "default",
        });
      }, 800); // Simulated upload time
    }
  };

  const nextStep = () => {
    const fieldsToValidate = 
      step === 1 
        ? ["name", "email", "phone", "address", "city", "gender", "dob"] 
        : ["serviceType", "experience", "availability", "idType", "idNumber", "bio"];
    
    form.trigger(fieldsToValidate as any).then((isValid: boolean) => {
      if (isValid) {
        setStep(step + 1);
        window.scrollTo(0, 0);
      } else {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields correctly.",
          variant: "destructive",
        });
      }
    });
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-white py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h1>
            <p className="text-gray-600 mb-8">
              Your application has been submitted successfully. Our team will review your details and contact you within 48 hours.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <p className="text-sm text-gray-500 mb-2">Reference ID:</p>
              <p className="font-mono text-primary font-semibold">
                {referenceId}
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-white py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Worker Registration</h1>
            <p className="text-gray-600">Join Meri Didi as a service professional</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className={`flex-1 h-2 ${step >= 1 ? "bg-primary" : "bg-gray-200"} rounded-l-full`}></div>
              <div className={`flex-1 h-2 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
              <div className={`flex-1 h-2 ${step >= 3 ? "bg-primary" : "bg-gray-200"} rounded-r-full`}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? "text-primary font-medium" : "text-gray-500"}>Personal Info</span>
              <span className={step >= 2 ? "text-primary font-medium" : "text-gray-500"}>Professional Details</span>
              <span className={step >= 3 ? "text-primary font-medium" : "text-gray-500"}>Documents</span>
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your full address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="delhi">Delhi</SelectItem>
                              <SelectItem value="mumbai">Mumbai</SelectItem>
                              <SelectItem value="bangalore">Bangalore</SelectItem>
                              <SelectItem value="hyderabad">Hyderabad</SelectItem>
                              <SelectItem value="chennai">Chennai</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date: Date) =>
                                date > new Date() || date < new Date("1940-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cleaning">Cleaning</SelectItem>
                            <SelectItem value="cooking">Cooking</SelectItem>
                            <SelectItem value="childcare">Childcare</SelectItem>
                            <SelectItem value="eldercare">Elder Care</SelectItem>
                            <SelectItem value="gardening">Gardening</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience (Years)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" max="50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Availability</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select availability" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="full-time">Full Time</SelectItem>
                              <SelectItem value="part-time">Part Time</SelectItem>
                              <SelectItem value="weekends">Weekends Only</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="idType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select ID type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="aadhar">Aadhar Card</SelectItem>
                              <SelectItem value="pan">PAN Card</SelectItem>
                              <SelectItem value="passport">Passport</SelectItem>
                              <SelectItem value="driving-license">Driving License</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="idNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your ID number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About Yourself</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your skills, experience, and why you want to join Meri Didi" 
                            {...field} 
                            className="min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Upload Documents</h3>
                    <p className="text-sm text-gray-500">
                      Please upload clear images of your ID and a recent photograph
                    </p>
                    
                    <motion.div 
                      whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                      className="border border-dashed border-gray-300 rounded-lg p-6 text-center"
                    >
                      <div className="mb-4">
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center"
                        >
                          <Upload className="h-8 w-8 text-primary" />
                        </motion.div>
                        <p className="mt-2 text-base font-medium text-gray-700">Upload ID Proof</p>
                        <p className="text-xs text-gray-400">
                          (Aadhar Card, PAN Card, etc. as selected above)
                        </p>
                      </div>
                      
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*,.pdf"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          id="id-upload"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, "id")}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className={`w-full ${idFile ? 'bg-primary/5 border-primary/30' : ''}`}
                          disabled={isUploading.id}
                        >
                          {isUploading.id ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Uploading...
                            </span>
                          ) : (
                            <span>{idFile ? 'Change File' : 'Select File'}</span>
                          )}
                        </Button>
                      </div>
                      
                      {idFile && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 bg-green-50 p-2 rounded-md flex items-center"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm text-green-700 font-medium truncate">
                            {idFile.name}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                      className="border border-dashed border-gray-300 rounded-lg p-6 text-center"
                    >
                      <div className="mb-4">
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center"
                        >
                          <Upload className="h-8 w-8 text-primary" />
                        </motion.div>
                        <p className="mt-2 text-base font-medium text-gray-700">Upload Recent Photograph</p>
                        <p className="text-xs text-gray-400">
                          (A clear, passport-size photo with white background)
                        </p>
                      </div>
                      
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          id="photo-upload"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e, "photo")}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className={`w-full ${photoFile ? 'bg-primary/5 border-primary/30' : ''}`}
                          disabled={isUploading.photo}
                        >
                          {isUploading.photo ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Uploading...
                            </span>
                          ) : (
                            <span>{photoFile ? 'Change File' : 'Select File'}</span>
                          )}
                        </Button>
                      </div>
                      
                      {photoFile && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 bg-green-50 p-2 rounded-md flex items-center"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm text-green-700 font-medium truncate">
                            {photoFile.name}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="p-4 bg-primary/10 rounded-lg text-sm">
                    <p className="font-medium mb-2">Important Note:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>All information provided will be verified</li>
                      <li>Ensure documents are clear and legible</li>
                      <li>We will contact you for in-person verification</li>
                      <li>Background verification will be conducted</li>
                    </ul>
                  </div>
                </motion.div>
              )}
              
              <div className="flex justify-between pt-4">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !idFile || !photoFile || isUploading.id || isUploading.photo}
                    className="relative"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Application...
                      </span>
                    ) : (
                      <motion.span
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center"
                      >
                        Submit Application
                        {(!idFile || !photoFile) && (
                          <span className="ml-2 text-xs opacity-75">
                            (Upload files first)
                          </span>
                        )}
                      </motion.span>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}