import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Layers, Palette, Zap, Code2, Sparkles, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Palette,
    title: "Violet Theme",
    description: "A hand-crafted oklch color palette — vivid primaries, soft surfaces, and full dark-mode support.",
  },
  {
    icon: Layers,
    title: "40+ Components",
    description: "Every shadcn component pre-installed, themed, and showcased in the interactive style guide.",
  },
  {
    icon: Zap,
    title: "Instant Dark Mode",
    description: "A single class toggle switches the entire UI between light and dark — no flicker, no flash.",
  },
  {
    icon: Code2,
    title: "App Router Ready",
    description: "Built on Next.js 16 with the App Router, React Server Components, and Tailwind CSS v4.",
  },
  {
    icon: Box,
    title: "Base UI Primitives",
    description: "@base-ui/react powers every headless primitive — accessible, unstyled, fully composable.",
  },
  {
    icon: Sparkles,
    title: "Token-Based Design",
    description: "Semantic CSS custom properties make brand changes a one-line edit in globals.css.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm tracking-tight">Nova UI</span>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/styleguide" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              Style Guide
            </Link>
            <Link href="/styleguide" className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}>
              Explore <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent/40 blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
            <Badge variant="secondary" className="mb-6 px-3 py-1 text-xs font-medium">
              <Sparkles className="w-3 h-3 mr-1.5" /> Nova Violet Theme
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Beautiful UI,{" "}
              <span className="text-primary">crafted</span>
              <br className="hidden sm:block" /> for every screen.
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10">
              A complete design system built on shadcn, Next.js 16, and Tailwind CSS v4 — with a custom
              violet theme, 40+ components, and full dark-mode support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/styleguide"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-7 gap-2")}
              >
                View Style Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/styleguide#colors"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-7")}
              >
                Explore Colors
              </Link>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="max-w-6xl mx-auto px-6 pb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Everything you need</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              All the primitives, tokens, and components to ship production-quality interfaces fast.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="group hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight">Ready to explore?</h2>
            <p className="text-muted-foreground max-w-sm">
              The interactive style guide shows every component with live examples, variants, and color tokens.
            </p>
            <Link
              href="/styleguide"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 gap-2")}
            >
              Open Style Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Nova UI — built with shadcn &amp; Next.js 16
      </footer>
    </div>
  );
}
