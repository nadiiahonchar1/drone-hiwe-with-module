'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import style from './contactForm.module.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // await sendFormDataToDB(data);
      alert('Форма успішно відправлена!');
    } catch (error) {
      console.error('Помилка при відправці форми', error);
      alert('Сталася помилка при відправці форми.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div>
        <label htmlFor="name" className={style.label}>
          Ім'я
        </label>
        <input
          id="name"
          name="name"
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
          name="phone"
          className={style.input}
          placeholder="+380XX XXX XXXX*"
          data-empty-notice="Ми не зможемо з вами оперативно зв'язатись без номеру телефону"
          {...register('phone', { required: true })}
        />
        {errors.phone && (
          <span className={style.error}>
            {errors.phone.message || errors.phone.ref.dataset.emptyNotice}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email" className={style.label}>
          Електронна пошта *
        </label>
        <input
          id="email"
          name="email"
          className={style.input}
          placeholder="Ваша електронна пошта*"
          data-empty-notice="Ми не зможемо з вами зв'язатись без електронної пошти"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className={style.error}>
            {errors.email.message || errors.email.ref.dataset.emptyNotice}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message" className={style.label}>
          Повідомлення *
        </label>
        <textarea
          id="message"
          name="message"
          className={style.input}
          data-empty-notice="Залиште нам хоч якесь повідомлення"
          {...register('message', { required: true })}
        ></textarea>
        {errors.message && (
          <span className={style.error}>
            {errors.message.message || errors.message.ref.dataset.emptyNotice}
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
