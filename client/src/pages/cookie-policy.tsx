import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-neutral-600 hover:text-neutral-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("common.backToHome")}
            </Button>
          </Link>
          <motion.h1 
            className="text-4xl font-heading font-bold text-neutral-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("cookiePolicy.title")}
          </motion.h1>
          <p className="text-neutral-600">{t("cookiePolicy.effectiveDate")}</p>
        </div>

        {/* Content */}
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-sm p-8 border border-neutral-200">
            <p className="text-neutral-700 leading-relaxed mb-6">
              {t("cookiePolicy.introduction")}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">{t("cookiePolicy.sections.whatAreCookies.title")}</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {t("cookiePolicy.sections.whatAreCookies.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">{t("cookiePolicy.sections.whyWeUseCookies.title")}</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {t("cookiePolicy.sections.whyWeUseCookies.content")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  {(t("cookiePolicy.sections.whyWeUseCookies.reasons", { returnObjects: true }) as string[]).map((reason: string, index: number) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">{t("cookiePolicy.sections.typesOfCookies.title")}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">{t("cookiePolicy.sections.typesOfCookies.essential.title")}</h3>
                    <p className="text-neutral-700">
                      {t("cookiePolicy.sections.typesOfCookies.essential.description")}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">{t("cookiePolicy.sections.typesOfCookies.analytics.title")}</h3>
                    <p className="text-neutral-700">
                      {t("cookiePolicy.sections.typesOfCookies.analytics.description")}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">{t("cookiePolicy.sections.typesOfCookies.marketing.title")}</h3>
                    <p className="text-neutral-700">
                      {t("cookiePolicy.sections.typesOfCookies.marketing.description")}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">{t("cookiePolicy.sections.yourChoices.title")}</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {t("cookiePolicy.sections.yourChoices.content")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  {(t("cookiePolicy.sections.yourChoices.options", { returnObjects: true }) as string[]).map((option: string, index: number) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">{t("cookiePolicy.sections.contactUs.title")}</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {t("cookiePolicy.sections.contactUs.content")}
                </p>
                <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                  <p className="text-neutral-700">
                    {t("cookiePolicy.sections.contactUs.email")}<br />
                    {t("cookiePolicy.sections.contactUs.phone")}<br />
                    {t("cookiePolicy.sections.contactUs.address")}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
