import React from 'react';
import Calendar from '@/components/calendar/Calendar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events Calendar | Gujarat Ashram",
  description: "Join us for yoga, meditation, and spiritual gatherings at the Gujarat Ashram.",
};

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-ashram-sand">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-ashram-amber/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-ashram-clay/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ashram-clay mb-4">
            Sacred Gatherings
          </h1>
          <p className="text-ashram-stone text-lg max-w-2xl mx-auto">
            Plan your visit around our seasonal events, daily sadhana sessions, and spiritual workshops.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Calendar />
        </div>
      </div>

      <footer className="py-10 text-center text-ashram-stone/60 text-sm">
        <p>© {new Date().getFullYear()} Gujarat Ashram - Art of Living</p>
      </footer>
    </main>
  );
}
