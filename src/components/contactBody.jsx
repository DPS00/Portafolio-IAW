import '../stylescss/contactBody.css'


const ContactBody = () =>{
    return(
        <div className="main-newsletter">
            <div className='main-div'>
                <div className='left-div'>
                    <h1>Contáctame!</h1>
                    <ol className='list'>
                        <ul><i class="fa-brands fa-twitter"></i> @informaticdavid</ul>
                        <ul><i class="fa-brands fa-whatsapp"></i> +34 671 74 75 96</ul>
                        <ul><i class="fa-brands fa-instagram"></i> @davidps16</ul>
                        <ul><i class="fa-brands fa-linkedin"></i> David Planas</ul>
                        <ul><a href="https://github.com/DPS00"><i class="fa-brands fa-github"></i> dps00 </a></ul>
                        <ul><i class="fa-regular fa-envelope"></i> dps00@gmail.com</ul>
                    </ol>
                </div>
                <div className='right-div'>
                    <form action="" className='form-control'>
                        <input type="text" placeholder='Nombre'/>
                        <input type="text" placeholder='Tu Mail'/>
                        <input type="text" placeholder='Telefono de contacto'/>
                        <textarea name="Message" id="Message" cols="20" rows="6" placeholder='Inserta tu mensaje'></textarea>
                    </form>
                    <button className='send-button'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default ContactBody;