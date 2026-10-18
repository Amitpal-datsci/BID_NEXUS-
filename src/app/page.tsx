import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Pipeline } from "@/components/landing/pipeline";
import { Evidence } from "@/components/landing/evidence";
import { Access } from "@/components/landing/access";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Pipeline />
        <Evidence />
        <Access />
      </main>
      <SiteFooter />
    </>
  );
}
