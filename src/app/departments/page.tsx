"use client";

import Link from "next/link";
import Image from "next/image";
import { use } from "react";


const departments = [
  {
    name: "Departamenti i Administrim-Biznesit",
    slug: "administrim-biznes",
    description: "Ofron njohuri të thella në menaxhim, financë dhe sipërmarrje.",
    image: "/images/adm-biznes.jpg",
  },
  // {
  //   name: "Departamenti i Marketing Inxhinierisë",
  //   slug: "marketing-inxhinieri",
  //   description: "Ndërthur marketingun modern me mendësinë inxhinierike.",
  //   image: "/images/marketing-inxhinieri.jpg",
  // },
];

export default function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-950 mb-8">Departamentet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept) => (
          <Link
            key={dept.slug}
            href={`/departments/${dept.slug}`}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition block"
          >
            <Image
              src={dept.image}
              alt={dept.name}
              width={800}
              height={300}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-900">
                {dept.name}
              </h2>
              <p className="text-gray-700">{dept.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
