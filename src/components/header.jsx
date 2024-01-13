import "../stylescss/header.css";

const Header = () =>{

    return(
        <header className = "header">
            <div className="nombre">
                <h2>
                    Mi Portafolio
                </h2>
            </div>
            <menu className="menu">
                <a href="/">Inicio</a>
                <a href="#cardscroll">Proyectos</a>
                <a href="#scrollerstudy">Estudios/Lenguaje</a>
                <a href="/NewsLetter">NewsLetter</a>
                <a href="/Contact">Contacto</a>
            </menu>
        </header>
    )
}


export default Header;