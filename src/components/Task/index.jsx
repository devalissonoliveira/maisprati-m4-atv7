const Task = ({ task, removeTask, completedTask }) => {
  return (
    <li className="flex items-center gap-4 justify-between bg-gray-100 mb-4 p-2 rounded" style={{opacity: task.isCompleted ? "0.6" : "1"}} >
        <h3 style={{textDecoration: task.isCompleted ? "line-through" : ""}}>{task.text}</h3>
        <section className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => completedTask(task.id)}>Completar</button>
            <button className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => removeTask(task.id)}>Deletar</button>
        </section>
    </li>
  )
}

export default Task

// O componente Task é responsável por renderizar cada tarefa individual em uma lista. Ele exibe o texto da tarefa e oferece dois botões: "Completar", para alternar o status de conclusão da tarefa (chamando a função completedTask com o id da tarefa), e "Deletar", para removê-la (chamando a função removeTask com o mesmo id). A aparência muda dinamicamente com base no status de conclusão da tarefa: tarefas concluídas aparecem com opacidade reduzida e texto riscado. O componente é estilizado para uma interface clara e interativa.