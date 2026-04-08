"use client";

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Loader2, AlertCircle } from 'lucide-react';
import './calendar.css';

interface AshramEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundColor?: string;
}

export default function Calendar() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/events');
        if (!response.ok) throw new Error('Failed to load events');
        
        const data = await response.json();
        
        // Normalize events for FullCalendar
        const formattedEvents = data.map((event: any) => {
          // Robust date parsing
          let startDate = event.date;
          let endDate = event.endDate || event.date;

          try {
            const dStart = new Date(event.date);
            if (!isNaN(dStart.getTime())) startDate = dStart.toISOString();
            
            if (event.endDate) {
              const dEnd = new Date(event.endDate);
              if (!isNaN(dEnd.getTime())) endDate = dEnd.toISOString();
            }
          } catch (e) {
            console.warn('Date parsing error:', e);
          }

          return {
            id: event.id.toString(),
            title: event.title,
            start: startDate,
            end: endDate,
            extendedProps: {
              description: event.description,
              buttonText: event.buttonText,
              buttonUrl: event.buttonUrl,
              category: event.category
            },
            // Use the categories defined in Admin
            backgroundColor: event.category === 'yoga' ? '#059669' : 
                            event.category === 'meditation' ? '#78350F' : 
                            event.category === 'celebration' ? '#F59E0B' : '#F59E0B'
          };
        });

        setEvents(formattedEvents);
        setError(null);
      } catch (err) {
        console.error('Calendar Fetch Error:', err);
        setError('Could not sync with the ashram schedule.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (info: any) => {
    const { event } = info;
    const { description, buttonText, buttonUrl } = event.extendedProps;
    
    // Simple custom alert (In a real app, use a modal component)
    alert(
      `📅 ${event.title}\n\n` +
      `${description}\n\n` +
      `Time: ${event.start?.toLocaleString([], { hour: '2-digit', minute: '2-digit' })}\n` +
      (buttonUrl ? `\nLink: ${buttonUrl}` : '')
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 bg-white/50 backdrop-blur-sm rounded-3xl border border-ashram-clay/10">
        <Loader2 className="w-10 h-10 text-ashram-amber animate-spin mb-4" />
        <p className="text-ashram-clay font-serif italic">Gathering events from the sanctuary...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-red-50 rounded-3xl border border-red-100 p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-serif font-bold text-red-800 mb-2">Notice</h3>
        <p className="text-red-700 max-w-sm">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors font-medium"
        >
          Try Syncing Again
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="calendar-glass w-full"
    >
      <div className="mb-6 flex items-center gap-3 px-2">
        <CalendarIcon className="text-ashram-amber w-6 h-6" />
        <span className="text-ashram-stone font-medium tracking-wide uppercase text-sm">Schedule for Art of Living Gujarat</span>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        events={events}
        editable={false}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={3}
        weekends={true}
        eventClick={handleEventClick}
        height="auto"
        dayHeaderFormat={{ weekday: 'long' }}
      />
    </motion.div>
  );
}
