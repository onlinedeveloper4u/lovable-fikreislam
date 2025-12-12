import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Headphones, Video } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center gradient-hero islamic-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 md:w-64 h-32 md:h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-24 md:w-48 h-24 md:h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 md:mb-8 animate-fade-in">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent animate-pulse" />
            Your Gateway to Islamic Knowledge
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 animate-slide-up leading-tight">
            Discover the Beauty of{" "}
            <span className="inline-block bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent">
              Islamic Wisdom
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 animate-slide-up px-4 sm:px-0" style={{ animationDelay: "0.2s" }}>
            Explore a curated collection of authentic Islamic books, Qur'an recitations, 
            lectures, and educational videos to enrich your spiritual journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 animate-slide-up px-4 sm:px-0" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/register">
                Start Exploring
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/books">Browse Library</Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-slide-up px-2 sm:px-0" style={{ animationDelay: "0.6s" }}>
            <Link to="/books" className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl gradient-primary flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Book className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">Books</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Access thousands of Islamic books, PDFs, and scholarly works
              </p>
            </Link>

            <Link to="/audio" className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl gradient-primary flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">Audio</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Listen to Qur'an recitations, lectures, and nasheeds
              </p>
            </Link>

            <Link to="/video" className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/30">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl gradient-primary flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Video className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">Video</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
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
