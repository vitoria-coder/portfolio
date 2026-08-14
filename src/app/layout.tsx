import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/navigation/Navbar";
import Footer from "@/src/components/navigation/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vitória Sousa — Software Engineer",
    template: "%s | Vitória Sousa",
  },
  description:
    "Portfólio profissional de Vitória Sousa, estudante de Ciência da Computação e profissional da área de Tecnologia da Informação.",
  openGraph: {
    type: "website",
    title: "Vitória Sousa — Software Engineer",
    description:
      "Portfólio profissional de Vitória Sousa, estudante de Ciência da Computação e profissional da área de Tecnologia da Informação.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Vitória Sousa — Software Engineer",
    description:
      "Portfólio profissional de Vitória Sousa, estudante de Ciência da Computação e profissional da área de Tecnologia da Informação.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}