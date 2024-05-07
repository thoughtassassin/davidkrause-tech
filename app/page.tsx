import Journey from "@/app/components/Journey";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white flex min-h-screen flex-col items-center justify-between pt-28 pb-10 p-8 md:p-24 md:pt-18">
        <Journey />
      </main>
      <Footer />
    </>
  );
}
