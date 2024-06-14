import Wrapper from '@/app/components/Wrapper/Wrapper';
import ProductForm from '../components/ProductForm/ProductForm';
import style from './new-products.module.css';

export default function NewProduct() {
  return (
    <Wrapper>
      <p className={style.text}>Тут ви можете додати нові товари на сайт</p>
      <ProductForm />
    </Wrapper>
  );
}
