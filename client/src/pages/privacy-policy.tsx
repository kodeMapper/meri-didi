import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft, ExternalLink, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
];

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
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
      {/* Custom Header for Privacy Policy Page */}
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
                      <span className="text-sm">{i18n.language === 'hi' ? 'HI' : 'EN'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map((lang) => (
                      <DropdownMenuItem 
                        key={lang.code} 
                        className="cursor-pointer"
                        onClick={() => i18n.changeLanguage(lang.code)}
                      >
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
                  {t("privacyPolicy.backToHome")}
                </Button>
              </Link>
            </div>

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("privacyPolicy.title")}
            </motion.h1>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-blue-800 text-base leading-relaxed mb-4">
                  Welcome to MeriDiDi's privacy policy ("Privacy Policy" or "Policy"). MeriDiDi Hospitality Private Limited and its affiliates (collectively, "MeriDiDi", "we" or "us") are engaged in the business of providing web based solutions to facilitate connections between customers that seek specific services and independent service providers / professionals that offer these services. This Policy outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data that you have consented to share with us when you access, use, or otherwise interact with our website available at https://www.MeriDiDi.com/ or mobile applications 'MeriDiDi' and 'MeriDiDi Partner' (collectively, "Platform") or avail products or services that MeriDiDi offers you on or through the Platform (collectively, the "Services"). In this Policy the services offered by service professionals / Helpers on or through the Platform are referred to as "Helper services".
                </p>
                
                <p className="text-blue-800 text-base leading-relaxed mb-4">
                  At MeriDiDi, we are committed to protecting your personal data and respecting your privacy. In order to provide you with access to the Services and the Helper services, we have to collect and otherwise process certain data about you. This Policy explains how we process and use personal data about you. Please note that unless specifically defined in this Policy, capitalised terms shall have the same meaning ascribed to them in our respective user/Helper Terms and Conditions.
                </p>
                
                <p className="text-blue-800 text-base leading-relaxed">
                  Please read this Policy in consonance with the Terms. By using the Services, you confirm that you have read and agree to be bound by this Policy and consent to the processing activities described under this Policy. Please refer to Section 1 to understand how the terms of this Policy apply to you.
                </p>
              </div>

              <div className="space-y-10">
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">1. OBJECTIVE AND BACKGROUND</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    The purpose of this Privacy Policy is to maintain the privacy of and protect the personal information of employees, associates, customers and business partners of MeriDiDi and ensure compliance with laws and regulations applicable to MeriDiDi. This Privacy Policy sets out how MeriDiDi uses and protects any information that you have consented to share with MeriDiDi when you use this website. MeriDiDi is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this Privacy Policy and prior consent. MeriDiDi may change this Policy from time to time by updating this page and use of our services after an update constitutes consent to the updated policy to the extent permitted by law.
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">2. SCOPE</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    This Policy is applicable to all MeriDiDi employees, associates, customers and business partners who may receive personal information, have access to personal information collected or processed, or who provide information to MeriDiDi. "PERSONAL DATA" means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession). "USAGE DATA" is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit). "USER DATA" includes both, Personal Data, and Usage Data, And any other data obtained from the User including via Cookies. "COOKIES" are small files stored on your device (computer or mobile device).
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">3. WHAT WE COLLECT</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    We may collect Personal Data, Usage Data, including your personal information, and your sensitive personal data and information (as defined in the Information Technology (Reasonable Security Practices and Procedures, and sensitive personal data or information) Rules, 2011, and specifically including:
                  </p>
                  <div className="grid gap-3">
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Contact Data, such as your mailing or home address, location, email addresses, and mobile numbers</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">All information that a user chooses to share on the Platform such as photos, screenshots, comments, events or other user generated content that may be uploaded on our Website</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Other information such as postal code, password, birthdate, height, weight your gender, education qualifications and proof thereof, mobile number, address and other information you may provide in order to validate your account/use the Services. Your profile picture, if any, along with basic information such as your name/company name may be viewed by other users on the platform as part of your account information</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Contacts Information and lists, stored in / used in your phone and/or on your sim card</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Identity and Profile Data, such as your name, username or similar identifiers, photographs, likenesses, your image / photograph as may be uploaded/provided to us separately, and gender</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Marketing and Communications Data, such as your address, email address, information posted in service requests, offers, wants, feedback, common pictures and discussions in our blog and chat boxes, responses to user surveys and polls, your preferences in receiving marketing communications from us and our third parties, and your communication preferences. We also collect your chat and call records when you communicate with service professional through the Platform</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Access to your messages/ SMS data</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Photos, storage, files, etc. that you may access/ upload during your use of the Services and the Platform, including for grievances, customer support, reviews, account creation, etc</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Device information: We may collect information about the device you are using the Services on, including what type of device it is, what operating system you are using, device settings, application IDs, unique device identifiers, and crash data. Whether we collect some or all of this information often depends on what type of device you are using and its settings</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Technical data and log data, which includes your IP address, browser type, internet service provider, details of operating system, access time, page views, device type, frequency of visiting our website and use of the Platform, website and mobile application activity, clicks, date and time stamps, location data and other technology on the devices that you use to access the Platform. This log data may include your internet protocol address, the address of the web page you visited before using the Services, your browser type and settings, the date and time of your use of the Services, information about your browser configuration and plug-ins, language preferences, and cookie data, locale and language preferences, and system configuration information</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Transaction Data, such as details of the Services or Helper services you have availed/provided, a limited portion of your credit or debit card details for tracking transactions that are provided to us by payment processors, and UPI IDs for processing payments</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Data about your food and beverage preferences and consumptions, including specifically stocks of food at home, kinds of brands / food preferred/consumed/ordered, etc</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Usage Data, which includes information about how you use the Services and Helper services</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">We also collect, use, and share aggregated data such as statistical or demographic data for any purpose. Aggregated data could be derived from your personal data but is not considered personal data under law as it does not directly or indirectly reveal your identity. However, if we combine or connect aggregated data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this Policy</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Government issued identifiers such as Aadhar details, PAN Card (if provided to us by you), driver's license, or other forms of governmental identification</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Other information relevant to customer surveys and/or offers/and/or required to use/avail the Services and/or Helper services</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Geo-location information: Precise GPS location from devices may be required for effective delivery of the Services, and will as such be collected with your permission. Wi-Fi and IP addresses received from your browser or device may be used to determine approximate location</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">If, when using the Services, you integrate with a third-party service, we will connect that service to ours. The third-party provider of the integration may share certain information about your account with us, including certain information about you, including but not limited to your contacts and other "likes". You would also be bound by the privacy policies of these third party services. However, we do not receive or store your passwords for any of these third-party services</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">Third Party Data: We may also receive information from affiliates in our corporate group, our partners, or others that we use to make our own information better or more useful. This might be aggregate level information, such as which IP addresses go with which PIN/ZIP codes, or it might be more specific information, such as about how well an online marketing or email campaign performed</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">4. HOW DO WE COLLECT PERSONAL DATA?</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    We use different methods to collect personal data from and about you including through:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-25 border border-blue-200 rounded-lg p-5">
                      <h3 className="font-bold text-blue-900 mb-3 text-lg">Direct Interactions</h3>
                      <p className="text-blue-800 mb-3">You provide us your personal data when you interact with us. This includes personal data you provide when you:</p>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Create an account or profile with us</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Use our Services or carry out other activities in connection with the Services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Enter a promotion, user poll, or online surveys</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Request marketing communications to be sent to you</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Report a problem with the Platform and/or our Services, give us feedback or contact us</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-25 border border-green-200 rounded-lg p-5">
                      <h3 className="font-bold text-green-900 mb-3 text-lg">Automated technologies or interactions</h3>
                      <p className="text-green-800">Each time you visit the Platform or use the Services, we will automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, web beacons, pixel tags, server logs, and other similar technologies. We may also receive Technical Data about you if you visit other websites or apps that employ our cookies.</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-25 border border-purple-200 rounded-lg p-5">
                      <h3 className="font-bold text-purple-900 mb-3 text-lg">Third parties or publicly available sources</h3>
                      <p className="text-purple-800 mb-3">We will receive personal data about you from various third parties:</p>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Technical data from analytics providers such as Facebook and advertising networks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Identity and profile-related Data and Contact Data from service professionals, publicly available sources, etc.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>Personal data about you from our affiliate entities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      We may also use 3rd-party browser and mobile analytics services including but not limited to Google Analytics, Hotjar, GetSiteControl, Mixpanel, Leadsquared, Wistia, YouTube and Drift on the Services. These services use Data Collection Tools to help us analyze your use of the Services, including information like the third-party website you arrive from, how often you visit, events within the Services, usage and performance data. We use this data to improve the Services, better understand how the Services perform on different devices and provide information that may be of interest to you.
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      We may also obtain both personal and non-personal information about you from advertising companies, and ads network, business partners, contractors and other third parties and add it to our account information or other information we have collected. Examples of such information that we may receive include: updated delivery and address information, purchase history, and additional demographic information. We may combine this information with information we collect through our Platform or from other sources.
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      You may optionally provide us with this information through third-party sign-in services such as but not limited to Facebook, LinkedIn, and Google. In such cases, we procure and store any information about you that is made available to us through these sign-in services.
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      We collect user data including personal information and sensitive personal information to operate effectively and provide you with the best experiences with our services. You provide some of this information directly, such as when you create an account, make a purchase, or contact us for support. We get some of your information, such as your IP address, by recording how you interact with our services. We may also get information about you from our business partners or other third parties.
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      We may receive and collect certain personal information automatically, as outlined elsewhere in this Policy, and including analytics regarding our Websites and Apps, information your Internet browser automatically sends when you visit our Websites and Apps, and information collected by cookies. We may collect personal information that can identify you such as your name and email address, and other information that does not identify you.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">5. WHAT WE DO WITH THE INFORMATION WE GATHER</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data where we need to provide you with the Services, enable you to use the Helper services, or where we need to comply with a legal obligation. We use your personal data for the following purposes: We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                  </p>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To verify your identity to register you as a user, and create your user account with us on the Platform</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To provide the Services to you</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To enable the provision of Helper services to you</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To monitor trends, and/or to personalize your experience</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To improve the functionality of our Services based on the information and feedback we receive from you</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To improve customer service to more effectively respond to your Service requests, support needs, and/or your orders of Helper services</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To track transactions and process payments</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To improve our products and services, business and delivery models</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided, and/or to provide you offers / invites / coupons of the Services, Helper services and/or third party products and services</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To use your information to contact you for market research purposes. We may contact you by email, phone, fax, in person, or mail. We may use the information to customize the website according to your interests</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To assist with the facilitation of the Helper services offered to you, including to send you information and updates about the Helper services you have availed</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To market and advertise the Services to you</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To manage our business and in any other way we may describe when you provide the information</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">To use the information you provided to occasionally notify you about the product or services and other valuable updates to personalize your shopping transactions (if you prefer that we not contact you in this manner please follow the Opt-Out instructions elsewhere in this Policy)</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">6. COOKIES</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <p className="text-orange-800 text-base leading-relaxed mb-6">
                      Cookies are alphanumeric identifiers or small files that we transfer to your device through your web browser/mobile device to enable our systems to recognise your browser and to provide features such as 'Recommended for You', personalised advertisements on other websites. Cookies can be either session cookies or persistent cookies. A session cookie expires when you close your browser and is used to make it easier for you to navigate our website. A persistent cookie remains on your hard drive for an extended period.
                    </p>
                    
                    <div className="text-orange-800 mb-6">
                      <p className="font-semibold mb-3">Cookies and Data Collection Tools:</p>
                      <p className="mb-4">We and other service providers we use (such as Google Analytics, third party advertisers, etc) may use server log files and automated data collection tools like cookies, tags, scripts, customized links, device or browser fingerprints, and web beacons ("Data Collection Tools") when you interact with/use/access the Services. These Data Collection Tools may automatically track and collect certain information including System Data and Usage Data when you use the Services.</p>
                    </div>
                    
                    <div className="text-orange-800 mb-6">
                      <p className="font-semibold mb-3">Cookie Management:</p>
                      <p className="mb-4">Most browsers allow you to prevent them from accepting new cookies or disable cookies altogether. Each browser is different; so, check the 'help' menu of your browser to learn how to change your cookie preferences. Since cookies allow you to take advantage of some of the website's essential features, we recommend that you leave them turned on. If you choose to decline cookies, you may not be able to use other interactive features on our Website.</p>
                    </div>

                    <div className="text-orange-800">
                      <p className="font-semibold mb-3">Cookies enable us to do various things including:</p>
                      <ul className="space-y-3 ml-5">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>To estimate our users' size and usage pattern.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>To store information about your preferences, and allow us to customize our website according to your interests.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>To speed up your searches.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>To help us distinguish you from other users of the Platform, understand and save your preferences for future visits.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>To recognize you when you return to our website.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Provide general internal analytics.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Study traffic patterns in order to improve Website performance and customize your experience.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Support security measures, such as requiring re-login into the website after a certain time period has elapsed.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Save your username and password, if you login to our Website, so that we can process the saved information and quickly log you into the Website.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Assist in identifying possible fraudulent activities.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">7. SECURITY</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-800 text-base leading-relaxed">
                      We implement appropriate security measures and privacy-protective features on our Platform including encryption, password protection, and other security measures to protect your personal data from unauthorised access and disclosure, and follow standards prescribed by applicable laws. We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. Where you have chosen a password that enables you to access certain parts of the Services and/or Helper services, you are responsible for keeping password secret and confidential. We will not be responsible for any unauthorised use of your information, or for any lost, stolen, or compromised passwords, or for any activity on your user account due to such unauthorised disclosure of your password. In the event your password has been compromised in any manner whatsoever, you should promptly notify us to enable us to initiate a change of password. While we are focused on the security of your personal information and follow strict standards, processes and procedures that are designed to protect your personal information, you must remember that the Internet is a global communications vehicle open to threats, viruses and intrusions from others and so we cannot promise, and you should not expect, that we will be able to protect your personal information at all times and in all circumstances. The security of your data is important to us but remember that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data and information, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">8. YOUR RIGHTS</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ul className="space-y-6">
                      <li>
                        <h3 className="font-bold text-blue-800 mb-2">Inaccurate User Information</h3>
                        <p className="text-blue-700">You have the right to update or correct your information provided under Clause 3. When you use our Services, we will on a best efforts basis, try to provide you with the ability to access and correct inaccurate or deficient data, subject to legal requirements.</p>
                      </li>
                      <li>
                        <h3 className="font-bold text-blue-800 mb-2">Opting-out of Marketing and Promotional Communications</h3>
                        <p className="text-blue-700">When we send you marketing and promotional content through email, we make best efforts to provide you with the ability to opt-out of such communications by using the opt-out instructions provided in such emails. You understand and acknowledge that it may take us up to 7 (seven) working days to give effect to your opt-out request. Please note that we may still send you emails about your user account or any services you have requested or received from us.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">9. OBLIGATION</h2>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <p className="text-purple-800 text-base leading-relaxed mb-4">
                      You agree that you will not host, display, upload, modify, publish, transmit, store, update or share any information that-
                    </p>
                    <div className="ml-8 space-y-6">
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">belongs to another person and to which you do not have any right;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">is defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily privacy, insulting or harassing on the basis of gender, libellous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">is harmful to child;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">infringes any patent, trademark, copyright or other proprietary rights;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">violates any law for the time being in force;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">impersonates another person;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting other nation;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource;</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.</span>
                      </div>
                    </div>
                    <p className="mt-6 text-purple-800 text-base leading-relaxed">
                      MeriDiDi shall have the right to terminate your access or usage rights if you do not comply with rules and regulations, Privacy Policy or user agreement for access or usage of the computer resource of such intermediary or if the information shared does not comply with the above obligation.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">10. TRANSFERS AND DISCLOSURES OF YOUR PERSONAL DATA</h2>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <p className="text-indigo-800 text-base leading-relaxed mb-4">
                      Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. We share your personal information as necessary to provide the services you request, including sharing information with third party service providers; when required by law; to protect rights and safety, and with your consent.
                    </p>
                    
                    <p className="text-indigo-800 font-semibold mb-3">We may share personal information with:</p>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-indigo-700">
                          <p className="font-semibold mb-1">Authorized service providers:</p>
                          <p>We may share your personal information with our authorized service providers that perform certain services on our behalf. These services may include fulfilling orders, processing credit card payments, delivering packages, providing customer service and marketing assistance, performing business and sales analysis, data analysis, supporting our Platform functionality, and supporting contests, promotions, sweepstakes, surveys and other features offered through our Platform. These service providers may have access to personal information needed to perform their functions but are not permitted to share or use such information for any other purposes.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-indigo-700">
                          <p className="font-semibold mb-1">Business partners:</p>
                          <p>When you make purchases or engage in promotions offered through our Platform, we may share personal information with the businesses with which we partner to offer you those products, services, promotions, contests and/or sweepstakes. When you elect to engage in a particular merchant's offer or program, you authorize us to provide your email address and other information to that merchant.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-indigo-700">
                          <p className="font-semibold mb-1">Third parties' advertisers on our Platform:</p>
                          <p>We may allow third-parties, advertising companies, and ad networks, to display advertisements on our Websites and Apps. These companies also may use tracking technologies, such as cookies, to collect information about users who view or interact with their advertisements. They may collect information about where you, or others who are using your computer, saw and/or clicked on the advertisements they deliver, and possibly associate this information with your subsequent visits to the advertised websites. They also may combine this information with other personal information they collect from you or from other third parties.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">11. DELETION OF ACCOUNT</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-red-800 text-base leading-relaxed">
                      Notwithstanding anything contained in the policy, you may terminate your relation with MeriDiDi and delete your personal data stored with MeriDiDi by sending an email to support@MeriDiDi.com. We may take up to 30 (Thirty) working days to process your request and provide you confirmation through email. Once your account is deleted, you will lose access to all services. For avoidance of doubt, it is hereby clarified that all data with respect to transactions performed by you on the platform will be retained in accordance with applicable law.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">12. LINKS TO OTHER WEBSITES</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <p className="text-orange-800 text-base leading-relaxed">
                      Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this Privacy Policy. You should exercise caution and look at the privacy statement applicable to the website in question. We will not sell, distribute or lease your personal information to third parties unless we have your prior permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen. You may request details of personal information which we hold about you for a small fee. If you would like a softcopy of the information about you, please write to support@MeriDiDi.com. If you believe that any information, we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">13. DATA RETENTION AND STORAGE</h2>
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <p className="text-teal-800 text-base leading-relaxed mb-4">
                      MeriDiDi takes your data privacy seriously. Here's how we manage the storage and retention of your information:
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">Retention Period:</p>
                          <p>You agree and acknowledge that your personal data will continue to be stored and retained by us for as long as necessary to fulfil our stated purpose(s) and for a reasonable period after the termination of your account on the platform or access to the services to comply with our legal rights and obligations.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">Aggregated Data:</p>
                          <p>In some circumstances, we may aggregate your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">Security Measures:</p>
                          <p>MeriDiDi will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy. Your information collected by us may be stored by us or our affiliates, business partners, suppliers and subcontractors. Information may also be stored in or outside India. Your information shall be stored only for the period necessary for purposes specified hereinabove.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">User Consent:</p>
                          <p>By visiting, accessing and/or using the Website and/or submitting your information, you consent to such storage of your information, including your Personal Information and Usage Data.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">14. DISPUTE RESOLUTION FOR CUSTOMER / THIRD PARTY</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p className="text-yellow-800 text-base leading-relaxed">
                      Customers / Third Party with inquiries or complaints about the processing of their personal information shall bring the matter to the attention of the Grievance Officer/Customer Care in writing. Any disputes concerning the processing of the personal information of non-employees shall be resolved through alternative dispute resolution mechanisms such as mediation, arbitration, conciliation etc.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">15. CONTACTING US</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-800 text-base leading-relaxed">
                      If there are any questions regarding this Policy you may contact us using the information on the 'Contact Us' page on MeriDiDi' website, or reach out to our Grievance Officer.
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">16. GRIEVANCE OFFICER</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-blue-800 text-base leading-relaxed">
                      MeriDiDi has appointed a grievance officer/Customer Care in accordance with the Information Technology (Reasonable Security Practices and procedures and sensitive personal data or information) Rules, 2011. Any grievance or complaint may be intimated to the customer care via e-mail at support@MeriDiDi.com. Redressal of the complaint shall be within a period of one (1) month. However, MeriDiDi will aim to redress/deal with the grievance/complaint in a timely manner.
                    </p>
                  </div>
                </section>

                <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    This Privacy Policy is effective immediately and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                  </p>
                </div>
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
