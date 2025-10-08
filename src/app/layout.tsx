import { Providers } from "@/providers/Providers";
import "./globals.css";

export const metadata = {
  title: "Anime Finder",
  description: "Búsqueda de animes con GraphQL y Next.js para demo",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
