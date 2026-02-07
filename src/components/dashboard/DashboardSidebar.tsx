import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import {
  Upload,
  FolderOpen,
  Clock,
  FileText,
  Users,
  BarChart3,
  MessageCircle,
  Home,
  LogOut,
  Shield,
  PenTool,
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const contributorItems = [
  { id: 'upload', title: 'Upload Content', icon: Upload },
  { id: 'my-content', title: 'My Content', icon: FolderOpen },
];

const adminItems = [
  { id: 'analytics', title: 'Analytics', icon: BarChart3 },
  { id: 'pending', title: 'Pending Content', icon: Clock },
  { id: 'pending-answers', title: 'Pending Q&A', icon: MessageCircle },
  { id: 'all-content', title: 'All Content', icon: FileText },
  { id: 'users', title: 'User Management', icon: Users },
];

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  const { role, signOut } = useAuth();
  const location = useLocation();

  const isAdmin = role === 'admin';

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-display font-bold text-sm">ف</span>
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-display text-sm font-semibold text-sidebar-foreground">
              Dashboard
            </span>
            <span className="text-xs text-sidebar-foreground/70 capitalize flex items-center gap-1">
              {isAdmin ? (
                <>
                  <Shield className="h-3 w-3" /> Admin
                </>
              ) : (
                <>
                  <PenTool className="h-3 w-3" /> Contributor
                </>
              )}
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Contributor Section - Available to both */}
        <SidebarGroup>
          <SidebarGroupLabel>Content Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contributorItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeTab === item.id}
                    onClick={() => onTabChange(item.id)}
                    tooltip={item.title}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin Section - Only for admins */}
        {isAdmin && (
          <>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Administration</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {adminItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={activeTab === item.id}
                        onClick={() => onTabChange(item.id)}
                        tooltip={item.title}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Back to Site">
              <Link to="/">
                <Home className="h-4 w-4" />
                <span>Back to Site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleSignOut}
              tooltip="Sign Out"
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
