import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-6 md:px-20 py-12">
        {/* Text content */}
        <div className="space-y-6">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to FBL
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn about our programs, research projects, and the
            academic life at the Faculty of Business and Law.
          </p>
          <div className="flex gap-4">
            <Button className="px-6 py-3 text-base">Get Started</Button>
            <Button variant="outline" className="px-6 py-3 text-base">
              Watch Tour
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src="/students.jpg"
            alt="Students"
            fill
            className="object-cover w-full h-full"
          />

        </div>
      </section>
    </main>
  );
}
