import { useState } from "react";
import Layout from "../../layout";
import Task from "../../components/Task"
import FormNewTask from "../../components/FormNewTask";
import FilterTask from "../../components/FilterTask";

const TaskList = () =>{
    const [allTasks, setAllTasks] = useState([
        {
            id:1,
            text: "Criar o projeto em REACT",
            isCompleted: true,
          },
          {
            id:2,
            text: "Importar Bibliotecas",
            isCompleted: false,
          },
          {
            id:3,
            text: "Realizar um requisição ASYNC",
            isCompleted: false,
          }
    ])

    const newTask = (text) => {
        const newTaskList = [...allTasks, {
            id: Math.floor(Math.random() * 10000),
            text,
            isCompleted: false,
        }]

        setAllTasks(newTaskList)
    }

    const removeTask = (id) => {
        const newTaskList = [...allTasks]
        const filteredTaskList = newTaskList.filter(task => task.id !== id ? task : null)

        setAllTasks(filteredTaskList)
    }

    const completedTask = (id) => {
        const newTaskList = [...allTasks]
        newTaskList.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task)

        setAllTasks(newTaskList)
    }

    const [filter, setFilter] = useState("All");

    return (
        <Layout>
            <section className="w-full flex flex-col items-center mt-8 gap-8">
                <h1 className="font-bold text-4xl">Lista de Tarefas</h1>
                <FormNewTask newTask={newTask}/>
                <FilterTask setFilter={setFilter}/>
                <ul>
                    {allTasks
                    .filter((data) => filter === "All" ? true : filter === "Completed" ? data.isCompleted : !data.isCompleted)
                    .map((data) =>(
                        <Task key={data.id} task={data} removeTask={removeTask} completedTask={completedTask}/>
                    ))}
                </ul>
            </section>
        </Layout> 
    )
}

export default TaskList;


// TaskList é um gerenciador de tarefas em React que permite adicionar, remover, concluir e filtrar tarefas. Ele utiliza o estado para armazenar a lista de tarefas e o filtro ativo. A funcionalidade inclui: adicionar uma nova tarefa com newTask, alternar o status de conclusão com completedTask, remover uma tarefa com removeTask, e aplicar filtros (todas, completas ou incompletas) através do FilterTask. As tarefas são renderizadas dinamicamente como uma lista interativa utilizando o componente Task. O layout é gerenciado por Layout, enquanto o formulário de criação é implementado no componente FormNewTask.