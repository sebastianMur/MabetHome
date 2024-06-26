import { ReactNode } from 'react';
import { Wrapper } from './wrapper';

type props = {
  ProductImageCategory?: ReactNode;
  Description?: ReactNode;
  Title?: ReactNode;
  index?: number;
};

export const ProductCategory = ({
  ProductImageCategory,
  Description,
  Title,
  index,
}: props) => {
  return (
    <Wrapper className={`productCategory-${index}`}>
      <div className='productCategory-image'>{ProductImageCategory}</div>
      <p className='productCategory-description'>{Description}</p>
      <p className='productCategory-title'>{Title}</p>
    </Wrapper>
  );
};
