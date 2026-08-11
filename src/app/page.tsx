import prisma from "@/lib/prisma";
import Link from "next/link";
import { formatCurrency } from "@/lib/formatCurrency";

export default async function Home() {
  const products = await prisma.product.findMany({
    where: { active: true },
    take: 12,
  });

  return (
    <div className="space-y-10">
      <section className="bg-gradient-to-r from-dark-800 to-dark-700 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Shadow Store</h1>
        <p className="text-lg text-gray-300 mb-6">Produtos de qualidade com segurança e entrega rápida.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Produtos</h2>
        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">Nenhum produto cadastrado ainda.</p>
            <p>Acesse <Link href="/admin" className="text-accent-500 underline">/admin</Link> para cadastrar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-dark-800 p-4 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                <p className="text-gold text-xl font-bold">{formatCurrency(p.price)}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

