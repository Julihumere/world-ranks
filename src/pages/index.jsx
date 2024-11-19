import Hero from "../components/Hero";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <main className="w-full h-screen relative flex flex-col items-center">
      <Hero />
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[90%] md:w-[95%] lg:w-[90%] lg:top-[60%] md:mt-[50px] sm:w-[95%] sm:top-[60%] md:top-[60%]  z-10 flex flex-col items-center">
        <Grid />
      </div>
    </main>
  );
}
