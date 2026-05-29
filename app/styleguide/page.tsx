"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  AlertCircle, Bell, Bold, CalendarDays, Check, ChevronDown, ChevronRight, Italic,
  Underline, Info, Loader2, Moon, Sun, Sparkles, ArrowLeft, Terminal
} from "lucide-react";

/* ── helper ── */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-12 border-b border-border last:border-0">
      <h2 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-primary inline-block" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({ label, variable, hex }: { label: string; variable: string; hex: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="h-14 w-full rounded-lg border border-border" style={{ background: hex }} />
      <p className="text-xs font-medium">{label}</p>
      <p className="text-[10px] text-muted-foreground font-mono">{variable}</p>
    </div>
  );
}

const navLinks = [
  "Colors", "Typography", "Buttons", "Badges", "Inputs", "Cards",
  "Tabs", "Accordion", "Alerts", "Dialogs", "Overlays",
  "Selects", "Toggles", "Tables", "Feedback", "Avatar",
];

export default function StyleGuidePage() {
  const [sliderVal, setSliderVal] = useState([40]);
  const [progress] = useState(65);
  const [isDark, setIsDark] = useState(false);

  function toggleDark() {
    setIsDark((v) => {
      document.documentElement.classList.toggle("dark", !v);
      return !v;
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8 -ml-2")}>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm">Nova UI — Style Guide</span>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={toggleDark} className="gap-2">
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            {isDark ? "Light" : "Dark"} mode
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-8 py-8">
        {/* Sidebar nav */}
        <aside className="hidden lg:block w-52 shrink-0">
          <nav className="sticky top-20 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-1.5 rounded-md transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">

          {/* ── Colors ── */}
          <Section id="colors" title="Colors">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Swatch label="Primary" variable="--primary" hex="oklch(0.558 0.228 275)" />
              <Swatch label="Secondary" variable="--secondary" hex="oklch(0.94 0.025 285)" />
              <Swatch label="Accent" variable="--accent" hex="oklch(0.91 0.05 285)" />
              <Swatch label="Destructive" variable="--destructive" hex="oklch(0.577 0.245 27.325)" />
              <Swatch label="Background" variable="--background" hex="oklch(0.985 0.003 285)" />
              <Swatch label="Card" variable="--card" hex="oklch(1 0 0)" />
              <Swatch label="Muted" variable="--muted" hex="oklch(0.94 0.015 285)" />
              <Swatch label="Border" variable="--border" hex="oklch(0.88 0.025 285)" />
            </div>
            <div className="mt-6 grid grid-cols-5 gap-2">
              {["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"].map((v, i) => (
                <div key={v} className="flex flex-col gap-1">
                  <div
                    className="h-8 rounded-md border border-border"
                    style={{
                      background: [
                        "oklch(0.558 0.228 275)",
                        "oklch(0.65 0.18 285)",
                        "oklch(0.72 0.12 300)",
                        "oklch(0.8 0.08 310)",
                        "oklch(0.88 0.04 315)",
                      ][i],
                    }}
                  />
                  <p className="text-[10px] font-mono text-muted-foreground">chart-{i + 1}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Typography ── */}
          <Section id="typography" title="Typography">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">text-4xl font-bold</p>
                <p className="text-4xl font-bold">The quick brown fox</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">text-2xl font-semibold</p>
                <p className="text-2xl font-semibold">Jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">text-xl font-medium</p>
                <p className="text-xl font-medium">Nova Violet Design System</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">text-base</p>
                <p className="text-base text-muted-foreground">
                  A complete component library built with shadcn, Tailwind CSS v4, and Next.js 16.
                  Tokens are driven by CSS custom properties for easy theming.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">text-sm text-muted-foreground</p>
                <p className="text-sm text-muted-foreground">Small body text for captions and secondary content.</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">font-mono</p>
                <p className="font-mono text-sm">const theme = &apos;nova-violet&apos;</p>
              </div>
            </div>
          </Section>

          {/* ── Buttons ── */}
          <Section id="buttons" title="Buttons">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"><Bell className="w-4 h-4" /></Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Loading
                </Button>
                <Button className="rounded-full">Pill</Button>
                <Button variant="outline" className="gap-2">
                  <Check className="w-4 h-4" /> With icon
                </Button>
              </div>
            </div>
          </Section>

          {/* ── Badges ── */}
          <Section id="badges" title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Section>

          {/* ── Inputs ── */}
          <Section id="inputs" title="Inputs &amp; Forms">
            <div className="grid gap-5 max-w-lg">
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pwd">Password</Label>
                <Input id="pwd" type="password" placeholder="••••••••" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" placeholder="Write something..." rows={3} />
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">I agree to the terms and conditions</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="notif" />
                <Label htmlFor="notif">Enable notifications</Label>
              </div>
              <div className="grid gap-2">
                <Label>Volume — {sliderVal[0]}%</Label>
                <Slider value={sliderVal} onValueChange={(v) => setSliderVal(v as number[])} max={100} step={1} />
              </div>
              <RadioGroup defaultValue="option-1" className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-1" id="r1" />
                  <Label htmlFor="r1">Option A</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-2" id="r2" />
                  <Label htmlFor="r2">Option B</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option-3" id="r3" />
                  <Label htmlFor="r3">Option C</Label>
                </div>
              </RadioGroup>
            </div>
          </Section>

          {/* ── Cards ── */}
          <Section id="cards" title="Cards">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Nova Project</CardTitle>
                  <CardDescription>A violet-themed design system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Composable components built on Base UI and shadcn primitives.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn more</Button>
                </CardFooter>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle>Highlighted Card</CardTitle>
                  <CardDescription>With primary accent styling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cards can carry accent borders and tinted backgrounds.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$24,580</p>
                  <p className="text-xs text-muted-foreground mt-1">+12.4% from last month</p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* ── Tabs ── */}
          <Section id="tabs" title="Tabs">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      Overview content — your dashboard summary goes here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="pt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      Analytics content — charts and metrics go here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="pt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      Settings content — configuration options go here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Section>

          {/* ── Accordion ── */}
          <Section id="accordion" title="Accordion">
            <Accordion className="max-w-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Nova UI?</AccordionTrigger>
                <AccordionContent>
                  Nova UI is a themed component library built on shadcn with a custom violet oklch palette, designed for Next.js 16 and Tailwind CSS v4.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I customize the theme?</AccordionTrigger>
                <AccordionContent>
                  Edit the CSS custom properties in <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">globals.css</code>. The entire palette is driven by a handful of oklch values.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
                <AccordionContent>
                  Yes — toggle the button in the nav. The <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">.dark</code> class on <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">html</code> switches the full palette.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* ── Alerts ── */}
          <Section id="alerts" title="Alerts">
            <div className="space-y-3 max-w-lg">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational alert with a default style.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
              </Alert>
              <Alert className="border-primary/40 bg-primary/5 text-primary [&>svg]:text-primary">
                <Sparkles className="h-4 w-4" />
                <AlertTitle>New feature</AlertTitle>
                <AlertDescription className="text-primary/80">Dark mode is now available — try the toggle in the nav.</AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* ── Dialogs ── */}
          <Section id="dialogs" title="Dialogs &amp; Sheets">
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger className={cn(buttonVariants({ variant: "outline" }))}>Open Dialog</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm action</DialogTitle>
                    <DialogDescription>
                      This will permanently delete your project. Are you absolutely sure?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger className={cn(buttonVariants({ variant: "destructive" }))}>Alert Dialog</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Sheet>
                <SheetTrigger className={cn(buttonVariants({ variant: "outline" }))}>Open Sheet</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-6">
                    <div className="grid gap-1.5">
                      <Label>Name</Label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="grid gap-1.5">
                      <Label>Bio</Label>
                      <Textarea placeholder="Tell us about yourself" />
                    </div>
                    <Button>Save changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </Section>

          {/* ── Overlays ── */}
          <Section id="overlays" title="Overlays — Popover, Tooltip, HoverCard, Dropdown">
            <div className="flex flex-wrap gap-3">
              <Tooltip>
                <TooltipTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>Tooltip</TooltipTrigger>
                <TooltipContent>This is a helpful tooltip</TooltipContent>
              </Tooltip>

              <Popover>
                <PopoverTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>Popover</PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Popover heading</h4>
                    <p className="text-sm text-muted-foreground">Popovers float above the content and can hold rich UI.</p>
                  </div>
                </PopoverContent>
              </Popover>

              <HoverCard>
                <HoverCardTrigger className={cn(buttonVariants({ variant: "link", size: "sm" }))}>@novaui</HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">NU</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">Nova UI</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Violet-themed design system for Next.js</p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <CalendarDays className="w-3 h-3" /> Joined May 2026
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <DropdownMenu>
                <DropdownMenuTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}>
                  Dropdown <ChevronDown className="w-3.5 h-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Section>

          {/* ── Selects ── */}
          <Section id="selects" title="Select">
            <div className="flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-52">
                  <SelectValue placeholder="Choose a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="violet">Violet</SelectItem>
                  <SelectItem value="indigo">Indigo</SelectItem>
                  <SelectItem value="rose">Rose</SelectItem>
                  <SelectItem value="amber">Amber</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="sm">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="md">Medium</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Section>

          {/* ── Toggles ── */}
          <Section id="toggles" title="Toggles">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Toggle aria-label="Bold"><Bold className="w-4 h-4" /></Toggle>
                <Toggle aria-label="Italic"><Italic className="w-4 h-4" /></Toggle>
                <Toggle aria-label="Underline"><Underline className="w-4 h-4" /></Toggle>
              </div>
              <ToggleGroup defaultValue={["bold"]}>
                <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="w-4 h-4" /></ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="w-4 h-4" /></ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="w-4 h-4" /></ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup defaultValue={["left"]} variant="outline">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Section>

          {/* ── Tables ── */}
          <Section id="tables" title="Table">
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Version</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Button", "Stable", "Actions", "2.0"],
                    ["Card", "Stable", "Layout", "1.4"],
                    ["Dialog", "Stable", "Overlays", "1.2"],
                    ["Calendar", "Beta", "Data Entry", "0.9"],
                    ["Carousel", "Beta", "Display", "0.8"],
                  ].map(([name, status, cat, ver]) => (
                    <TableRow key={name}>
                      <TableCell className="font-medium">{name}</TableCell>
                      <TableCell>
                        <Badge variant={status === "Stable" ? "default" : "secondary"} className="text-xs">
                          {status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{cat}</TableCell>
                      <TableCell className="text-right font-mono text-sm">{ver}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Section>

          {/* ── Feedback ── */}
          <Section id="feedback" title="Feedback — Progress, Skeleton, Toast, Collapsible">
            <div className="space-y-6 max-w-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Upload progress</span>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Skeleton loaders</p>
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.success("Changes saved successfully!")}
                >
                  Toast success
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.error("Something went wrong.")}
                >
                  Toast error
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast("Event has been created", { description: "Monday, Jan 3 · 6:00 PM" })}
                >
                  Toast with desc
                </Button>
              </div>

              <Collapsible>
                <CollapsibleTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2 w-full justify-between")}>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    CLI output
                  </div>
                  <ChevronRight className="w-4 h-4 transition-transform data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 rounded-lg bg-muted p-4 font-mono text-xs space-y-1 text-muted-foreground">
                    <p>✔ Installed @base-ui/react</p>
                    <p>✔ Installed shadcn components</p>
                    <p>✔ Applied nova-violet theme</p>
                    <p className="text-primary">→ Ready in 1.2s</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Section>

          {/* ── Avatar ── */}
          <Section id="avatar" title="Avatar">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground">DK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-secondary text-secondary-foreground">AB</AvatarFallback>
              </Avatar>
              <div className="flex -space-x-2">
                {["DK", "AB", "JR", "ML"].map((init) => (
                  <Avatar key={init} className="w-9 h-9 ring-2 ring-background">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">{init}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </Section>

          {/* ── Scroll Area ── */}
          <Section id="scrollarea" title="Scroll Area">
            <ScrollArea className="h-44 rounded-lg border border-border p-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <p className="text-sm">Scrollable item #{i + 1}</p>
                </div>
              ))}
            </ScrollArea>
          </Section>

        </main>
      </div>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Nova UI Style Guide — Built with shadcn &amp; Next.js 16
      </footer>
    </div>
  );
}
