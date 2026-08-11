export default function AdminPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛠️ Painel Administrativo</h1>
      <div className="bg-dark-800 p-6 rounded-xl space-y-4">
        <p className="text-lg">Acesse as opções abaixo:</p>
        <ul className="space-y-2">
          <li>📦 Cadastrar Produtos — em construção</li>
          <li>🏷️ Gerenciar Categorias — em construção</li>
          <li>⚙️ Configurações da Loja — em construção</li>
        </ul>
        <div className="mt-6 p-4 bg-dark-700 rounded-lg">
          <p className="text-sm text-gray-400">
            ⚠️ Para gerenciar produtos, crie-os diretamente no banco de dados ou aguarde a próxima atualização do painel.
          </p>
        </div>
      </div>
    </div>
  );
}

