import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Headphones, Video } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero islamic-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Your Gateway to Islamic Knowledge
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Discover the Beauty of{" "}
            <span className="text-gradient">Islamic Wisdom</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Explore a curated collection of authentic Islamic books, Qur'an recitations, 
            lectures, and educational videos to enrich your spiritual journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Start Exploring
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/books">Browse Library</Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Link to="/books" className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Book className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Books</h3>
              <p className="text-muted-foreground text-sm">
                Access thousands of Islamic books, PDFs, and scholarly works
              </p>
            </Link>

            <Link to="/audio" className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Audio</h3>
              <p className="text-muted-foreground text-sm">
                Listen to Qur'an recitations, lectures, and nasheeds
              </p>
            </Link>

            <Link to="/video" className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Video className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Video</h3>
              <p className="text-muted-foreground text-sm">
                Watch educational lectures and documentaries
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
