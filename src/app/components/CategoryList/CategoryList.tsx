'use client';

import React, { useEffect, useState } from 'react';
import {
  getProductsByCategory,
  getProductsBySubCategory,
} from '@/app/admin/api/productsDB';

interface CategoryListProps {
  category: string;
  subCategory?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  category,
  subCategory,
}) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let fetchedProducts;
        if (subCategory) {
          fetchedProducts = await getProductsBySubCategory(subCategory);
        } else {
          fetchedProducts = await getProductsByCategory(category);
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, subCategory]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.productName} - {product.price}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
