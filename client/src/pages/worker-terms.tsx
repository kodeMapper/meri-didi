import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
];

export default function WorkerTerms() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Custom Header for Worker Terms Page */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Meri Didi Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      MERI
                    </span>
                    <span className="text-2xl font-heading font-light tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/70 ml-1.5" style={{ letterSpacing: '0.05em' }}>
                      DIDI
                    </span>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 font-medium -mt-0.5 ml-0.5">Home Services</span>
                </div>
              </div>
            </Link>

            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/">
                  <span className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer">
                    Home
                  </span>
                </Link>
                <a href="/#contact" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                  Contact
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-neutral-700 hover:text-neutral-900">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">EN</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map((lang) => (
                      <DropdownMenuItem key={lang.code} className="cursor-pointer">
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="md:hidden bg-neutral-100 p-2 rounded-md"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="text-neutral-700" /> : <Menu className="text-neutral-700" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <span className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 cursor-pointer">
                  Home
                </span>
              </Link>
              <a href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-center mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mr-4 text-neutral-600 hover:text-neutral-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight"
              style={{
              background: "linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 4px 24px rgba(6,182,212,0.12)",
              letterSpacing: "0.02em"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Terms & Conditions for Workers
            </motion.h1>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-red-800 mb-4">MERI DIDI – TERMS & CONDITIONS FOR WORKERS</h2>
                <p className="text-red-700 text-sm">
                  Please read these terms and conditions carefully before registering as a worker on the Meri Didi platform.
                </p>
              </div> */}

              <div className="space-y-8">
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">1. Definitions</h2>
                  <div className="grid gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="font-semibold text-blue-900">Didi:</span>
                      <span className="text-blue-800 ml-2">Refers to a worker registered on the Meri Didi platform who performs domestic services (e.g., cooking, cleaning, caregiving) as a third-party independent contractor.</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="font-semibold text-green-900">Company:</span>
                      <span className="text-green-800 ml-2">Aara Green InfoSolutions Pvt. Ltd. ("Meri Didi").</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="font-semibold text-purple-900">Platform:</span>
                      <span className="text-purple-800 ml-2">Meri Didi's mobile application and website through which services are booked and managed.</span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="font-semibold text-orange-900">User:</span>
                      <span className="text-orange-800 ml-2">A customer who books services through the Meri Didi platform.</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">2. Nature of Engagement</h2>
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                      <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">This is not an employment contract. You (the Didi) are engaged on a contractual, non-employee basis.</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">You are an independent service provider, not entitled to employee benefits like PF, ESI, or paid leave.</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Meri Didi only acts as a facilitator between you and the User.</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">3. Registration & Verification</h2>
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Workers must provide genuine documents (Aadhaar, PAN, references, etc.).</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">You agree to mandatory police verification and a background check.</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border border-red-100">
                      <span className="inline-block w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Misrepresentation or forgery of documents will lead to permanent termination and potential legal action.</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">4. Duties & Conduct</h2>
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">You must perform tasks only as per the booked service plan (Basic, Standard, or Premium).</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                      <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">You must not accept personal work or cash from the customer outside the platform.</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="text-neutral-700 font-medium mb-3 block">You agree to:</span>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">Maintain punctuality and hygiene.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">Wear the uniform (if provided).</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">Maintain respectful, non-abusive conduct at all times.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">Refrain from asking personal or financial Favors from customers.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">5. Payment & Commission</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Payments are released either:</span>
                      <ul className="mt-2 ml-6 space-y-1 text-sm">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          Weekly/monthly via the platform.
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          Daily if agreed, after verification by the supervisor or app log.
                        </li>
                      </ul>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Commission will be deducted as per your selected plan (Basic/Standard/Premium).
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Direct cash transactions with customers are prohibited.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">6. Training & Uniform</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      A one-time training fee and uniform fee is chargeable, as disclosed during onboarding.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Uniform must be worn during every assigned job unless informed otherwise.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-red-500 pl-4">7. Termination of Service</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-3">Your services can be terminated immediately, and legal action may be initiated if you:</p>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Repeatedly miss duties without valid reason.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Are rude, abusive, or violent towards customers or their families.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Engage in theft, harassment, physical assault, or breach of trust.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Misuse customer belongings or enter restricted areas without permission.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Accept private jobs from users without Company knowledge.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Violate confidentiality, misuse customer data, or threaten safety.
                      </li>
                    </ul>
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <strong>Important:</strong> Serious offences such as physical assault, harassment, theft, or criminal trespassing shall be reported to the police and are liable to be punished under the Bhartiya Nyaya Sanhita (BNS), 2023.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">8. Leave & Absence</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Sudden leave must be informed at least 24 hours in advance.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Uninformed absence beyond 2 days can lead to replacement or blacklisting.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Long leave (over 3 days) must be pre-approved by your supervisor.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">9. Confidentiality</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      You agree not to disclose customer address, family details, financial information, or any sensitive data to outsiders.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Violation of data privacy rules will result in termination and legal action under the IT Act, 2000.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">10. Safety & Dispute Handling</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      You have the right to refuse work in unsafe environments (e.g., harassment, locked doors, aggressive pets).
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Report any unsafe condition or misbehaviour to the Meri Didi support team immediately.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      The Company will provide support and mediation in case of disputes.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-red-500 pl-4">11. Prohibited Conduct</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium mb-3">Workers must not:</p>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Take photos, videos, or recordings inside the customer's house.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Use customer's property without explicit permission.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Smoke, consume alcohol, or chew tobacco on duty.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Bring unauthorized persons or children to the job site.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Engage in misbehaviour, threats, or any act that causes discomfort to the customer.
                      </li>
                    </ul>
                    <p className="text-red-700 text-sm mt-3 font-medium">
                      In case of any such misconduct, the Company reserves the right to involve the police. Serious offenses will be dealt with as per the BNS. Customers are advised to report such instances to our support helpline immediately, and not directly confront the worker.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">12. Incentives & Penalties</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-green-50 to-green-25 border border-green-200 rounded-xl p-6 shadow-md">
                      <h3 className="font-bold text-green-800 mb-4 text-xl">🏆 Incentives</h3>
                      <p className="text-green-700 mb-4">You may be eligible for rewards based on:</p>
                      <div className="space-y-3">
                        <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                          <span className="text-green-600 mr-3">⏰</span>
                          <span className="text-green-800">Regular punctuality</span>
                        </div>
                        <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                          <span className="text-green-600 mr-3">⭐</span>
                          <span className="text-green-800">High service ratings by customers</span>
                        </div>
                        <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                          <span className="text-green-600 mr-3">👥</span>
                          <span className="text-green-800">Successful referrals of other workers</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-25 border border-red-200 rounded-xl p-8 shadow-md">
                      <h3 className="font-bold text-red-800 mb-4 text-xl">⚠️ Penalties</h3>
                      <p className="text-red-700 mb-4">Applicable fines and actions may include:</p>
                      
                      <div className="bg-white rounded-lg border border-red-200 overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-red-100">
                            <tr>
                              <th className="text-left py-3 px-4 font-semibold text-red-800">Offense</th>
                              <th className="text-left py-3 px-4 font-semibold text-red-800">Fine</th>
                              <th className="text-left py-3 px-4 font-semibold text-red-800">Action</th>
                            </tr>
                          </thead>
                          <tbody className="text-red-700">
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">Late arrival (more than 20 mins)</td>
                              <td className="py-3 px-4 font-semibold">₹50</td>
                              <td className="py-3 px-4">Verbal warning</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">Missed duty without notice</td>
                              <td className="py-3 px-4 font-semibold">₹100</td>
                              <td className="py-3 px-4">May lead to suspension</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">Misuse of customer's item</td>
                              <td className="py-3 px-4 font-semibold">₹200</td>
                              <td className="py-3 px-4">Deduction + complaint record</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">Verbal abuse / Disrespect</td>
                              <td className="py-3 px-4 font-semibold">₹500</td>
                              <td className="py-3 px-4">Temporary suspension</td>
                            </tr>
                            <tr className="bg-red-50">
                              <td className="py-3 px-4 font-semibold">Theft / Assault / Serious breach</td>
                              <td className="py-3 px-4 font-semibold">N/A</td>
                              <td className="py-3 px-4 font-semibold">Immediate termination + FIR under BNS</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                        <p className="text-red-800 text-xs font-medium">
                          ⚖️ Note: Offenses involving force, abuse, physical harm, or criminal behavior shall be escalated to law enforcement and may result in imprisonment under applicable sections of BNS, 2023.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">13. Dispute Resolution</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Disputes between Didi and customer will first be handled by the supervisor team.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      If unresolved, arbitration will be conducted as per the Arbitration & Conciliation Act, 1996.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Legal jurisdiction: Nagpur, Maharashtra.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">14. Legal & Compliance Issues</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm leading-relaxed mb-3">
                      This agreement is governed by the Indian Contract Act, 1872 and applicable Indian laws including the Bharatiya Nyaya Sanhita (BNS), 2023, IT Act, 2000, and the POSH Act, 2013.
                    </p>
                    <p className="text-blue-800 text-sm leading-relaxed mb-3">
                      Serious offences such as physical assault, criminal intimidation, theft, sexual harassment, or criminal trespass committed by a worker during duty hours shall be liable to legal action and punishment under the BNS, 2023. Relevant sections include but are not limited to:
                    </p>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        Section 119–123: Assault or use of criminal force
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        Section 131: Criminal intimidation
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        Section 303: Theft
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        Section 324: Criminal trespass
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        Section 74: Sexual harassment
                      </li>
                    </ul>
                    <p className="text-blue-800 text-sm mt-3 font-medium">
                      In case of such incidents, the Company will support police investigation and provide all necessary worker records and identification to assist legal proceedings.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">15. Worker Protection & Grievance Redressal</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm leading-relaxed mb-3">
                      Workers have the right to refuse unsafe or harassing work environments under the Labour Code on Occupational Safety and the POSH Act. They must immediately report such incidents to the company helpline within 24 hours.
                    </p>
                    <p className="text-green-800 text-sm leading-relaxed">
                      Customers are advised to contact the Meri Didi support team in case of any worker misconduct. Serious incidents should be reported directly to the local police. The Company will cooperate fully with law enforcement.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">16. Wage Transparency & Payment</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      All payments to workers will be made through the platform or direct bank transfer to ensure transparency. Workers shall not be paid below the local minimum wage applicable in their job category. No cash transactions are allowed with customers.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">17. Acceptance of Terms</h2>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                    <p className="text-neutral-800 text-sm leading-relaxed mb-3">
                      By signing the registration form or joining the platform, you confirm that:
                    </p>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        You have understood and accepted these terms.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        You will comply with Meri Didi's rules and instructions.
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        You authorize the company to act as a facilitator for your services and payments.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Added Refund Policy section */}
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">Refund Policy</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    The refund will be initiated only if cancellation is done within 7 days of booking.
                  </p>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 text-neutral-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="Meri Didi Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-heading font-bold text-white">Meri Didi</span>
            </div>
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Meri Didi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
