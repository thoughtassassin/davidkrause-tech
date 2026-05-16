import Journey from "@/app/components/Journey";
import Footer from "@/app/components/Footer";
import SplashHero from "@/app/components/SplashHero";

export default function Home() {
  return (
    <>
      <SplashHero />
      <main className="bg-black text-white p-8 pt-20 pb-10 md:p-24 md:pt-20">
        <Journey />
      </main>
      <Footer />
    </>
  );
}
