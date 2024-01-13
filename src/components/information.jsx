import "../stylescss/information.css";
import userImage from "../img/user.png";
import interrogacion from "../img/interrogacion.png"

const Information = () =>{
    return(
        <div className="info-container">
            <div className="myinfo">
                <div className="img-container">
                    <img src={userImage} alt="" />
                </div>
                <div className="info2-container">
                    <p>Buenas! Soy <b>David Planas</b>, un estudiante de informática estudiante en <b> Emili Darder </b>. Destaco por mi habilidad para trabajar 
                        de manera eficiente tanto en <b> proyectos individuales </b> como en <b> equipo </b>. Mi experiencia se centra en el desarrollo de 
                        software y la resolución de desafíos tecnológicos, reflejando mi compromiso con la excelencia en mi portafolio.</p>
                </div>
            </div>
            <div className="aboutme">
                <div className="img-container">
                    <img src={interrogacion} alt="" />
                </div>
                <div className="info2-container">
                    <p>Tengo maestría en CSS, HTML y JavaScript, destacando por mi experiencia en el desarrollo web. Ciertamente mi enfoque se ha centrado 
                        últimamente en React, donde he canalizado mi especialización para crear interfaces dinámicas y eficientes. Mi portafolio refleja la 
                        maestría en estas tecnologías, combinando habilidades sólidas con una pasión constante por la innovación en el mundo del desarrollo web.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Information;