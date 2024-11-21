import { useState } from "react";


const FormNewTask = ({newTask}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!value) return;
        newTask(value)
        setValue("");
    }

  return (
    <section>
        <h3 className="font-semibold text-2xl text-center mb-4">Criar Tarefa</h3>
        <form  className="flex gap-2" onSubmit={handleSubmit}>
            <input className="border-2 p-2 rounded" value={value} type="text" placeholder="Digite o título" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="bg-sky-700 hover:bg-sky-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white">Criar Tarefa</button>
        </form>
    </section>
  )
}

export default FormNewTask

// O componente FormNewTask é um formulário em React para criar novas tarefas. Ele utiliza o estado para controlar o valor do campo de entrada (value) e chama a função newTask (recebida como propriedade) ao enviar o formulário, adicionando uma nova tarefa. O campo de entrada permite que o usuário digite o título da tarefa, e um botão envia os dados. Após o envio, o campo é limpo automaticamente. O componente é estilizado com classes para uma interface simples e funcional.