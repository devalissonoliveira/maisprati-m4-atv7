import PropTypes from "prop-types";
import Menu from "../components/Menu"

const Layout = ({children}) =>{
    return(
        <section className="flex">
            <Menu/>
            {children}
        </section>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

// Layout é um contêiner que define a estrutura principal de uma página. Ele utiliza o componente Menu para renderizar a navegação lateral ou superior e exibe o conteúdo principal recebido como children. A estrutura é envolvida em uma seção com a classe CSS flex, permitindo um layout flexível. 