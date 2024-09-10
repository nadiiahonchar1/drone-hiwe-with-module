import Product from '../components/Products/products';
import Wrapper from '../components/Wrapper/Wrapper';
import { ReduxProvider } from '../hooks/ReduxProvider';
import style from './shop.module.css';

export default function Shop() {
  return (
    <Wrapper>
      <section className={style.heroSection}>
        <h1 className={style.heroText}>Магазин</h1>
      </section>
      <ReduxProvider>
        <Product />
      </ReduxProvider>
    </Wrapper>
  );
}
