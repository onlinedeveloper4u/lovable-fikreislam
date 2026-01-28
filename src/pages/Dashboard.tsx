import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';
import { ContentUploadForm } from '@/components/contributor/ContentUploadForm';
import { MyContentList } from '@/components/contributor/MyContentList';
import { PendingContentList } from '@/components/admin/PendingContentList';
import { AllContentList } from '@/components/admin/AllContentList';
import { UserManagement } from '@/components/admin/UserManagement';
import { AdminAnalytics } from '@/components/admin/AdminAnalytics';
import { PendingAnswersList } from '@/components/admin/PendingAnswersList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FolderOpen, Clock, FileText, Users, BarChart3, LayoutDashboard, MessageCircle } from 'lucide-react';

export default function Dashboard() {
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

  const isAdmin = role === 'admin';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-display font-bold text-foreground">
              Dashboard
            </h1>
          </div>
          <p className="text-muted-foreground">
            {isAdmin 
              ? 'Manage content, users, and view analytics' 
              : 'Upload and manage your Islamic content'}
          </p>
        </div>

        <Tabs defaultValue={isAdmin ? "analytics" : "upload"} className="space-y-6">
          <TabsList className={`grid w-full max-w-4xl ${isAdmin ? 'grid-cols-7' : 'grid-cols-2'}`}>
            {isAdmin && (
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
            )}
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="my-content" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              <span className="hidden sm:inline">My Content</span>
            </TabsTrigger>
            {isAdmin && (
              <>
                <TabsTrigger value="pending" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="hidden sm:inline">Pending</span>
                </TabsTrigger>
                <TabsTrigger value="pending-answers" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Q&A</span>
                </TabsTrigger>
                <TabsTrigger value="all-content" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">All Content</span>
                </TabsTrigger>
                <TabsTrigger value="users" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Users</span>
                </TabsTrigger>
              </>
            )}
          </TabsList>

          {isAdmin && (
            <TabsContent value="analytics">
              <AdminAnalytics />
            </TabsContent>
          )}

          <TabsContent value="upload">
            <div className="max-w-2xl">
              <ContentUploadForm />
            </div>
          </TabsContent>

          <TabsContent value="my-content">
            <MyContentList />
          </TabsContent>

          {isAdmin && (
            <>
              <TabsContent value="pending">
                <PendingContentList />
              </TabsContent>

              <TabsContent value="pending-answers">
                <PendingAnswersList />
              </TabsContent>

              <TabsContent value="all-content">
                <AllContentList />
              </TabsContent>

              <TabsContent value="users">
                <UserManagement />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </Layout>
  );
}
