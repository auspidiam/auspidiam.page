import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="relative flex flex-row">
      <main className="rail-offset flex flex-1 flex-col py-12">
        <div className="flex items-end">
          <Link href="/" aria-label="Return to the Auspidiam homepage">
            <Image
              src="/AuspidiamCursive.png"
              alt="Auspidiam"
              width={420}
              height={90}
              priority
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* header rule: 1px */}
        <hr className="rail-line mt-[-8px] border-t border-solid border-black border-t-[0.5px]" />

        {/* body copy only */}
        <section className="rail-safe relative mt-10 mb-16 flex-1 w-full min-h-[320px] space-y-6 text-lg leading-relaxed">
          {children}
        </section>
      </main>

      <nav className="nav-fixed-rail nav-stack flex flex-col items-center" aria-label="Roots and sprouts logomarks">
        <Link href="/roots" aria-label="Go to the Roots page">
          <Image
            src="/RootsCursive.png"
            alt="Roots cursive wordmark"
            width={180}
            height={72}
            className="h-auto w-[84px] sm:w-[96px] md:w-[112px] lg:w-[128px]"
          />
        </Link>
        <Link href="/kunsang" aria-label="Go to the Kunsang page">
          <Image
            src="/KunsangCursive.png"
            alt="Kunsang cursive wordmark"
            width={180}
            height={72}
            className="h-auto w-[84px] sm:w-[96px] md:w-[112px] lg:w-[128px]"
          />
        </Link>
        <Link href="/sprouts" aria-label="Go to the Sprouts page">
          <Image
            src="/SproutsCursive.png"
            alt="Sprouts cursive wordmark"
            width={180}
            height={72}
            className="h-auto w-[84px] sm:w-[96px] md:w-[112px] lg:w-[128px]"
          />
        </Link>
        <Image
          src="/Arrow.png"
          alt="Arrow illustration"
          width={187}
          height={779}
          className="h-auto w-[22px] sm:w-[26px] md:w-[30px] lg:w-[34px]"
        />
      </nav>
    </div>
  );
}
