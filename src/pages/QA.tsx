 import Layout from "@/components/layout/Layout";
 import { QASection } from "@/components/qa/QASection";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import { Book, Headphones, Video, HelpCircle } from "lucide-react";
 
 const QA = () => {
   return (
     <Layout>
       <div className="container mx-auto px-4 py-8">
         <div className="mb-8">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
               <HelpCircle className="w-6 h-6 text-primary-foreground" />
             </div>
             <div>
               <h1 className="text-3xl font-display font-bold text-foreground">
                 Questions & Answers
               </h1>
               <p className="text-muted-foreground">
                 Ask questions and get answers from our community
               </p>
             </div>
           </div>
         </div>
 
         <Tabs defaultValue="book" className="space-y-6">
           <TabsList className="grid w-full max-w-md grid-cols-3">
             <TabsTrigger value="book" className="flex items-center gap-2">
               <Book className="h-4 w-4" />
               Books
             </TabsTrigger>
             <TabsTrigger value="audio" className="flex items-center gap-2">
               <Headphones className="h-4 w-4" />
               Audio
             </TabsTrigger>
             <TabsTrigger value="video" className="flex items-center gap-2">
               <Video className="h-4 w-4" />
               Video
             </TabsTrigger>
           </TabsList>
 
           <TabsContent value="book">
             <QASection contentType="book" title="Books Q&A" />
           </TabsContent>
           <TabsContent value="audio">
             <QASection contentType="audio" title="Audio Q&A" />
           </TabsContent>
           <TabsContent value="video">
             <QASection contentType="video" title="Video Q&A" />
           </TabsContent>
         </Tabs>
       </div>
     </Layout>
   );
 };
 
 export default QA;