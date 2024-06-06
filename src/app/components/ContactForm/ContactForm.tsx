'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './contactForm.module.css';
import { registerCustomer } from '@/app/admin/api/customer';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await registerCustomer(data);
      alert('Форма успішно відправлена!');
      reset();
    } catch (error) {
      console.error('Помилка при відправці форми', error);
      alert('Сталася помилка при відправці форми.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div>
        <label htmlFor="name" className={style.label}>
          Ім&apos;я
        </label>
        <input
          id="name"
          className={style.input}
          placeholder="Ім'я"
          {...register('name')}
        />
      </div>

      <div>
        <label htmlFor="phone" className={style.label}>
          Номер телефон *
        </label>
        <input
          id="phone"
          className={style.input}
          placeholder="+380XX XXX XXXX*"
          data-empty-notice="Ми не зможемо з вами оперативно зв'язатись без номеру телефону"
          {...register('phone', { required: "Номер телефону є обов'язковим" })}
        />
        {errors.phone && (
          <span className={style.error}>
            {errors.phone.message || errors.phone.ref?.dataset?.emptyNotice}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email" className={style.label}>
          Електронна пошта *
        </label>
        <input
          id="email"
          className={style.input}
          placeholder="Ваша електронна пошта*"
          data-empty-notice="Ми не зможемо з вами зв'язатись без електронної пошти"
          {...register('email', {
            required: "Електронна пошта є обов'язковою",
          })}
        />
        {errors.email && (
          <span className={style.error}>
            {errors.email.message || errors.email.ref?.dataset?.emptyNotice}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message" className={style.label}>
          Повідомлення *
        </label>
        <textarea
          id="message"
          className={style.input}
          data-empty-notice="Залиште нам хоч якесь повідомлення"
          {...register('message', { required: "Повідомлення є обов'язковим" })}
        ></textarea>
        {errors.message && (
          <span className={style.error}>
            {errors.message.message || errors.message.ref?.dataset?.emptyNotice}
          </span>
        )}
      </div>

      <button type="submit" className={style.button}>
        Надіслати
      </button>
    </form>
  );
};

export default ContactForm;
