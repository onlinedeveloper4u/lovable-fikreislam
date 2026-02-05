import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Books from "./pages/Books";
import Audio from "./pages/Audio";
import VideoPage from "./pages/VideoPage";
 import QA from "./pages/QA";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/books" element={<Books />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/video" element={<VideoPage />} />
           <Route path="/qa" element={<QA />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Redirect old routes to new unified dashboard */}
            <Route path="/contributor" element={<Navigate to="/dashboard" replace />} />
            <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
            <Route path="/library" element={<Library />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
