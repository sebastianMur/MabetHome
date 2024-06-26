import { MabetIcon } from '../../Atoms/MabetIcons';
import { Wrapper } from './wrapper';

export const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-container '>
        <div className='footer-top'>
          <div className='footer-top-container '>
            <div className='footer-top-about-us footer-top-col flex flex-col gap-3 pt-2  '>
              <div className='logo font-bold'>MABET|HOME</div>
              <div className='information'>
                <p className='font-bold text-base'>Sobre Nosotros:</p>
                <p >
                  Tienda Online y Proveedores oficiales. Fabricantes Directos
                </p>
              </div>

              <div className='address flex flex-col  '>
                <p>Carrera 35a # 65-30, Medellín/Antioquia</p>
              </div>

              <div className='contact flex p-0 gap-3'>
                <span className='email flex gap-1  items-center hover:cursor-pointer'>
                  <MabetIcon type='email' classValues='w-11 h-11' />
                  <p>Correo</p>
                </span>
                <span className='  location flex gap-1  items-center hover:cursor-pointer'>
                  <MabetIcon type='mappin' classValues='w-11 h-11' />
                  Ubicación
                </span>
              </div>
              <div className='Social flex gap-7'>
                <a href=''>
                  <MabetIcon
                    type='facebookicon'
                    classValues='h-12 w-12 hover:text-blue-300'
                  />
                </a>
                <a href=''>
                  <MabetIcon
                    type='instagramicon'
                    classValues='h-12 w-12 hover:text-purple-300'
                  />
                </a>
                <a href=''>
                  <MabetIcon
                    type='xicon'
                    classValues='h-12 w-12 hover:text-blue-300'
                  />
                </a>
                <a href=''>
                  <MabetIcon
                    type='youtubeicon'
                    classValues='h-12 w-12 hover:text-red-300'
                  />
                </a>
              </div>
            </div>
            <div className='footer-top-communication footer-top-col pt-2'>
              <h1 className='font-semibold'>Comunicate con un asesor</h1>
              <div className='communication-buttons flex flex-col gap-5 mt-3 mb-3 items-center pl-5'>
                <button className='sales rounded-lg h-16 w-full  flex items-center justify-center gap-2 hover:bg-green-700'>
                  <MabetIcon type='whatsappicon' classValues='h-11 w-11' />
                  <p>Ventas Whatsapp</p>
                </button>
                <button className='pqrs rounded-lg h-16 w-full  flex items-center justify-center gap-2 hover:bg-green-700'>
                  <MabetIcon type='whatsappicon' classValues='h-11 w-11' />
                  <p>Servicio al Cliente & PQRS</p>
                </button>
                <button className='send-email rounded-lg h-16 w-full flex items-center justify-center gap-2 hover:bg-blue-700'>
                  <MabetIcon type='email' classValues='h-11 w-11' />
                  <p>servicioalclientemabet@hotmail.com</p>
                </button>
              </div>
            </div>
            <div className='footer-top-account footer-top-col pt-2'>
              <h1 className='font-semibold  '>Cuenta </h1>
              <ul>
                <li>
                  <p>Mis Ordenes</p>
                </li>
                <li>
                  <p>Mi Cuenta</p>
                </li>
                <li>
                  <p>Cerrar Session</p>
                </li>
                <li>
                  <p>Preguntas Frecuentes</p>
                </li>
                <li>
                  <p>Mis Ordenes</p>
                </li>
              </ul>
            </div>
            <div className='footer-top-information footer-top-col pt-2 '>
              <h1 className='font-semibold '>Información</h1>
              <ul>
                <li>
                  <p>PQR</p>
                </li>
                <li>
                  <p>Sobre Nosotros</p>
                </li>
                <li>
                  <p>Políticas de Garantías</p>
                </li>
                <li>
                  <p>Políticas de Privacidad</p>
                </li>
                <li>
                  <p>Derecho de Retracto</p>
                </li>
                <li>
                  <p>Tratamiento de datos</p>
                </li>
                <li>
                  <p>Contacto</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='footer-bottom-container'>
            <div className='footer-top-col-1 footer-top-col font-light '>
              © 2024 MABET | HOME
            </div>
            <div className='footer-top-col-2 footer-top-col'>
              <div className='credit-cards-1 '>
                <MabetIcon type='creditcard' classValues='' />
              </div>
              <div className='credit-cards-2'>
                <MabetIcon type='cardvisa' classValues='h-11 w-11 ' />
                <MabetIcon type='cardmastercard' classValues='h-11 w-11 ' />
                <MabetIcon type='cardmaestro' classValues='h-11 w-11 ' />
                <MabetIcon type='cardverifiedbyvisa' classValues='h-11 w-11 ' />
              </div>
            </div>
            <div className='footer-top-col-3 footer-top-col  font-semibold'>
              Privacy
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
