import Layout from "@/components/layout/Layout";
import { Book } from "lucide-react";

const Books = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
            <Book className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Books Library
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Browse our extensive collection of Islamic books and PDFs. Coming soon with authentication.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
