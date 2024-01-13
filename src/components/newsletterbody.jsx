import '../stylescss/newsletterbody.css'

const NewsLetterBody = () =>{
    return(
        <div className='div-newsletter'>
            <div className='nbody2'>
                <div className='nbody-info'>
                    <h1>CONTRATACIONES PERSONZALIZADAS</h1>
                </div>
            </div>
            <div className='ncont1'>
                <div className='ncont1-info'>
                    <h2>Este mes ofrezco planes personaliados para empresas !</h2>
                    <h3>Puedes contratarme para crear una aplicación web totalmente funcional con tecnologias como HTML CSS y Frameworks como bootstrap</h3>
                    <a href="/"><button>Ver Ejemplos</button></a> 
                </div>
                <div className='ncont1-info2'>
                    <h2>Profesor de programación front-end online !</h2>
                    <h3>También me puedes contratar como profesor de programación, puedo enseñar los siguientes lenguajes</h3>
                    <div className='brand-container2'>
                        <i class="fa-brands fa-js" ></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-react"></i>
                    </div>
                </div>
            </div>
            <div className='ncont2'>
                <div className='ncont2-info'>
                    <h2>Auditorias de Seguridad</h2>
                    <h3>No estas seguro de si tu página web o empresa esta segura ? Yo me encargo de hacer un auditoria completa junto a la empresa Audity's para implementar la mayor seguridad posible y evitar los ataques no deseados</h3>
                    <div className='ncont2-info2'>
                        <p> <b>Quieres ver mas  ? Pulsa el botón!</b></p>
                        <a href="/"><button>Ir a la página</button></a>
                    </div>
                </div>
            </div>
            <div className='ncont3'>
                <div className='ncont3-info'>
                    <h2>Si te ha interesado, contacta conmigo, no lo dudes !</h2>
                    <a href="/Contact"><button>Contacta!</button></a>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterBody;