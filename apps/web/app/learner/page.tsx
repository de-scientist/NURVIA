"use client";

import * as React from "react";
import Link from "next/link";
import { LearnerShell } from "@/components/layout/learner-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Flame,
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Play,
  RotateCcw,
  BookOpen,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function LearnerDashboardPage() {
  // Structured persisted state representation for Phase 1
  const learnerMetrics = {
    name: "Elena N.",
    program: "RN Pre-Licensure Track",
    targetExam: "ATI Comprehensive Predictor & NCLEX-RN",
    targetDate: "May 2026",
    studyStreakDays: 7,
    questionsCompleted: 1480,
    questionsTotalAvailable: 6200,
    overallAccuracyPct: 78.4,
    hoursStudied: 38.5,
    estimatedReadinessPct: 76,
  };

  const activeAttempts = [
    {
      id: "att-102",
      title: "ATI RN Adult Medical-Surgical Practice Exam (Form B)",
      mode: "Review Mode",
      completedQuestions: 38,
      totalQuestions: 60,
      scoreSoFar: 81.5,
      lastActive: "Today at 7:45 AM",
    },
    {
      id: "att-098",
      title: "Pharmacology & Dosage Calculations Comprehensive",
      mode: "Timed Exam Mode",
      completedQuestions: 22,
      totalQuestions: 50,
      scoreSoFar: 72.7,
      lastActive: "Yesterday",
    },
  ];

  const subjectPerformance = [
    { subject: "Fundamentals of Nursing", accuracy: 88, status: "Mastered", color: "bg-emerald-500" },
    { subject: "Maternal Newborn & OB", accuracy: 82, status: "Proficient", color: "bg-teal-500" },
    { subject: "Pediatric Nursing", accuracy: 76, status: "Reviewing", color: "bg-blue-500" },
    { subject: "Adult Medical-Surgical", accuracy: 71, status: "Needs Work", color: "bg-amber-500" },
    { subject: "Pharmacology & Parenteral", accuracy: 64, status: "Weak Area", color: "bg-rose-500" },
  ];

  const recommendations = [
    {
      title: "Cardiac Medications & Dosage Calculations",
      type: "High Priority Topic",
      reason: "Based on 3 incorrect answers in your last Medical-Surgical session.",
      actionText: "Practice 15 Questions",
      href: "/exam-session",
    },
    {
      title: "Electrolyte Imbalances & Nursing Care Plans",
      type: "Concept Refresh",
      reason: "Unreviewed for 9 days. Spaced repetition interval is due.",
      actionText: "Review Care Plan",
      href: "/learner/hub",
    },
  ];

  return (
    <LearnerShell>
      <div className="space-y-8">
        {/* Welcome Banner & Exam Target */}
        <div className="rounded-2xl border border-border bg-gradient-to-r from-surface via-surface to-teal-500/5 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal uppercase tracking-wide">
              <span>{learnerMetrics.program}</span>
              <span>•</span>
              <span>Target: {learnerMetrics.targetExam}</span>
            </div>
            <h1 className="font-brand text-2xl sm:text-3xl font-bold text-foreground">
              Welcome back, {learnerMetrics.name}
            </h1>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              Your 7-day study streak is active. You are currently trending at{" "}
              <strong className="text-foreground">{learnerMetrics.overallAccuracyPct}% accuracy</strong>.
              Review your weak areas in Pharmacology today to boost estimated readiness.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link href="/exam-session" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-11 px-6 gap-2">
                <Play className="w-4 h-4 fill-white" />
                Resume Active Practice
              </Button>
            </Link>
          </div>
        </div>

        {/* 4 Primary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Study Streak */}
          <Card>
            <CardHeader className="p-5 pb-2 flex-row items-center justify-between space-y-0">
              <span className="text-xs font-semibold text-foreground-secondary">Study Streak</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Flame className="w-4 h-4 fill-amber-500" />
              </div>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <div className="text-2xl font-bold font-brand text-foreground">
                {learnerMetrics.studyStreakDays} Days
              </div>
              <p className="text-[11px] text-foreground-muted mt-1">
                Consistent daily revision logged
              </p>
            </CardContent>
          </Card>

          {/* Overall Accuracy */}
          <Card>
            <CardHeader className="p-5 pb-2 flex-row items-center justify-between space-y-0">
              <span className="text-xs font-semibold text-foreground-secondary">Overall Accuracy</span>
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-brand-teal flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <div className="text-2xl font-bold font-brand text-foreground">
                {learnerMetrics.overallAccuracyPct}%
              </div>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +2.4% over last 100 questions
              </p>
            </CardContent>
          </Card>

          {/* Questions Completed */}
          <Card>
            <CardHeader className="p-5 pb-2 flex-row items-center justify-between space-y-0">
              <span className="text-xs font-semibold text-foreground-secondary">Questions Answered</span>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <div className="text-2xl font-bold font-brand text-foreground">
                {learnerMetrics.questionsCompleted}
              </div>
              <p className="text-[11px] text-foreground-muted mt-1">
                Out of {learnerMetrics.questionsTotalAvailable} in question bank
              </p>
            </CardContent>
          </Card>

          {/* Time Studied */}
          <Card>
            <CardHeader className="p-5 pb-2 flex-row items-center justify-between space-y-0">
              <span className="text-xs font-semibold text-foreground-secondary">Total Study Time</span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <div className="text-2xl font-bold font-brand text-foreground">
                {learnerMetrics.hoursStudied} hrs
              </div>
              <p className="text-[11px] text-foreground-muted mt-1">
                Logged across exams & review guides
              </p>
            </CardContent>
          </Card>
        </div>

        {/* In-Progress Practice Sessions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-brand text-lg font-bold text-foreground">
              Continue Learning — Active Sessions
            </h2>
            <Link href="/learner/library">
              <Button variant="ghost" size="sm" className="text-xs">
                Browse Full Exam Catalogue →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeAttempts.map((att) => {
              const pct = (att.completedQuestions / att.totalQuestions) * 100;
              return (
                <Card key={att.id} className="hover:border-brand-teal/40 transition-colors">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant={att.mode.includes("Timed") ? "destructive" : "teal"} className="text-[10px]">
                        {att.mode}
                      </Badge>
                      <span className="text-[11px] text-foreground-muted">{att.lastActive}</span>
                    </div>
                    <CardTitle className="text-base font-semibold">{att.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {att.completedQuestions} of {att.totalQuestions} questions completed ({Math.round(pct)}%)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 space-y-3">
                    <Progress value={pct} />
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-foreground-secondary">
                        Current Score: <strong className="text-foreground">{att.scoreSoFar}%</strong>
                      </span>
                      <Link href="/exam-session">
                        <Button size="sm" className="h-8 text-xs gap-1.5">
                          <RotateCcw className="w-3.5 h-3.5" /> Resume
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Subject Breakdown & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject Mastery Breakdown (2 cols) */}
          <Card className="lg:col-span-2">
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Topic Mastery & Knowledge Gaps</CardTitle>
                  <CardDescription className="text-xs">
                    Aggregated accuracy across all completed question sessions
                  </CardDescription>
                </div>
                <Badge variant="outline">5 Subjects Tracked</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-3 space-y-4">
              {subjectPerformance.map((subj) => (
                <div key={subj.subject} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{subj.subject}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{subj.accuracy}%</span>
                      <span className="text-[11px] text-foreground-muted">({subj.status})</span>
                    </div>
                  </div>
                  <Progress value={subj.accuracy} indicatorColor={subj.color} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Deterministic Learning Recommendations (1 col) */}
          <Card className="flex flex-col">
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-teal uppercase">
                <Sparkles className="w-4 h-4" /> Next Best Action
              </div>
              <CardTitle className="text-lg">Recommended For Today</CardTitle>
              <CardDescription className="text-xs">
                Generated from your weakest question topics
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-3 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <div key={rec.title} className="p-3.5 rounded-lg border border-border bg-surface-muted/50 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                        {rec.type}
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-foreground leading-snug">
                      {rec.title}
                    </div>
                    <p className="text-[11px] text-foreground-secondary">
                      {rec.reason}
                    </p>
                    <Link href={rec.href} className="inline-block pt-1">
                      <span className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                        {rec.actionText} →
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <Link href="/learner/planner">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Open Study Planner
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LearnerShell>
  );
}
