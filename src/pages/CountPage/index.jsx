import { useState } from "react";
import Layout from "../../layout";

const CountPage = () => {
  const [count, setCount] = useState(0);

  const handleClickAdd = () =>{
    setCount((count) => count + 1)
  }

  const handleClickRemove = () =>{
    count > 0
    ? setCount((count) => count - 1)
    : count;
  }

  return (
    <Layout>
      <section className="w-full flex flex-col justify-center items-center px-4">
        <p className="text-9xl mb-6">{count}</p>
        <div className="flex gap-10">
        <button className="flex justify-center items-center w-20 bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow text-4xl" onClick={handleClickAdd}>
          +
        </button>
        <button className="flex justify-center items-center w-20 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow text-4xl" onClick={handleClickRemove}>
          -
        </button>
        </div>
      </section>
    </Layout>
  )
}

export default CountPage;

// CountPage é uma página React que permite ao usuário incrementar e decrementar um contador. Ele utiliza o estado count para armazenar o valor atual do contador e possui duas funções para manipular o estado:

// handleClickAdd: incrementa o contador em 1.
// handleClickRemove: decrementa o contador em 1, mas impede que o valor fique negativo.

// A interface é composta por um número grande centralizado para exibir o valor atual do contador e dois botões estilizados: um verde para aumentar o valor e um vermelho para diminuir. O layout é gerenciado pelo componente Layout, proporcionando uma experiência limpa e intuitiva para o usuário.