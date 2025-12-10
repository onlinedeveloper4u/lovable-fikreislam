import Layout from "@/components/layout/Layout";
import { Video } from "lucide-react";

const VideoPage = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
            <Video className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Video Library
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Watch educational lectures and documentaries. Coming soon with authentication.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;
