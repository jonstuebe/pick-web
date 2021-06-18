import Link from "next/link";
import Image from "next/image";

export interface CardProps {
  label: string;
  href: string;
  unsplashID: string;
}

export default function Card({ label, href, unsplashID }: CardProps) {
  return (
    <Link href={href} passHref>
      <a className="relative block overflow-hidden">
        <Image
          src={`https://source.unsplash.com/${unsplashID}/1200x534`}
          width={1200}
          height={534}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black">
          <p className="absolute text-2xl font-semibold text-white md:text-3xl bottom-4 left-4">
            {label}
          </p>
        </div>
      </a>
    </Link>
  );
}
