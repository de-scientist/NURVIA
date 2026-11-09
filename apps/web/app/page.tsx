import Link from "next/link";
import { PublicShell } from "@/components/layout/public-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  GraduationCap,
  Layers,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
} from "lucide-react";

export default function HomePage() {
  const examCategories = [
    { title: "ATI Fundamentals", questions: "750+ Questions", track: "RN & PN", difficulty: "Foundational" },
    { title: "Adult Medical-Surgical", questions: "1,200+ Questions", track: "RN", difficulty: "Intermediate" },
    { title: "Pharmacology & Calculations", questions: "980+ Questions", track: "RN & PN", difficulty: "High-Yield" },
    { title: "Maternal Newborn & OB", questions: "620+ Questions", track: "RN", difficulty: "Intermediate" },
    { title: "Pediatric Nursing", questions: "590+ Questions", track: "RN & PN", difficulty: "Foundational" },
    { title: "Mental Health Nursing", questions: "540+ Questions", track: "RN", difficulty: "Intermediate" },
    { title: "Leadership & Management", questions: "480+ Questions", track: "RN", difficulty: "Advanced" },
    { title: "Comprehensive Exit Predictor", questions: "1,500+ Questions", track: "Exit / NCLEX", difficulty: "Benchmark" },
  ];

  const learningModes = [
    {
      mode: "Review Mode",
      badge: "Deep Learning",
      icon: BookOpen,
      desc: "Immediate rationale feedback with clinical judgment breakdowns after every question. Understand why options are right and wrong.",
    },
    {
      mode: "Exam Mode",
      badge: "Simulation",
      icon: Clock,
      desc: "Timed, proctored environment mirroring actual ATI, HESI, and NCLEX interface rules. Deferred results for true readiness testing.",
    },
    {
      mode: "Tutor Mode",
      badge: "AI Assisted",
      icon: BrainCircuit,
      desc: "Guided hints, concept summaries, and Socratic clinical judgment questioning without giving away answers prematurely.",
    },
  ];

  return (
    <PublicShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-surface via-background to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/25 text-brand-teal dark:text-teal-300 text-xs font-semibold">
              <Compass className="w-4 h-4 text-brand-teal" />
              <span>NURVIA Education Platform · Phase 1 Architecture</span>
            </div>

            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Your Path to{" "}
              <span className="text-brand-teal dark:text-teal-400">
                Nursing Confidence
              </span>
            </h1>

            <p className="font-ui text-lg sm:text-xl text-foreground-secondary leading-relaxed">
              Every question should teach. Every result should guide. Master ATI, HESI,
              course finals, and NCLEX licensure through clinical reasoning, high-yield
              rationales, and intelligent practice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/learner" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-7">
                  Enter Learner Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/exam-session" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base h-12 px-7">
                  Try Interactive Exam Engine
                </Button>
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-foreground-secondary font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> NGN Clinical Case Studies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Evidence-Based Rationales
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3 Distinct Learning Modes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Persisted Readiness Metrics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Learning Modes */}
      <section className="py-16 border-y border-border/80 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-brand text-2xl sm:text-3xl font-bold text-foreground">
              Built for How Nursing Students Truly Learn
            </h2>
            <p className="text-sm text-foreground-secondary mt-2">
              Unlike static quiz dumps, NURVIA adapts to your immediate study goal—whether you are dissecting a complex case or taking a proctored simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningModes.map((m) => {
              const Icon = m.icon;
              return (
                <Card key={m.mode} className="relative overflow-hidden hover:border-brand-teal/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-lg bg-brand-teal/10 text-brand-teal dark:text-teal-300 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="teal">{m.badge}</Badge>
                    </div>
                    <CardTitle>{m.mode}</CardTitle>
                    <CardDescription>{m.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href="/exam-session">
                      <Button variant="link" className="text-xs font-semibold p-0">
                        Launch in {m.mode} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exam Catalogue Discovery Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">
                <Stethoscope className="w-4 h-4" /> Comprehensive Exam Tracks
              </div>
              <h2 className="font-brand text-2xl sm:text-3xl font-bold text-foreground">
                Structured by Nursing Specialty & Milestone
              </h2>
            </div>
            <Link href="/learner">
              <Button variant="outline" size="sm">
                View All Catalogues
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {examCategories.map((cat) => (
              <Card key={cat.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between text-xs text-foreground-muted mb-1 font-medium">
                    <span>{cat.track}</span>
                    <Badge variant="outline" className="text-[10px] py-0">{cat.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-base">{cat.title}</CardTitle>
                  <CardDescription className="text-xs">{cat.questions}</CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <Link href="/exam-session">
                    <Button variant="ghost" size="sm" className="w-full text-xs h-8 justify-between hover:bg-brand-teal/10 hover:text-brand-teal">
                      <span>Practice Set</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Judgment Framework (NGN) Callout */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Badge variant="teal">Clinical Judgment Measurement Model</Badge>
              <h2 className="font-brand text-3xl font-bold text-foreground">
                Next Generation NCLEX (NGN) Formats Fully Supported
              </h2>
              <p className="text-foreground-secondary leading-relaxed text-sm">
                Modern nursing assessments demand more than rote memorization. NURVIA’s question engine evaluates the six clinical judgment cognitive skills:
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium">
                <div className="p-2.5 rounded-lg border border-border bg-background flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">1</span>
                  Recognize Cues
                </div>
                <div className="p-2.5 rounded-lg border border-border bg-background flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">2</span>
                  Analyze Cues
                </div>
                <div className="p-2.5 rounded-lg border border-border bg-background flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">3</span>
                  Prioritize Hypotheses
                </div>
                <div className="p-2.5 rounded-lg border border-border bg-background flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">4</span>
                  Generate Solutions
                </div>
                <div className="p-2.5 rounded-lg border border-border bg-background flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">5</span>
                  Take Actions
                </div>
                <div className="p-2.5 rounded-lg border border-border bg-background flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-500/10 text-brand-teal flex items-center justify-center font-bold">6</span>
                  Evaluate Outcomes
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-foreground">Interactive Clinical Vignette</span>
                <Badge variant="success">Unfolding Case Study</Badge>
              </div>
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-foreground">Patient: M.K., 58yo Male · Post-Op Day 1</div>
                <p className="text-foreground-secondary leading-relaxed bg-surface p-3 rounded-lg border border-border/60">
                  Patient presents with sudden onset dyspnea, pleuritic chest pain, and SpO2 88% on room air following right total knee arthroplasty. Heart rate is 118 bpm, regular.
                </p>
                <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-200">
                  <strong className="block mb-1">Clinical Rationale Preview:</strong>
                  Recognize sudden dyspnea and tachycardia in a post-orthopedic patient as high suspicion for Pulmonary Embolism (PE). Immediate priority is supplemental oxygen and notification of the surgical team.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-brand text-3xl sm:text-4xl font-extrabold text-foreground">
            Begin Your Structured Nursing Preparation Today
          </h2>
          <p className="text-foreground-secondary text-base max-w-2xl mx-auto">
            Experience our independent learning ecosystem, built from the ground up for nursing clarity, academic excellence, and clinical confidence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/learner">
              <Button size="lg" className="h-12 px-8">
                Go to Learner Dashboard
              </Button>
            </Link>
            <Link href="/design-system">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Explore Design System Showcase
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
