"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  TrendingUp,
  CalendarCheck,
  Library,
  BookMarked,
  FileSpreadsheet,
  History,
  Layers,
  FileText,
  CreditCard,
  HeartHandshake,
  Calculator,
  BotMessageSquare,
  Bookmark,
  Users,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Search,
  Bell,
  Flame,
  Award,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const learnerNavigation: NavSection[] = [
  {
    title: "OVERVIEW",
    items: [
      { name: "Dashboard", href: "/learner", icon: LayoutDashboard },
      { name: "Performance", href: "/learner/performance", icon: TrendingUp },
      { name: "Study Planner", href: "/learner/planner", icon: CalendarCheck, badge: "New" },
    ],
  },
  {
    title: "EXAM PREPARATION",
    items: [
      { name: "Exam Library", href: "/learner/library", icon: Library },
      { name: "My Exams", href: "/learner/my-exams", icon: BookMarked },
      { name: "Custom Practice", href: "/learner/custom-practice", icon: FileSpreadsheet },
      { name: "Attempt History", href: "/learner/history", icon: History },
    ],
  },
  {
    title: "STUDY RESOURCES",
    items: [
      { name: "Study Hub", href: "/learner/hub", icon: Layers },
      { name: "Study Guides", href: "/learner/guides", icon: FileText },
      { name: "Flashcards", href: "/learner/flashcards", icon: Layers, badge: "SRS" },
      { name: "Care Plans", href: "/learner/care-plans", icon: HeartHandshake },
      { name: "Calculators", href: "/learner/calculators", icon: Calculator },
    ],
  },
  {
    title: "PERSONALIZED LEARNING",
    items: [
      { name: "AI Tutor", href: "/learner/ai-tutor", icon: BotMessageSquare, badge: "AI" },
      { name: "Saved Questions", href: "/learner/saved", icon: Bookmark },
      { name: "Community", href: "/learner/community", icon: Users },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { name: "My Account", href: "/learner/account", icon: User },
      { name: "Settings", href: "/learner/settings", icon: Settings },
      { name: "Subscription", href: "/learner/subscription", icon: CreditCard },
    ],
  },
];

export function LearnerShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop & Mobile Responsive Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 flex flex-col border-r border-border bg-surface transition-all duration-300 ease-in-out",
          collapsed ? "w-[76px]" : "w-[264px]",
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Brand Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          <Logo
            size="sm"
            variant={collapsed ? "symbol" : "compact"}
            href="/learner"
          />
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground-secondary hover:bg-surface-muted transition-colors"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1 text-foreground-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {learnerNavigation.map((section) => (
            <div key={section.title} className="space-y-1">
              {!collapsed && (
                <div className="px-3 text-[11px] font-bold tracking-wider text-foreground-muted uppercase">
                  {section.title}
                </div>
              )}
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                        : "text-foreground-secondary hover:bg-surface-muted hover:text-foreground",
                      collapsed && "justify-center px-2"
                    )}
                    title={collapsed ? item.name : undefined}
                  >
                    <Icon className={cn("h-4 w-4 shrink-0 transition-transform group-hover:scale-110", isActive && "text-white")} />
                    {!collapsed && (
                      <span className="flex-1 truncate">{item.name}</span>
                    )}
                    {!collapsed && item.badge && (
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.2 text-[10px] font-bold uppercase",
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-brand-teal/15 text-brand-teal dark:text-teal-300"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sidebar Footer — Active Target & Version */}
        <div className="p-3 border-t border-border bg-surface-muted/50">
          {!collapsed ? (
            <div className="rounded-lg border border-border bg-surface p-2.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">Target Exam</span>
                <span className="font-bold text-brand-teal">NCLEX-RN</span>
              </div>
              <div className="text-[11px] text-foreground-muted">
                Estimated Readiness: <strong className="text-emerald-600 dark:text-emerald-400">76%</strong>
              </div>
              <Link href="/exam-session">
                <Button variant="primary" size="sm" className="w-full text-xs h-7">
                  Resume Practice
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center">
              <Award className="w-5 h-5 text-brand-teal" />
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        className={cn(
          "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
          collapsed ? "lg:ml-[76px]" : "lg:ml-[264px]"
        )}
      >
        {/* Top Learner Navbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-surface/90 backdrop-blur-md px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile Sidebar Trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Global Search Bar */}
            <div className="relative hidden sm:block w-64 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted" />
              <input
                type="text"
                placeholder="Search exams, topics, rationales..."
                className="w-full h-9 pl-9 pr-4 rounded-md border border-border bg-surface text-xs text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-1 focus:ring-brand-teal"
              />
            </div>
          </div>

          {/* Right Controls: Streak, Notifications, Theme, User */}
          <div className="flex items-center gap-3">
            {/* Study Streak Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>7 Day Streak</span>
            </div>

            {/* Quick Link to Exam Session */}
            <Link href="/exam-session" className="hidden md:inline-flex">
              <Button variant="outline" size="sm" className="text-xs h-8">
                Take Mock Exam
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-foreground-muted" />
              </Button>
            </Link>

            <ThemeToggle />

            {/* Notifications */}
            <button
              className="relative p-2 rounded-md text-foreground-secondary hover:bg-surface-muted"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-teal" />
            </button>

            {/* Learner Profile Avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs ring-2 ring-brand-teal/30">
                EN
              </div>
              <div className="hidden md:flex flex-col text-left leading-tight">
                <span className="text-xs font-bold text-foreground">Elena N.</span>
                <span className="text-[10px] text-foreground-secondary">RN Track</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
