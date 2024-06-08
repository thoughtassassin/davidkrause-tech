import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <main className="w-full h-full m-0 p-0 relative">
        <Projects />
        <Footer isFixed />
      </main>
    </>
  );
}
