'use client';
import React, { useEffect, useState } from 'react';
// import { getProductsByCategory } from '@/app/admin/api/products';
import { getProductsByCategory } from '@/app/admin/api/productsDB';

interface CategoryListProps {
  category: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('I am here products');
        const products = await getProductsByCategory(category);
        console.log('Products fetched:', products);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      {/* {products.map((product) => (
        <div key={product.id}>
          {product.productName} - {product.price}
        </div>
      ))} */}
    </div>
  );
};

export default CategoryList;
