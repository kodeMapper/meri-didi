import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Heart, 
  Home, 
  Shield, 
  Star 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  const { t } = useTranslation();

  const missionPoints = [
    {
      icon: Users,
      title: t("aboutUs.mission.points.0.title"),
      description: t("aboutUs.mission.points.0.description")
    },
    {
      icon: Heart,
      title: t("aboutUs.mission.points.1.title"),
      description: t("aboutUs.mission.points.1.description")
    },
    {
      icon: Home,
      title: t("aboutUs.mission.points.2.title"),
      description: t("aboutUs.mission.points.2.description")
    },
    {
      icon: Shield,
      title: t("aboutUs.mission.points.3.title"),
      description: t("aboutUs.mission.points.3.description")
    }
  ];

  const whyWeExist = [
    {
      icon: Home,
      title: t("aboutUs.whyWeExist.household.title"),
      description: t("aboutUs.whyWeExist.household.description"),
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: t("aboutUs.whyWeExist.worker.title"),
      description: t("aboutUs.whyWeExist.worker.description"),
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Star,
      title: t("aboutUs.whyWeExist.society.title"),
      description: t("aboutUs.whyWeExist.society.description"),
      color: "bg-purple-100 text-purple-600"
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
            {t("aboutUs.title")}
          </motion.h1>
          <p className="text-lg text-neutral-600">
            {t("aboutUs.subtitle")}
          </p>
        </div>

        {/* Vision Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-neutral-200 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold text-neutral-900 mb-6">{t("aboutUs.vision.title")}</h2>
                <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mx-auto">
                  {t("aboutUs.vision.content")}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">{t("aboutUs.mission.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{point.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Why We Exist Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">{t("aboutUs.whyWeExist.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyWeExist.map((item, index) => (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="border-neutral-200 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{t("aboutUs.cta.title")}</h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                {t("aboutUs.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register-worker">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Users className="h-4 w-4 mr-2" />
                    {t("aboutUs.cta.joinWorker")}
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button size="lg" variant="outline">
                    <Heart className="h-4 w-4 mr-2" />
                    {t("aboutUs.cta.contactUs")}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
