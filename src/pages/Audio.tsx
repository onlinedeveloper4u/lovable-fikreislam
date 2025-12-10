import Layout from "@/components/layout/Layout";
import { Headphones } from "lucide-react";

const Audio = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Audio Library
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Listen to Qur'an recitations, lectures, and nasheeds. Coming soon with authentication.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Audio;
