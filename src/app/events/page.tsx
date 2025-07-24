"use client";

import PageWrapper from "@/components/PageWrapper";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    slug: "konferenca-biznes-2024",
    title: "Konferenca Ndërkombëtare për Zhvillimin e Biznesit",
    date: "5 Tetor 2024",
    location: "Amfiteatri Qendror, Fakulteti i Biznesit dhe i Drejtësisë",
    description:
      "Një ngjarje shkencore me pjesëmarrjen e studiuesve dhe profesionistëve nga rajoni për të diskutuar zhvillimet më të fundit në biznes dhe ekonomi.",
  },
  {
    slug: "workshop-e-drejta-digitale",
    title: "Workshop: E Drejta në Epokën Digitale",
    date: "21 Nëntor 2024",
    location: "Salla 204, Kati 2",
    description:
      "Trajnim praktik dhe diskutim me juristë mbi sfidat ligjore të teknologjisë së informacionit, të drejtat e privatësisë dhe legjislacionin europian.",
  },
  {
    slug: "dita-e-hapur-fbd",
    title: "Dita e Hapur e Fakultetit",
    date: "15 Prill 2025",
    location: "Oborri i Fakultetit",
    description:
      "Event i hapur për maturantët dhe studentët e rinj që duan të njihen me programet e studimit dhe jetën universitare në FBD.",
  },
];

export default function EventsPage() {
  return (
    <PageWrapper>
      <main className="bg-white min-h-screen px-6 py-16 md:px-20 space-y-16">
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-4xl font-bold text-blue-950">
            Ngjarjet & Aktivitetet në Fakultet
          </h1>
          <p className="text-zinc-600 text-lg">
            Zbulo konferencat, workshop-et dhe aktivitetet e hapura që zhvillohen në Fakultetin e Biznesit dhe të Drejtësisë.
          </p>
        </section>

        {/* LISTA E EVENTEVE */}
        <section className="max-w-6xl mx-auto space-y-10">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-zinc-50 p-6 rounded-xl shadow hover:shadow-md transition space-y-4"
            >
              <h2 className="text-2xl font-semibold text-blue-950">{event.title}</h2>

              <div className="text-sm text-gray-700 space-y-1">
                <p className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-red-700" /> {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-700" /> {event.location}
                </p>
              </div>

              <p className="text-gray-700">{event.description}</p>

              <Link
                href={`/events/${event.slug}`}
                className="text-sm text-red-700 hover:underline font-medium inline-flex items-center gap-1"
              >
                Mëso më shumë <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>
    </PageWrapper>
  );
}
