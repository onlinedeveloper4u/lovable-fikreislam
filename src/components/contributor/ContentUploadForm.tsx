import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Upload, FileText, Music, Video, Loader2 } from 'lucide-react';

type ContentType = 'book' | 'audio' | 'video';

const LANGUAGES = ['English', 'Arabic', 'Urdu', 'Turkish', 'Malay', 'Indonesian', 'French', 'Spanish'];

export function ContentUploadForm() {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contentType, setContentType] = useState<ContentType>('book');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('English');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const getAcceptedFileTypes = () => {
    switch (contentType) {
      case 'book': return '.pdf,.epub,.doc,.docx';
      case 'audio': return '.mp3,.wav,.ogg,.m4a';
      case 'video': return '.mp4,.webm,.mov';
      default: return '*';
    }
  };

  const getContentIcon = () => {
    switch (contentType) {
      case 'book': return <FileText className="h-5 w-5" />;
      case 'audio': return <Music className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('You must be logged in to upload content');
      return;
    }

    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload main file
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/${contentType}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('content-files')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl: fileUrl } } = supabase.storage
        .from('content-files')
        .getPublicUrl(filePath);

      // Upload cover image if provided
      let coverImageUrl = null;
      if (coverImage) {
        const coverExt = coverImage.name.split('.').pop();
        const coverPath = `${user.id}/covers/${Date.now()}.${coverExt}`;
        
        const { error: coverError } = await supabase.storage
          .from('content-files')
          .upload(coverPath, coverImage);

        if (coverError) throw coverError;

        const { data: { publicUrl } } = supabase.storage
          .from('content-files')
          .getPublicUrl(coverPath);
        
        coverImageUrl = publicUrl;
      }

      // Insert content record
      const { error: insertError } = await supabase
        .from('content')
        .insert({
          contributor_id: user.id,
          type: contentType,
          title,
          description,
          author,
          language,
          tags: tags.split(',').map(t => t.trim()).filter(Boolean),
          file_url: fileUrl,
          cover_image_url: coverImageUrl,
        });

      if (insertError) throw insertError;

      toast.success('Content uploaded successfully! It will be reviewed by an admin.');
      
      // Reset form
      setTitle('');
      setDescription('');
      setAuthor('');
      setLanguage('English');
      setTags('');
      setFile(null);
      setCoverImage(null);
      
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Failed to upload content');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5 text-primary" />
          Upload New Content
        </CardTitle>
        <CardDescription>
          Submit your content for review. Once approved by an admin, it will be published.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Content Type Selection */}
          <div className="space-y-2">
            <Label>Content Type</Label>
            <div className="flex gap-2">
              {(['book', 'audio', 'video'] as ContentType[]).map((type) => (
                <Button
                  key={type}
                  type="button"
                  variant={contentType === type ? 'default' : 'outline'}
                  onClick={() => setContentType(type)}
                  className="flex-1 capitalize"
                >
                  {type === 'book' && <FileText className="mr-2 h-4 w-4" />}
                  {type === 'audio' && <Music className="mr-2 h-4 w-4" />}
                  {type === 'video' && <Video className="mr-2 h-4 w-4" />}
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter content title"
              required
            />
          </div>

          {/* Author */}
          <div className="space-y-2">
            <Label htmlFor="author">Author / Speaker</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author or speaker name"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the content..."
              rows={4}
            />
          </div>

          {/* Language */}
          <div className="space-y-2">
            <Label>Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {LANGUAGES.map((lang) => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., Quran, Tafsir, Fiqh"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="file">Content File *</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input
                id="file"
                type="file"
                accept={getAcceptedFileTypes()}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="file" className="cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  {getContentIcon()}
                  <span className="text-sm text-muted-foreground">
                    {file ? file.name : `Click to upload ${contentType} file`}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Accepted: {getAcceptedFileTypes()}
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label htmlFor="cover">Cover Image (optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input
                id="cover"
                type="file"
                accept="image/*"
                onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="cover" className="cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-5 w-5" />
                  <span className="text-sm text-muted-foreground">
                    {coverImage ? coverImage.name : 'Click to upload cover image'}
                  </span>
                </div>
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit for Review
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
