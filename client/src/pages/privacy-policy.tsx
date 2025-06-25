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

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
];

export default function PrivacyPolicy() {
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
          <div className="flex justify-between h-16 items-center">
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

            <div className="hidden md:flex md:ml-10 space-x-8">
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
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
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
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Privacy Policy
            </motion.h1>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Welcome to MeriDiDi's privacy policy ("Privacy Policy" or "Policy"). MeriDiDi Hospitality Private Limited and its affiliates (collectively, "MeriDiDi", "we" or "us") are engaged in the business of providing web based solutions to facilitate connections between customers that seek specific services and independent service providers / professionals that offer these services. This Policy outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data that you have consented to share with us when you access, use, or otherwise interact with our website available at https://www.MeriDiDi.com/ or mobile applications 'MeriDiDi' and 'MeriDiDi Partner' (collectively, "Platform") or avail products or services that MeriDiDi offers you on or through the Platform (collectively, the "Services"). In this Policy the services offered by service professionals / Helpers on or through the Platform are referred to as "Helper services". For more information about the terms of use of how you can avail the Services of MeriDiDi and/or provide/avail the Helper services, please refer to the respective Terms of use at <a href="https://broomees.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">[USER TnC]</a> and <a href="https://play.google.com/store/apps/details?id=app.cybernauts.broomeesWorker" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">[HELPER TnC]</a>
              </p>

              <p className="text-neutral-700 mb-8 leading-relaxed">
                At MeriDiDi, we are committed to protecting your personal data and respecting your privacy. In order to provide you with access to the Services and the Helper services, we have to collect and otherwise process certain data about you. This Policy explains how we process and use personal data about you. Please note that unless specifically defined in this Policy, capitalised terms shall have the same meaning ascribed to them in our respective user/Helper Terms and Conditions, available at <a href="https://broomees.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">[USER TnC]</a> and <a href="https://play.google.com/store/apps/details?id=app.cybernauts.broomeesWorker" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">[HELPER TnC]</a> (collectively and/or individually "Terms").
              </p>

              <p className="text-neutral-700 mb-8 leading-relaxed">
                Please read this Policy in consonance with the Terms. By using the Services, you confirm that you have read and agree to be bound by this Policy and consent to the processing activities described under this Policy. Please refer to Section 1 to understand how the terms of this Policy apply to you.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">1. OBJECTIVE AND BACKGROUND</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    The purpose of this Privacy Policy is to maintain the privacy of and protect the personal information of employees, associates, customers and business partners of MeriDiDi and ensure compliance with laws and regulations applicable to MeriDiDi. This Privacy Policy sets out how MeriDiDi uses and protects any information that you have consented to share with MeriDiDi when you use this website. MeriDiDi is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this Privacy Policy and prior consent. MeriDiDi may change this Policy from time to time by updating this page and use of our services after an update constitutes consent to the updated policy to the extent permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">2. SCOPE</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    This Policy is applicable to all MeriDiDi employees, associates, customers and business partners who may receive personal information, have access to personal information collected or processed, or who provide information to MeriDiDi. "PERSONAL DATA" means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession). "USAGE DATA" is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit). "USER DATA" includes both, Personal Data, and Usage Data, And any other data obtained from the User including via Cookies. "COOKIES" are small files stored on your device (computer or mobile device).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">3. WHAT WE COLLECT</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    We may collect Personal Data, Usage Data, including your personal information, and your sensitive personal data and information (as defined in the Information Technology (Reasonable Security Practices and Procedures, and sensitive personal data or information) Rules, 2011, and specifically including:
                  </p>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Contact Data, such as your mailing or home address, location, email addresses, and mobile numbers
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All information that a user chooses to share on the Platform such as photos, screenshots, comments, events or other user generated content that may be uploaded on our Website
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Other information such as postal code, password, birthdate, height, weight your gender, education qualifications and proof thereof, mobile number, address and other information you may provide in order to validate your account/use the Services
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Contacts Information and lists, stored in / used in your phone and/or on your sim card
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Identity and Profile Data, such as your name, username or similar identifiers, photographs, likenesses, your image / photograph as may be uploaded/provided to us separately, and gender
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Marketing and Communications Data, such as your address, email address, information posted in service requests, offers, wants, feedback, common pictures and discussions in our blog and chat boxes, responses to user surveys and polls, your preferences in receiving marketing communications from us and our third parties, and your communication preferences
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Device information: We may collect information about the device you are using the Services on, including what type of device it is, what operating system you are using, device settings, application IDs, unique device identifiers, and crash data
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Technical data and log data, which includes your IP address, browser type, internet service provider, details of operating system, access time, page views, device type, frequency of visiting our website and use of the Platform
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Transaction Data, such as details of the Services or Helper services you have availed/provided, a limited portion of your credit or debit card details for tracking transactions that are provided to us by payment processors, and UPI IDs for processing payments
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Government issued identifiers such as Aadhar details, PAN Card (if provided to us by you), driver's license, or other forms of governmental identification
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">4. HOW DO WE COLLECT PERSONAL DATA?</h2>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    We use different methods to collect personal data from and about you including through:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">Direct Interactions</h3>
                      <p className="text-neutral-700 text-sm">You provide us your personal data when you interact with us. This includes personal data you provide when you:</p>
                      <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                        <li>• create an account or profile with us;</li>
                        <li>• use our Services or carry out other activities in connection with the Services;</li>
                        <li>• enter a promotion, user poll, or online surveys;</li>
                        <li>• request marketing communications to be sent to you; or</li>
                        <li>• report a problem with the Platform and/or our Services, give us feedback or contact us.</li>
                      </ul>
                    </div>

                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">Automated technologies or interactions</h3>
                      <p className="text-neutral-700 text-sm">Each time you visit the Platform or use the Services, we will automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, web beacons, pixel tags, server logs, and other similar technologies.</p>
                    </div>

                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">Third parties or publicly available sources</h3>
                      <p className="text-neutral-700 text-sm">We will receive personal data about you from various third parties:</p>
                      <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                        <li>• Technical data from analytics providers such as Facebook and advertising networks;</li>
                        <li>• Identity and profile-related Data and Contact Data from service professionals, publicly available sources, etc.;</li>
                        <li>• Personal data about you from our affiliate entities.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">5. WHAT WE DO WITH THE INFORMATION WE GATHER</h2>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data where we need to provide you with the Services, enable you to use the Helper services, or where we need to comply with a legal obligation. We use your personal data for the following purposes:
                  </p>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to verify your identity to register you as a user, and create your user account with us on the Platform;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to provide the Services to you;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to enable the provision of Helper services to you;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to monitor trends, and/or to personalize your experience;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to improve the functionality of our Services based on the information and feedback we receive from you;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to improve customer service to more effectively respond to your Service requests, support needs, and/or your orders of Helper services;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to track transactions and process payments;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to improve our products and services, business and delivery models;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      to periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided;
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">6. DATA SECURITY</h2>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">7. DATA RETENTION</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">8. YOUR LEGAL RIGHTS</h2>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                  </p>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Request access</strong> to your personal data (commonly known as a "data subject access request")
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Request correction</strong> of the personal data that we hold about you
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Request erasure</strong> of your personal data
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Object to processing</strong> of your personal data where we are relying on a legitimate interest
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Request restriction</strong> of processing of your personal data
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Request transfer</strong> of your personal data to you or to a third party
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Withdraw consent</strong> at any time where we are relying on consent to process your personal data
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">9. CONTACT US</h2>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-700 mb-2"><strong>Email:</strong> privacy@merididi.com</p>
                    <p className="text-neutral-700 mb-2"><strong>Phone:</strong> +91-XXX-XXX-XXXX</p>
                    <p className="text-neutral-700"><strong>Address:</strong> MeriDiDi Hospitality Private Limited, [Address], India</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">10. CHANGES TO THIS PRIVACY POLICY</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
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
