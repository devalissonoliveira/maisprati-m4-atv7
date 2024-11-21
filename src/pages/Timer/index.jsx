import { useState, useEffect } from "react";
import Layout from "../../layout";

const Timer = () =>{
    const [seconds, setSeconds] = useState(0);
    const [run, setRun] = useState(true)

    useEffect( ()=>{
        let interval;
        
        if(run){
            interval = setInterval(() =>{
                setSeconds(seconds => seconds + 1)
            }, 1000)
        }

        return () => clearInterval(interval);
    },[run])

    return (
        <Layout>
            <section className="w-full flex flex-col justify-center items-center bg-orange-50">
                <p className="text-9xl mb-6">{seconds}<sub className="text-xl">s</sub></p>
                <section className="flex gap-10">
                    <button className="flex justify-center items-center w-20 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setRun(false)}>
                        Pause
                    </button>

                    <button className="flex justify-center items-center w-20 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"  onClick={() => setSeconds(0)}>
                        Reinicia
                    </button>
                </section>
            </section>
        </Layout>
    )
}

export default Timer;

//Timer é uma página React que funciona como um cronômetro simples, exibindo o tempo decorrido em segundos. Ele utiliza dois estados:

// seconds: mantém o número de segundos passados desde o início ou reinício do cronômetro.
// run: controla se o cronômetro está ativo ou pausado.

// Funcionamento:
// O hook useEffect é responsável por iniciar ou parar o intervalo do cronômetro com base no estado run. Quando run é true, o cronômetro incrementa seconds a cada segundo. Ao pausar, o intervalo é limpo para evitar comportamento inesperado.
// Dois botões controlam o cronômetro:
// Pause: Pausa a contagem ao definir run como false.
// Reinicia: Reinicia o cronômetro, definindo seconds como 0.