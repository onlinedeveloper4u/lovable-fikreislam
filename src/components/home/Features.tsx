import { Search, Download, Heart, Users, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find content quickly with advanced search and filtering options",
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download books and audio for offline reading and listening",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Create personalized collections and playlists of your favorite content",
  },
  {
    icon: Users,
    title: "Community Contributions",
    description: "Scholars and contributors share authentic Islamic knowledge",
  },
  {
    icon: Shield,
    title: "Verified Content",
    description: "All content is reviewed and approved by our editorial team",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Content available in Arabic, English, Urdu, and more languages",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Your{" "}
            <span className="text-gradient">Spiritual Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access a comprehensive platform designed to make Islamic knowledge accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
