import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { AnimatedText } from './AnimatedText';
import { NavBar } from "./tubelight-nav";

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            <AnimatedText trigger="instant" speed="medium">
              {metaData.title}
            </AnimatedText>
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <NavBar />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
