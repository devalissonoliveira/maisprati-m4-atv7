const FilterTask = ({setFilter}) => {
  return (
    <section className="flex gap-4">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setFilter("All")}>Todas</button>
        <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setFilter("Completed")}>Completas</button>
        <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setFilter("Incomplete")}>Incompletas</button>
    </section>
  )
}

export default FilterTask

// Filtro interativo em React que exibe três botões para alternar entre tarefas "Todas", "Completas" e "Incompletas". Cada botão chama a função setFilter recebida como propriedade, atualizando o estado do filtro com o valor correspondente. Ele é estilizado com cores, efeitos de hover e bordas, oferecendo uma interface simples para gerenciar a exibição de tarefas em uma aplicação.