import { useState } from "react";
import Layout from "../../layout";


const BgColorPage = () =>{
    const [color, setColor] = useState("#000000")

    function generateHexadecimalColor() {
        return '#' + parseInt((Math.random() * 0xFFFFFF))
        .toString(16)
        .padStart(6, '0');
    }

    const handleClick = ()=>(
        setColor(generateHexadecimalColor())
   )

    return (
        <Layout>
            <section className="flex flex-col justify-center items-center w-full" style={{ backgroundColor: color }}>
                <p className="text-white text-7xl mb-4">{color}</p>
                
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClick}>
                    Mudar Cor
                </button>
            </section>
        </Layout>
    )
}

export default BgColorPage;

//BgColorPage é uma página React que altera dinamicamente a cor de fundo ao clicar em um botão. Ele utiliza o estado color para armazenar o código hexadecimal da cor atual. A função generateHexadecimalColor gera uma nova cor aleatória em formato hexadecimal, e o clique no botão chama handleClick, que atualiza a cor de fundo com uma nova cor.

// A página é estilizada com o componente Layout e exibe o código da cor atual como texto centralizado na tela, estilizado com uma fonte grande. Um botão estilizado permite interatividade, tornando a experiência do usuário simples e visualmente impactante.