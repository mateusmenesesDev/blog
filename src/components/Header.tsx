import Link from "next/link";
import { Single_Day } from "next/font/google";

const bungee = Single_Day({
  weight: "400",
  display: "swap",
});

export default function Header() {
  return (
    <header className="mb-16 bg-[#FB7021] px-8 py-4">
      <div className="m-auto flex items-center justify-between lg:max-w-[90rem]">
        <span className={`${bungee.className} text-3xl font-bold text-white`}>
          Youtube Blog
        </span>
        <Link href="/" className="font-medium text-white">
          Home
        </Link>
      </div>
    </header>
  );
}
