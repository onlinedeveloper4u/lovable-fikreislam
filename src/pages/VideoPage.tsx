import Layout from "@/components/layout/Layout";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { QASection } from "@/components/qa/QASection";

const VideoPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <ContentBrowser 
          contentType="video"
          title="Video Library"
          description="Watch educational lectures and documentaries"
        />
        <QASection contentType="video" title="Video Q&A" />
      </div>
    </Layout>
  );
};

export default VideoPage;
