import React from "react";
import cl from "./ItemPage.module.css";
const ItemPage = () => {
  const item = {
    id: 3,
    name: "Редиш",
    price: 140,
    text: "Назва: Салат з мідій. Опис: Салат складається з маринованих. Фото салату. Назва: Салат з мідій. Опис: Салат складається з маринованих мідій, нарізаних огірків, оливкової олії... Фото салату. Назва: Салат з мідій. Опис: Салат складається з маринованих мідій, нарізаних огірків, оливкової олії... Фото салату. Назва: Салат з мідій. Опис: Салат складається з маринованих мідій, нарізаних огірків, оливкової олії... Фото салату. Назва: Салат з мідій. Опис: Салат складається з маринованих мідій, нарізаних огірків, оливкової олії...",
    alt: "Фото салату. Назва: Салат з мідій. Опис: Салат складається з маринованих мідій, нарізаних огірків, оливкової олії... ",
    img: "https://media.istockphoto.com/id/1327026515/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D1%8B.jpg?s=2048x2048&w=is&k=20&c=P5XIw56jilAhJQsbTt5VJl_Td1rOUkVFuBLSvoSisng=",
  };
  return (
    <article className={cl.item}>
      <div className={cl.container}>
        <div className={cl.item_inner}>
          <img className={cl.item_img} src={item.img} alt={item.alt} />
          <section className={cl.item_contentSection}>
            <h1 className={cl.item_title}>
              <strong>{item.name}</strong>
            </h1>
            <p className={cl.item_price}>
              <strong>{item.price} UAH</strong>
            </p>
            <p className={cl.item_text}>{item.text}</p>
            <button className={cl.item_button}>Хочу</button>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ItemPage;
