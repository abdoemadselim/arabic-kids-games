import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import { ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "العاب اطفال",
  description:
    "استمتع بمجموعة متنوعة من ألعاب الأطفال بما في ذلك ألعاب قيادة السيارات وألعاب الحرب وألعاب البنات.",
  keywords:
    "العاب اطفال, العاب سيارات, العاب حرب, العاب بنات, العاب تلبيس،العاب ذكاء، العاب طبخ، العاب اكشن، العاب كرة قدم",
  openGraph: {
    title: "العاب اطفال - ألعاب متنوعة وممتعة للأطفال",
    description:
      "استمتع بمجموعة متنوعة من ألعاب الأطفال بما في ذلك ألعاب قيادة السيارات وألعاب الحرب وألعاب البنات.",
    type: "website",
    url: "https://www.yourdomain.com",
    siteName: "العاب اطفال",
  },
  twitter: {
    card: "summary_large_image",
    title: "العاب اطفال - ألعاب متنوعة وممتعة",
    description:
      "استمتع بمجموعة متنوعة من ألعاب الأطفال بما في ذلك ألعاب قيادة السيارات وألعاب الحرب وألعاب البنات.",
  },
};

const baloo = Baloo_Bhaijaan_2({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" className="h-full">
      <body className={`${baloo.className} h-full`}>
        <Header />
        {children}
        <Suspense
          fallback={
            <div className="flex justify-center w-full items-center h-[200px] bg-white"></div>
          }>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
