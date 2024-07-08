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
// import { addProduct } from '../../api/products';
import { addProduct } from '../../api/productsDB';
import style from './productForm.module.css';
import FormData from './interfaces';

const ProductForm: React.FC = () => {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [productImagePreview, setProductImagePreview] = useState<string | null>(
    null
  );
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>(
    []
  );
  const [numOfVariations, setNumOfVariations] = useState(0);
  const [variationNames, setVariationNames] = useState<string[]>([]);
  const [isNameVariations, setIsNameVariation] = useState(false);
  const [countArticle, setCountArticle] = useState<number>(0);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgFileGallery, setImgFileGallery] = useState<File[]>([]);

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
      shortDescription: '',
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
      productImageUrl: null,
      galleryImageUrls: [{ image: null }],
    },
  });

  const { fields: galleryFields, append: appendGalleryImage } = useFieldArray({
    control,
    name: 'galleryImages',
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (imgFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          data.productImageUrl = reader.result as string;
        };
        reader.readAsDataURL(imgFile);
      }

      const galleryImagePromises = imgFileGallery.map((file: File) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const galleryImages = await Promise.all(galleryImagePromises);
      data.galleryImageUrls = galleryImages.map((image) => ({
        image,
      }));
      delete data.productImage;
      delete data.galleryImages;
      await addProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      alert('Продукт успішно завантажено');
      reset();
      setProductImagePreview(null);
      setGalleryImagePreviews([]);
    }
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
    const file: File | null = e.target.files?.[0] ?? null;
    setImgFile(file);
    if (file) {
      setProductImagePreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file: File | null = e.target.files?.[0] ?? null;
    const currentFiles = imgFileGallery ? [...imgFileGallery] : [];
    if (file) {
      currentFiles[index] = file;
      setImgFileGallery(currentFiles);
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

  const addVariation = () => {
    setCountArticle(countArticle + 1);
  };

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

      <div className={style.galeryInputContainer}>
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
        label="Короткий опис товару"
        register={register('shortDescription', {
          required: 'Введіть опис',
        })}
        errors={errors.shortDescription}
      />

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
                  <label className={style.label}>Назва поля {index + 1}</label>
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
              <button
                className={style.button}
                type="button"
                onClick={() => setIsNameVariation(true)}
              >
                Підтвердити назви полів
              </button>
              <div className={style.blokContainer}>
                {isNameVariations && (
                  <>
                    {Array.from(Array(countArticle), (e, i) => (
                      <>
                        <VariationInput
                          key={i}
                          index={i}
                          namesList={variationNames}
                          register={register}
                          errors={errors as FieldErrors<FormData>}
                        />
                        <div className={style.divider}></div>
                      </>
                    ))}
                    <button
                      className={style.button}
                      type="button"
                      onClick={addVariation}
                    >
                      Додати варіацію товару
                    </button>
                  </>
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
