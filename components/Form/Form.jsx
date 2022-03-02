import React from "react";
import styles from "../../styles/Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

function Form() {
  const validationSchema = Yup.object().shape({
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(dataAll) {
    console.log(dataAll.name, dataAll.mail,dataAll.phone);

    if (dataAll.acceptTerms) {
      await axios.post(`api/email`, {
        name: dataAll.name,
        email: dataAll.mail,
        phone: dataAll.phone
      });
    } else {
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(dataAll, null, 4));
    }
    reset();
    return false;
  }
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.title}>Оставьте заявку</div>
        <div className={styles.description}>
          Оставьте заявку и получите гарантированную скидку на первый заказ
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input type='text' placeholder='Ваше имя' {...register("name")} />
          <input
            type='mail'
            placeholder='Электронная почта'
            {...register("mail")}
          />
          <input
            type='phone'
            placeholder='Номер телефона'
            {...register("phone")}
          />
          <div className={styles.check}>
            <input
              name='acceptTerms'
              type='checkbox'
              {...register("acceptTerms")}
              id='acceptTerms'
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label>
            {/* https://tilda.education/articles-personal-data-law */}
              Согласен с <a href="https://tilda.education/articles-personal-data-law"><a>правилами</a></a> обработки персональных данных
            </label>
          </div>
          <button type='submit' className={styles.btn}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
