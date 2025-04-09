'use client';

import { CardsActivityGoal } from '@/components/activity-goal';
import { CardsChat } from '@/components/chat';
import { DemoCookieSettings } from '@/components/cookie-settings';
import { DemoCreateAccount } from '@/components/create-account';
import { CardsMetric } from '@/components/metric';
import { DemoPaymentMethod } from '@/components/payment-method';
import { DemoReportAnIssue } from '@/components/report-an-issue';
import { CardsStats } from '@/components/stats';
import { ModeToggle } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import redTheme from '@/theme-red.json';
import blueTheme from '@/theme-blue.json';
import greenTheme from '@/theme-green.json';
import { useBranding } from 'shadcn-white-label';
import { Icons } from '@/components/icons';

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}

export default function Home() {
  const { setBrandingTheme } = useBranding();
  return (
    <div className="flex flex-col gap-2 max-w-[1300px] mx-auto p-2">
      <div className="flex items-start justify-between py-8">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mb-1">
            Shadcn White Label – Customizable UI Example
          </h1>
          <p className="max-w-2xl text-balance text-base font-light text-foreground sm:text-lg">
            A demo application showcasing how to use the shadcn-white-label
            library to apply dynamic, user- or tenant-specific themes. Perfect
            for SaaS products, this setup supports full TailwindCSS, ShadCN UI,
            and light/dark theme switching with custom branding.
          </p>
        </div>

        <Button asChild variant="outline">
          <a href="https://github.com/matheusTA/shadcn-white-label">
            <Icons.gitHub />
          </a>
        </Button>
      </div>

      <div className="flex self-start gap-1 border rounded-lg p-1">
        <Button variant="ghost" onClick={() => setBrandingTheme(redTheme)}>
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        <Button variant="ghost" onClick={() => setBrandingTheme(blueTheme)}>
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
        </Button>

        <Button variant="ghost" onClick={() => setBrandingTheme(greenTheme)}>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </Button>

        <ModeToggle />
      </div>

      <div className="items-start justify-center gap-6 rounded-lg grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>

          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <CardsChat />
          </DemoContainer>

          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>

          <DemoContainer>
            <CardsMetric />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <CardsActivityGoal />
          </DemoContainer>

          <DemoContainer>
            <CardsStats />
          </DemoContainer>

          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
        </div>
      </div>
    </div>
  );
}
