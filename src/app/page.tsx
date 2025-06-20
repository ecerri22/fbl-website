import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to FBL</h1>
      <p className="text-lg text-muted-foreground">
        Faculty of Business and Law
      </p>

      <Button>Explore Programs</Button>
    </main>
  );
}
