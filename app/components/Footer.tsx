import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white p-8 pl-12 md:pl-24">
        <div>
          <a
            href="https://www.linkedin.com/in/david-krause-52941910/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
                src="/In-Blue-34.png"
                alt="LinkedIn"
                width={34}
                height={34}
            />
          </a>
      </div>
    </footer>
  );
}
