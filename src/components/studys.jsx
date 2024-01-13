import '../stylescss/studys.css';

const Studys = () =>{
    return(
        <div className="studys-container" id='scrollerstudy'>
            <div className="card2">
                <div className='instimg'></div>
                <div className='info-card2'>
                    <h3>Estudios <br /> Secundarios Obligatorios</h3>
                    <p><u>ESO</u></p>
                    <h4><a href="http://iesramonllull.net">IES Ramon Llull</a></h4>
                    <p>2015-2019</p>
                </div>
            </div>
            <div className='card2'>
                <div className='instimg'></div>
                <div className='info-card2'>
                    <h3>Grado medio: <br />Sistemas microinformáticos y redes</h3>
                    <p><u>SMX</u></p>
                    <h4><a href="https://www.iesemilidarder.com/web/">IES Emili Darder</a></h4>
                    <p>2020-2022</p>
                </div>
            </div>
            <div className='card2'>
                <div className='instimg2'></div>
                <div className='info-card2'>
                    <h3>Grado Superior: Administracion de sistemas informaticos y redes <br/></h3>
                    <p><u>ASIX</u></p>
                    <h4> <a href="https://www.iesemilidarder.com/web/">IES Emili Darder</a></h4>
                    <p>2020 - X</p>
                </div>
            </div>

            <div className='card-social'>
                <div className='instimg3'></div>
                <div className='info-card2'>
                    <h3>Lenguajes Masterizados</h3>
                    <p>Esta es la lista de lenguajes los cuales he logrado masterizar con el paso del timpo:</p>
                </div>
                <div className='brand-container'>
                    <i class="fa-brands fa-js" ></i>
                    <i class="fa-brands fa-css3"></i>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-react"></i>
                </div>
            </div>
        </div>
    )
}

export default Studys;