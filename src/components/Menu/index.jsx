import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
        <nav className="h-full w-2/12">
            <ul className="grid grid-cols-1 h-lvh bg-neutral-100">
                <li 
                  >
                  <NavLink to="/" 
                            className="
                              flex items-center 
                              justify-center
                              text-stone-500 
                              hover:bg-gray-300 
                              px-6 
                              h-full">
                    Count
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/bg-color" 
                            className="
                              flex items-center 
                              justify-center
                              text-stone-500 
                              hover:bg-gray-300  
                              px-6 
                              h-full">
                    BG Color
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/task-list"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    Task List
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/timer"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    Timer
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    List Filter
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    Registration Form
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    Data Request
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/"
                            className="
                            flex items-center 
                            justify-center
                            text-stone-500 
                            hover:bg-gray-300  
                            px-6 
                            h-full">
                    Timer Two
                  </NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Menu;

// O componente Menu é uma barra de navegação vertical que utiliza o NavLink do React Router para criar links interativos entre diferentes páginas da aplicação. Ele é estruturado como uma lista (<ul>) com itens (<li>), onde cada item contém um link para uma rota específica. Cada link possui classes CSS que garantem uma aparência uniforme e um efeito visual ao passar o mouse (hover).