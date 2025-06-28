import "./i18n";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import RegisterWorker from "@/pages/register-worker";
import PrivacyPolicy from "@/pages/privacy-policy";
import WorkerTerms from "@/pages/worker-terms";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/register-worker" component={RegisterWorker} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/worker-terms" component={WorkerTerms} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
