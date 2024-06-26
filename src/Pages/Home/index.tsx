import { Hero } from '../../Components/Molecules/Hero';
import { Layout } from '../../Components/Templates/GeneralTemplate';
import { ProductCategory } from '../../Components/Molecules/ProductCategory';
import { Wrapper } from './wrapper';

type IProductCategoryItem = {
  img: string;
  title: string;
  Description: string;
};
const productCategoryItems: IProductCategoryItem[] = [
  {
    img: '',
    Description: 'MUEBLES PARA',
    title: 'habitación',
  },
  {
    img: '',
    Description: 'MESAS DE',
    title: 'noche',
  },
  {
    img: '',
    Description: 'TIPO DE',
    title: 'camas',
  },
  {
    img: '',
    Description: 'MUEBLES PARA',
    title: 'oficina',
  },
  {
    img: '',
    Description: 'MUEBLES PARA TU',
    title: 'sala de televisión',
  },
  {
    img: '',
    Description: 'MUEBLES PARA TU',
    title: 'zona gamer',
  },
];

export const Home = () => {
  return (
    <Layout>
      <Wrapper className='home-container'>
        <Hero />

        <div className='furniture'>
          <h1 className='furniture-title'>Tienda Online De Muebles</h1>
          <small className='furniture-message'>
            Dale vida a cada rincon de tu hogar con las ultimas tendencias de
            diseño en muebles
          </small>
        </div>

        <div className='categories'>
          {productCategoryItems.map(
            (
              { img, title, Description }: IProductCategoryItem,
              index: number,
            ) => (
              <ProductCategory
                key={index}
                ProductImageCategory={<img src={img} alt='' />}
                Description={<p>{Description}</p>}
                Title={<h3>{title}</h3>}
              />
            ),
          )}
        </div>
        <div className='ProductList'>Lista de productos</div>
        <div className='send'>Envios - big image</div>
        <div className=''>
          <div>
            <img src='' alt='' />
            <p>Productos y procesos amigables con el ambiente</p>
          </div>
          <div>
            <img src='' alt='' />
            <p>Asesoría y atención para elegir tu producto</p>
          </div>
          <div>
            <img src='' alt='' />
            <p>Seguimiento y entrega puntual de tu pedido</p>
          </div>
        </div>
        <div className='about-us'></div>
      </Wrapper>
    </Layout>
  );
};
