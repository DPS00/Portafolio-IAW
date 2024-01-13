import "../stylescss/initialProjects.css"
import camper from '../img/camperlogo.png'
import port from '../img/logoport.jpg'
import red from '../img/R.png';
import juegos from '../img/3djuegos.png'

const InitialProjects = () =>{
    return(
        <div className="main-container" id="cardscroll">
            <h1 className="entrance">Mis Proyectos:</h1>
            <div className="card-container" >
                <div className="card">
                    <div className="img">
                        <img src={camper} alt="" />
                    </div>

                    <div className="info-project">

                        <p>
                            Pagina creada para la tienda de calzado multinacional Camper, este es uno de los ejemplos de programación con <b>HTML, CSS y JavaScript</b> del cual he tenido un gran aprendizaje 
                        </p>

                        <a href="https://suspicious-mahavira-024e55.netlify.app"><button>Ver Ejemplo</button></a>

                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={port} alt=""/>
                    </div>

                    <div className="info-project">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quia.</p>


                        <a href="https://tender-murdock-847621.netlify.app"><button>Ver Ejemplo</button></a>

                    </div>
                    
                </div>
                <div className="card">
                    <div className="img">
                        <img src={red} alt="" />
                    </div>

                    <div className="info-project">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quia.</p>


                        <a href="https://polite-semifreddo-add9d4.netlify.app"><button>Ver Ejemplo</button></a>

                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={juegos} alt="" />
                    </div>

                    <div className="info-project">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quia.</p>


                        <a href="https://nimble-frangollo-265353.netlify.app"><button>Ver Ejemplo</button></a>

                    </div>
                </div>
                
            </div>
            <div className="more">
                <h1>Para ver todos mis Proyectos, pulsa el botón!</h1>
                <a href="https://github.com/DPS00"><button>Ver Más</button></a>
            </div>
        </div>
    )
}

export default InitialProjects;