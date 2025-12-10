import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';
import { ContentUploadForm } from '@/components/contributor/ContentUploadForm';
import { MyContentList } from '@/components/contributor/MyContentList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FolderOpen } from 'lucide-react';

export default function ContributorDashboard() {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || (role !== 'contributor' && role !== 'admin'))) {
      navigate('/login');
    }
  }, [user, role, loading, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!user || (role !== 'contributor' && role !== 'admin')) {
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Contributor Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Upload and manage your Islamic content
          </p>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="my-content" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              My Content
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <div className="max-w-2xl">
              <ContentUploadForm />
            </div>
          </TabsContent>

          <TabsContent value="my-content">
            <MyContentList />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
