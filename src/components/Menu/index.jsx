import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="w-52">
        <nav className="h-full">
            <ul className="grid grid-cols-1 h-lvh bg-neutral-100">
                <li 
                  >
                  <NavLink to="/" 
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Count
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/bg-color" 
                           className={({ isActive }) =>
                            `flex items-center justify-center px-6 h-full 
                            text-stone-500 hover:bg-gray-300 ${
                              isActive ? "bg-gray-300 font-bold" : ""
                            }`
                          }>
                    BG Color
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/task-list"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Task List
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/timer"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Timer
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/list-filter"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    List Filter
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/registration-form"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Registration Form
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/data-request"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Data Request
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/gallery"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/timer-two"
                            className={({ isActive }) =>
                              `flex items-center justify-center px-6 h-full 
                              text-stone-500 hover:bg-gray-300 ${
                                isActive ? "bg-gray-300 font-bold" : ""
                              }`
                            }>
                    Timer Two
                  </NavLink>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Menu;

// O componente Menu é uma barra de navegação vertical que utiliza o NavLink do React Router para criar links interativos entre diferentes páginas da aplicação. Ele é estruturado como uma lista (<ul>) com itens (<li>), onde cada item contém um link para uma rota específica. Cada link possui classes CSS que garantem uma aparência uniforme e um efeito visual ao passar o mouse (hover).