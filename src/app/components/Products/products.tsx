'use client';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { RootState } from '@/lib/store';
import {
  setCategory,
  setSubCategory,
} from '@/lib/features/products/productSlice';
import CategoryList from '../CategoryList/CategoryList';
import SelectProduct from '../selectProduct/selectProduct';
import style from './product.module.css';

const Product = () => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(
    (state: RootState) => state.products.currentCategory
  );
  const currentSubCategory = useAppSelector(
    (state: RootState) => state.products.currentSubCategory
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    dispatch(setCategory(selectedCategory));
    dispatch(setSubCategory(null));
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubCategory = e.target.value;
    dispatch(setSubCategory(selectedSubCategory));
  };

  const subCategories = (() => {
    switch (currentCategory) {
      case 'drone':
        return ['10 Дюймів', '7 Дюймів'];
      case 'antenna-relay-stations':
        return ['Антени', 'Ретранслятори'];
      default:
        return [];
    }
  })();

  return (
    <>
      <section className={style.container}>
        <h2 className={style.selectTitle}>Виберіть категорію товару</h2>
        <SelectProduct
          handleCategoryChange={handleCategoryChange}
          handleSubCategoryChange={handleSubCategoryChange}
          subCategories={subCategories}
        />
      </section>
      <section className={style.container}>
        <CategoryList
          category={currentCategory}
          subCategory={currentSubCategory}
        />
      </section>
    </>
  );
};

export default Product;
