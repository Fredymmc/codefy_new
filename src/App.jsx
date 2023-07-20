import './style.css'
import img1 from "./assets/images/codefy_logo.webp"
import img2 from "./assets/images/codefypc1.png"
import img3 from "./assets/images/codefypc2.png"
import img4 from "./assets/images/codefypc3.png"
import img5 from "./assets/images/logo2.png"
import img6 from "./assets/images/icon1.png"
import img7 from "./assets/images/icon2.png"
import img8 from "./assets/images/icon3.png"
import img9 from "./assets/images/icon4.png"
import img10 from "./assets/images/banner.jpg"
import img11 from "./assets/images/foto2.png"
import img12 from "./assets/images/foto3.png"
import img13 from "./assets/images/foto4.png"
import img14 from "./assets/images/foto5.png"


function App() {

  return (
    <>
        <div class="container_top">
          <div class="top">
            <p> <span class="contact_top"> contacto@codefyplus.com / </span> +593 958863290</p>
            <div class="redes">
              <a href="">
                <box-icon color="#fff" type='logo' name='linkedin'></box-icon> </a>
              <a href="">
                <box-icon color="#fff" name='facebook-square' type='logo'></box-icon> </a>
              <a href="">
                <box-icon color="#fff" name='instagram-alt' type='logo'></box-icon> </a>
              <a href="">
                <box-icon color="#fff" name='envelope' type='solid'></box-icon> </a>
            </div>
          </div>
        </div>
        <header>
          <div class="container_header">
            <div class="left_header">
              <div class="container_img">
                <img class="img_header" src={img1} alt="" />
              </div>
              <br /> <br />
              <h1>  Quieres  una espectacular página web y comenzar a generar clientes e ingresos en línea </h1>
              <h3> Diseño web moderno e interactivo  adaptado a tus necesidades y optimizado para SEO</h3>
              <br /> <br />
              <button class="button_primary" data-aos="zoom-out-right"> Quiero mi Web   </button>
              <button class="button_secondary" data-aos="zoom-out-left"> Obtener descuento </button>
              <br /> <br />
            </div>
            <div class="rigth_header">
              {/* <img class="img_principal" src="./img/header_img.png" alt=""> */}
              <img class="img_pc1 img_principal" src={img2} alt="" />
              <img class="img_pc2 img_principal" src={img3} alt="" />
              <img class="img_pc3 img_principal" src={img4} alt="" />
            </div>
          </div>
        </header>
        <section class="services_section">
          <div class="container_services" data-aos="fade-up" >
            <img class="logo_services" src={img5} alt="" />
            <h2> Diseño, Seo y Desarrollo web </h2>
            <h3>¡Da el salto al mundo digital con una <span> página web impresionante! </span> </h3>
            <div class="services_detail">
              <div class="services_card" data-aos="zoom-in-right">
                <div class="service_title">
                  <img src={img6} alt="" />
                  <h2> Diseño UX/UI</h2>
                </div>
                <p> Transforma tu sitio web en un lugar atractivo y accesible que enganche a tus visitantes. Con un diseño atractivo y fácil de usar, podrás motivar a tus usuarios a navegar más y a quedarse por más tiempo, ¡creando una experiencia en línea inolvidable!</p>
              </div>
              <div class="services_card" data-aos="zoom-in-left" data-aos-delay="400">
                <div class="service_title">
                  <img src={img7} alt="" />
                  <h2> Asesoría Personalizada</h2>
                </div>
                <p> ¿Te sientes abrumado por el caudal de información y opciones disponibles en el mundo digital? ¡Deja que nuestro equipo de expertos en asesorías web te ayude a alcanzar tus objetivos.</p>
              </div>
              <div class="services_card" data-aos="zoom-in-right">
                <div class="service_title">
                  <img src={img8} alt="" />
                  <h2> Tecnología de vanguardia</h2>
                </div>
                <p> Deja que la tecnología sea tu aliada en la mejora de la experiencia del usuario, aumento de la funcionalidad, optimización para dispositivos móviles, aceleración de la velocidad de carga y simplificación de la gestión de contenido.</p>
              </div>
              <div class="services_card" data-aos="zoom-in-left" data-aos-delay="400">
                <div class="service_title">
                  <img src={img9} alt="" />
                  <h2> Mantenimiento </h2>
                </div>
                <p> Sé seguro y efectivo con el mantenimiento web. El mantenimiento web es esencial para mejorar la seguridad, corregir errores, aumentar la velocidad, mantener la compatibilidad y agregar nuevas funcionalidades a tu sitio web</p>
              </div>
            </div>
            <br /><br />
          </div>
        </section>
        <section class="action_section">
          <br /> <br />
          <div class="action_part1">
            <h2>Ta ayudamos a crear una página web exitosa</h2>
            <br /><br />
            <a href="">
              <button class="button_ligth" data-aos="zoom-out-right"> Habla con nosotros   </button>
            </a>
          </div>
          <div class="action_part2">
            <div class="action_part2a">
              <div class="action_card" data-aos="flip-left" data-aos-delay="400">
                <h3 class="action_card_h3_1"> 1. Propuesta <br /> a la medida</h3>
                <p>Creamos una propuesta web que qgregue valor al modelo de negocio de su empresa</p>
                <br /><br />
              </div>
              <div class="action_card" data-aos="flip-right">
                <h3 class="action_card_h3_2"> 2. Diseño <br /> y contenido</h3>
                <p>El diseño web es vital en generar confianza y el contenido permite lograr el interés que motiva a la acción</p>
                <br /><br />
              </div>
            </div>
            <div class="action_part2a">
              <div class="action_card" data-aos="flip-left" >
                <h3 class="action_card_h3_3"> 3. Visibilidad  <br /> en Google</h3>
                <p>Aplicación de técnicas SEO profesionales con el fin que tu audiencia encuentre en tu sitio web  lo que esta buscando.</p>
                <br /><br />
              </div>
              <div class="action_card" data-aos="flip-right" data-aos-delay="400">
                <h3 class="action_card_h3_4"> 4. Mantención <br />y difusión</h3>
                <p>Estrategia SEO orgánico, Google Ads, Facebook Ads, respaldos,mejoras, acompañamiento para tener una mejo web</p>
                <br /><br />
              </div>
            </div>
            <br /> <br />
            <br /> <br />
          </div>
        </section>
        <div class="banner">
          <img src={img10} alt="" width="100%" />
        </div>
        <footer>
          <h2> Nuestro Equipo</h2>
          <div class="imagenes_footer">
            <a href="">
              <img src={img11} alt="" data-aos="fade-right"
                data-aos-duration="1000" />
              <h4> Marco Cárdenas   </h4>
              <p>Web programmer</p>
            </a>
            <a href="">
              <img src={img12} alt="" data-aos="fade-right"
                data-aos-duration="1500" />
              <h4> María Proaño </h4>
              <p> SEO Manager</p>
            </a>
            <a href="">
              <img src={img13} alt="" data-aos="fade-right"
                data-aos-duration="2000" />
              <h4> Jonathan Venegas  </h4>
              <p> Backend</p>
            </a>
            <a href="">
              <img src={img14} alt="" data-aos="fade-right"
                data-aos-duration="2500" />
              <h4> Fredy Méndez </h4>
              <p> Website Designer</p>
            </a>
          </div>
          <div class="line" ></div>
          <div class="footer_details">
            <div class="footer_about">
              <h3>About Us</h3>
              <p> Home</p>
              <p>Email: contacto@codefyplus.com </p>
              <p>Phone: +593 958863290 </p>
            </div>
            <div class="footer_redes">
              <h3>Siguenos</h3>
              <br />
              <a href="">
                <box-icon color="#fff" type='logo' name='linkedin'></box-icon> </a>
              <a href="">
                <box-icon color="#fff" name='facebook-square' type='logo'></box-icon> </a>
              <a href="">
                <box-icon color="#fff" name='instagram-alt' type='logo'></box-icon> </a>
              <a href="">
                <box-icon color="#fff" name='envelope' type='solid'></box-icon> </a>
            </div>
          </div>
          <br /> <br />
          <p class="footer_p" >  © 2023 CODEFY+ </p>
          <br /><br />
        </footer>
    </>
  )
}

export default App
