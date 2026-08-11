import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shadow Store — Sua Loja Oficial",
  description: "Os melhores produtos com segurança e rapidez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-dark-900 text-gray-100 min-h-screen flex flex-col">
        <header className="bg-dark-800 border-b border-dark-700 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-accent-500">
              🛍️ SHADOW STORE
            </Link>
            <nav className="flex gap-4">
              <Link href="/" className="hover:text-accent-400">Início</Link>
              <Link href="/admin" className="hover:text-accent-400">Painel</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-dark-800 py-6 text-center text-gray-400">
          <p>🛍️ Shadow Store — Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
