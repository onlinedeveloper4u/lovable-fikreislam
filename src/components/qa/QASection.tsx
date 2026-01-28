import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuestionForm } from './QuestionForm';
import { QuestionList } from './QuestionList';
import { HelpCircle } from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type ContentType = Database['public']['Enums']['content_type'];

interface QASectionProps {
  contentType: ContentType;
  title?: string;
}

export function QASection({ contentType, title = 'Questions & Answers' }: QASectionProps) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleQuestionAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <HelpCircle className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <QuestionForm contentType={contentType} onQuestionAdded={handleQuestionAdded} />
        <QuestionList contentType={contentType} refreshTrigger={refreshTrigger} />
      </CardContent>
    </Card>
  );
}
