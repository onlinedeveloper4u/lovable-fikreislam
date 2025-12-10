import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Upload } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-card islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Users */}
            <div className="p-8 rounded-2xl gradient-primary text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">
                Start Your Journey
              </h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Create a free account to access thousands of authentic Islamic resources, 
                save favorites, and create personalized playlists.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* For Contributors */}
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Become a Contributor
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Share your knowledge with the Ummah. Upload books, lectures, and educational 
                content to benefit millions of Muslims worldwide.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contribute">
                  <Upload className="w-5 h-5" />
                  Start Contributing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
