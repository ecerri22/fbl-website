import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Text content */}
        <div className="relative h-96 md:h-[500px] p-30 bg-cover bg-center bg-[url('/images/fakulteti-ekonomik-uniel.jpg')]">
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-blue-950 opacity-90 z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight px-4">
              Welcome to FBL
            </h1>
            <p className="text-lg px-4">
              Learn about our programs, research projects, and the
              academic life at the Faculty of Business and Law.
            </p>
          </div>
        </div>


        {/* Right Image */}
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src="/images/fakulteti-ekonomik-uniel.jpg"
            alt="hero-banener"
            fill
            className="object-cover w-full h-full"
          />

        </div>

      </section>
    </main>
  );
}
