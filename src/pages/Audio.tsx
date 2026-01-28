import Layout from "@/components/layout/Layout";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { QASection } from "@/components/qa/QASection";

const Audio = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <ContentBrowser 
          contentType="audio"
          title="Audio Library"
          description="Listen to Qur'an recitations, lectures, and nasheeds"
        />
        <QASection contentType="audio" title="Audio Q&A" />
      </div>
    </Layout>
  );
};

export default Audio;
