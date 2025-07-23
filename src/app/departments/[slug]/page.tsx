"use client";

import { allPrograms } from "@/data/allPrograms";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GraduationCap, Users, Sparkles, Quote } from "lucide-react";

const departments = [
  {
    name: "Departamenti i Administrim-Biznesit",
    slug: "administrim-biznes",
    description:
      "Departamenti synon të ofrojë njohuri të thelluara në menaxhim, financë dhe sipërmarrje për të përgatitur liderët e së nesërmes në botën e biznesit.",
    image: "/images/adm-biznes.jpg",
    quote:
      "Ne nuk edukojmë vetëm profesionistë, por formojmë liderë me ndikim në botën reale.",
    staff: [
      { name: "Dr. John Doe", title: "Shef Departamenti", slug: "john-doe" },
      { name: "Msc. John Doe", title: "Pedagoge", slug: "john-doe" },
    ],
    highlights: [
      "Qasje praktike me projekte reale",
      "Bashkëpunime me kompani vendore dhe ndërkombëtare",
      "Pedagogë me eksperiencë akademike dhe praktike",
      "Mundësi shkëmbimi me universitete europiane",
    ],
  },
];

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = departments.find((d) => d.slug === params.slug);
  if (!department) return notFound();

  const programs = allPrograms.filter((p) => p.departmentSlug === params.slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* HERO */}
      <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={department.image}
          alt={department.name}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white drop-shadow-md">
            {department.name}
          </h1>
        </div>
      </div>

      {/* Description */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-950 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-700" />
          Rreth Departamentit
        </h2>
        <p className="text-gray-800 text-md
         leading-relaxed">{department.description}</p>
      </section>

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-950 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-700" />
          Pse të studiosh këtu?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {department.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Programs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-950 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-700" />
          Programet e Studimit
        </h2>

        {programs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <Link
                key={i}
                href={`/study-programs/${program.slug}`}
                className="bg-zinc-50 p-6 rounded-xl shadow hover:shadow-lg transition group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3 text-blue-700 text-xs font-semibold uppercase tracking-widest">
                    {program.level}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-950 group-hover:text-red-700 transition">
                    {program.name}
                  </h3>
                </div>

                <div className="mt-6">
                  <span className="text-sm text-red-700 hover:underline font-medium">
                    Shiko më shumë →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Nuk ka programe të regjistruara për këtë departament.</p>
        )}
      </section>

      {/* Staff */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-950 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-700" />
          Stafi Akademik
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {department.staff.map((member, idx) => (
            <li key={idx}>
              <Link
                href={`/staff/${member.slug}`}
                className="block p-4 border rounded-xl bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-blue-950 font-medium">{member.name}</p>
                    <p className="text-gray-600 text-sm">{member.title}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
