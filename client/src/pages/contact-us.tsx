import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  MapPin,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactUs() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Phone,
      title: t("contactUs.contactMethods.phone.title"),
      description: t("contactUs.contactMethods.phone.description"),
      value: t("contactUs.contactMethods.phone.value"),
      action: "tel:+919960173586",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: t("contactUs.contactMethods.email.title"),
      description: t("contactUs.contactMethods.email.description"),
      value: t("contactUs.contactMethods.email.value"),
      action: "mailto:merididiofficial@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: t("contactUs.contactMethods.whatsapp.title"),
      description: t("contactUs.contactMethods.whatsapp.description"),
      value: t("contactUs.contactMethods.whatsapp.value"),
      action: "https://wa.me/919960173586",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: t("contactUs.contactMethods.address.title"),
      description: t("contactUs.contactMethods.address.description"),
      value: t("contactUs.contactMethods.address.value"),
      action: "#",
      color: "text-red-600"
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: t("contactUs.socialMedia.facebook"),
      url: "https://www.facebook.com/share/1BhfZePSDD/",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: t("contactUs.socialMedia.instagram"),
      url: "https://instagram.com/merididiofficial",
      color: "hover:text-pink-600"
    },
    {
      icon: Twitter,
      name: t("contactUs.socialMedia.twitter"),
      url: "https://twitter.com/merididi",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: t("contactUs.socialMedia.linkedin"),
      url: "https://www.linkedin.com/in/merididi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-700"
    },
    {
      icon: Youtube,
      name: t("contactUs.socialMedia.youtube"),
      url: "https://youtube.com/@merididiofficial",
      color: "hover:text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-neutral-600 hover:text-neutral-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("common.backToHome")}
            </Button>
          </Link>
          <motion.h1 
            className="text-4xl font-heading font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("contactUs.title")}
          </motion.h1>
          <p className="text-lg text-neutral-600">
            {t("contactUs.subtitle")}
          </p>
        </div>

        {/* Contact Methods */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-neutral-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4 ${method.color}`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{method.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(method.action, '_blank')}
                    className="w-full h-auto py-2 px-3 text-xs leading-relaxed whitespace-normal break-words"
                  >
                    {method.value}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Social Media */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">{t("contactUs.socialMedia.title")}</h2>
          <div className="flex justify-center space-x-6">
            {socialMedia.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`w-16 h-16 rounded-full p-0 border-2 transition-all duration-300 ${social.color}`}
                onClick={() => window.open(social.url, '_blank')}
              >
                <social.icon className="h-6 w-6" />
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="border-neutral-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{t("contactUs.businessHours.title")}</h3>
                <div className="space-y-2 text-neutral-700">
                  <p><strong>{t("contactUs.businessHours.weekdays")}</strong></p>
                  <p><strong>{t("contactUs.businessHours.sunday")}</strong></p>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-neutral-600">
                    {t("contactUs.businessHours.supportNote")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{t("contactUs.cta.title")}</h3>
            <p className="text-neutral-600 mb-6">
              {t("contactUs.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/919960173586', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {t("contactUs.cta.whatsappButton")}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:+919960173586', '_blank')}
              >
                <Phone className="h-4 w-4 mr-2" />
                {t("contactUs.cta.callButton")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
