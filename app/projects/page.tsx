import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <main className="bg-black text-white flex min-h-screen flex-col items-center justify-between pt-28 pb-10 p-8 md:p-24 md:pt-18">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
