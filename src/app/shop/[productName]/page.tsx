import Wrapper from '@/app/components/Wrapper/Wrapper';
// import style from './shop.module.css';

export default function ProductItem(props: {
  params: { productName: string };
  searchParams: {};
}) {
  const { params } = props;
  const shortProductName = params.productName.split('__')[1];
  return (
    <Wrapper>
      <section>
        <h1>Product: {shortProductName} </h1>
      </section>
    </Wrapper>
  );
}
