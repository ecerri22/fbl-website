import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, UserCheck } from "lucide-react";
import Link from "next/link";


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
            <p className="text-sm text-red-700 font-bold uppercase tracking-widest px-4">Welcome to the Faculty of Business and Law</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight px-4">
              We Provide High Quality <span className="underline decoration-red-800">Education</span> For Everyone
            </h1>
            <p className="px-4 text-base text-zinc-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptas nihil deserunt sequi assumenda laudantium ipsam velit quos fuga consectetur.
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

      {/* ABOUT SECTION  */}
      <section className=" flex flex-col md:flex-row gap-12 px-30 py-20 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-6 p-3 basis-[40%]">
          <p className="text-zinc-500 text-base leading-relaxed">
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
          </p>
          <p className="text-zinc-500 text-base leading-relaxed">
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          </p>

          <div>
            <h6 className="text-zinc-800 font-bold text-lg tracking-wide">John Doe</h6>
            <p className="text-sm text-zinc-500">Dean</p>
          </div>
        </div>

        {/* RIGHT SIDE – About Section */}
        <div className="space-y-6 basis-[60%]">
          <h6 className="text-md font-semibold text-red-700 uppercase tracking-widest">About FBL</h6>
          <h2 className="text-3xl text-zinc-800 leading-tight font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti minima eum ex impedit repudiandae corporis.
          </h2>
          <p className="text-base text-zinc-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <button className="bg-red-700 hover:bg-red-800 transition text-white font-semibold text-xs uppercase px-6 py-3 tracking-wider">
            Read More
          </button>
        </div>
      </section>

      {/* STUDY PROGRAMS  */}
      <section className="bg-blue-950 flex flex-col md:flex-row gap-12 px-30 py-20 items-center ">
        {/* LEFT SIDE */}
        <div className="space-y-6 basis-[50%]">
          <h6 className="text-md font-semibold text-red-700 uppercase tracking-widest">Study Programs</h6>
          <h2 className="text-3xl font-semibold text-zinc-200 leading-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti minima eum ex impedit repudiandae corporis.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <button className="bg-red-700 hover:bg-red-800 transition text-white font-semibold text-xs uppercase px-6 py-3 tracking-wider">
            Read More
          </button>
        </div>
       

        {/* RIGHT SIDE */}
         <div className="flex flex-col gap-6 space-y-6 basis-[50%]">
          {/* Bachelor's Card */}
          <Link href="/bachelors" passHref>
            <div className="bg-white text-blue-950 p-6 rounded-md shadow group relative overflow-hidden transition hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-semibold mb-1">Bachelor’s Degree Programs</h3>
              <p className="text-sm text-zinc-600">
                Explore a variety of undergraduate programs tailored to your future.
              </p>

              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <ArrowRight className="w-6 h-6 text-red-700" />
              </div>
            </div>
          </Link>

          {/* Master's Card */}
          <Link href="/masters" passHref>
            <div className="bg-white text-blue-950 p-6 rounded-md shadow group relative overflow-hidden transition hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-semibold mb-1">Master’s Degree Programs</h3>
              <p className="text-sm text-zinc-600">
                Advance your education with specialized graduate programs.
              </p>

              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <ArrowRight className="w-6 h-6 text-red-700" />
              </div>
            </div>
          </Link>
        </div>



      </section>

    </main>
  );
}
