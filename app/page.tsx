import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a target="_blank">
        <Image
          src="/headshot.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 ring-2 ring-neutral-200 dark:ring-neutral-800 transition-colors duration-200"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About me
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! I'm a first year Math student at the University of Waterloo
          and I'm interested in blockchain and AI.
        </p>
        <p>
          I also like lifting weights, reading, and fencing.
        </p>
        <p>
          I'm always excited to meet new people so feel free to reach out!
        </p>
        
      </div>
    </section>
  );
}
