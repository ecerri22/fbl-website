import { notFound } from "next/navigation";
import { staffMembers } from "@/data/staffData";

export default function StaffDetailPage({ params }: { params: { slug: string } }) {
  const staff = staffMembers.find((s) => s.slug === params.slug);
  if (!staff) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">{staff.name}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Photo */}
        {staff.photo && (
          <img
            src={staff.photo}
            alt={staff.name}
            className="w-48 h-60 object-cover rounded shadow"
          />
        )}

        {/* Right: Info */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="font-semibold text-gray-800">Pozicioni</h2>
            <p>{staff.title}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Departamenti</h2>
            <p>{staff.department}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Email</h2>
            <p className="text-blue-700 underline">{staff.email}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Lëndë të Dhëna</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {staff.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
