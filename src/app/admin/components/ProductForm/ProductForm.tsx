'use client';

import React, { useState } from 'react';
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldErrors,
} from 'react-hook-form';
import ProductNameInput from './ProductNameInput';
import ProductImageInput from './ProductImageInput';
import ProductDescriptionInput from './ProductDescriptionInput';
import CategorySelect from './CategorySelect';
import SimpleProduct from './SimpleProduct';
import VariationInput from './VariationInput';
import style from './productForm.module.css';

interface FormData {
  productName: string;
  productDescription: string;
  category: string;
  subCategory: string;
  productType: string;
  price: number | null;
  availability: string;
  sku: string;
  productImage: FileList | null;
  galleryImages: { image: FileList | null }[];
  variations: any;
}

const ProductForm: React.FC = () => {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [productImagePreview, setProductImagePreview] = useState<string | null>(
    null
  );
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>(
    []
  );
  const [numOfVariations, setNumOfVariations] = useState(0);
  const [variationData, setVariationData] = useState<Array<any>>([]);
  const [variationNames, setVariationNames] = useState<string[]>([]);
  const [isNameVariations, setIsNameVariation] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      productName: '',
      productDescription: '',
      category: '',
      subCategory: '',
      productType: 'simple',
      price: null,
      availability: 'available',
      sku: '',
      productImage: null,
      galleryImages: [{ image: null }],
      variations: [],
    },
  });

  const { fields: galleryFields, append: appendGalleryImage } = useFieldArray({
    control,
    name: 'galleryImages',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    switch (category) {
      case 'drone':
        setSubCategories(['10 Дюймів', '7 Дюймів']);
        break;
      case 'antenna-relay-stations':
        setSubCategories(['Антени', 'Ретранслятори']);
        break;
      default:
        setSubCategories([]);
    }
  };

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const newPreviews = [...galleryImagePreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setGalleryImagePreviews(newPreviews);
    }
  };

  const getErrorMessage = (error: any) => {
    if (error) {
      return typeof error === 'string' ? error : error.message;
    }
    return null;
  };

  const watchProductType = watch('productType', 'simple');

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <ProductNameInput register={register} errors={errors} />

      <ProductImageInput
        register={register('productImage', {
          required: 'Завантажте зображення товару',
        })}
        errors={errors.productImage}
        onChange={handleProductImageChange}
        previewUrl={productImagePreview}
        label="Зображення товару"
      />

      <div className={style.inputContainer}>
        <label className={style.label}>Галерея товару</label>
        {galleryFields.map((field, index) => (
          <ProductImageInput
            key={field.id}
            register={register(`galleryImages.${index}.image`)}
            errors={errors.galleryImages?.[index]?.image}
            onChange={(e) => handleGalleryImageChange(e, index)}
            previewUrl={galleryImagePreviews[index]}
            label={`Зображення галереї товару ${index + 1}`}
          />
        ))}
        <button
          className={style.button}
          type="button"
          onClick={() => appendGalleryImage({ image: null })}
        >
          Додати ще зображення
        </button>
      </div>

      <ProductDescriptionInput
        label="Опис товару"
        register={register('productDescription', {
          required: 'Введіть опис',
        })}
        errors={errors.productDescription}
      />

      <CategorySelect
        register={register}
        errors={errors}
        subCategories={subCategories}
        handleCategoryChange={handleCategoryChange}
      />

      <div className={style.inputContainer}>
        <label className={style.label}>Тип товару</label>
        <select {...register('productType')}>
          <option value="simple">Звичайний товар</option>
          <option value="variable">Варіативний товар</option>
        </select>
        {errors.productType && (
          <p className={style.error}>{getErrorMessage(errors.productType)}</p>
        )}
      </div>

      {watchProductType === 'simple' ? (
        <SimpleProduct
          register={register}
          errors={errors as FieldErrors<FormData>}
          getErrorMessage={getErrorMessage}
        />
      ) : (
        <>
          <div className={style.inputContainer}>
            <label className={style.label}>
              Кількість нестандартних інпутів
            </label>
            <input
              type="number"
              className={style.input}
              value={numOfVariations}
              onChange={(e) => setNumOfVariations(parseInt(e.target.value))}
            />
          </div>

          {numOfVariations > 0 && (
            <>
              {Array.from({ length: numOfVariations }).map((_, index) => (
                <div key={index} className={style.inputContainer}>
                  <label className={style.label}>
                    Назва інпутів {index + 1}
                  </label>
                  <input
                    type="text"
                    className={style.input}
                    value={variationNames[index] || ''}
                    onChange={(e) => {
                      const newNames = [...variationNames];
                      newNames[index] = e.target.value;
                      setVariationNames(newNames);
                    }}
                  />
                </div>
              ))}
              <button type="button" onClick={() => setIsNameVariation(true)}>
                Підтвердити назви
              </button>
              <div>
                {isNameVariations && (
                  <VariationInput
                    namesList={variationNames}
                    register={register}
                    errors={errors}
                    onChange={(updatedVariation) => {
                      setVariationData((prevData) => {
                        const newData = [...prevData];
                        const index = variationNames.indexOf(
                          updatedVariation.variationName
                        );
                        if (index !== -1) {
                          newData[index] = updatedVariation;
                        }
                        return newData;
                      });
                    }}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
      <button className={style.button} type="submit">
        Завантажити товар
      </button>
    </form>
  );
};

export default ProductForm;
