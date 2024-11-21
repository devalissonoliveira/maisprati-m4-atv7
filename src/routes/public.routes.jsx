import {createBrowserRouter} from 'react-router-dom';
import CountPage from '../pages/CountPage';
import BgColorPage from '../pages/BgColorPage';
import Timer from '../pages/Timer';
import TaskList from '../pages/TaskList'

const router = createBrowserRouter ([
    {
        path: "/",
        element: <CountPage/>,
    },
    {
        path: "/bg-color",
        element: <BgColorPage/>,
    },
    {
        path: "/timer",
        element: <Timer/>,
    },
    {
        path: "/task-list",
        element: <TaskList/>,
    },
])

export default router;


// O código define um conjunto de rotas para a aplicação React usando o createBrowserRouter da biblioteca react-router-dom. Ele mapeia caminhos de URL para componentes específicos, permitindo a navegação entre diferentes páginas.

// Essas rotas tornam o site navegável, permitindo que os usuários acessem essas funcionalidades específicas a partir de URLs diferentes. O roteador é exportado para ser usado na configuração da aplicação.