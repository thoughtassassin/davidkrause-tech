import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-start gap-10 items-center px-24 py-5 border-b-2 border-gray-800">
      <Link href="/">Journey</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}  