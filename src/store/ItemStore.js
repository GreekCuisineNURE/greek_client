import { makeAutoObservable } from "mobx";

export default class ItemStore {
  constructor() {
    this._types = [];

    this._items = [
      // {
      //   id: 1,
      //   name: "Грецький Салат",
      //   price: 159,
      //   text: "Свіжі овочі, ніжний сир фета вимочений у томатному соку, грубо...",
      //   alt: "Фото салату. Назва: Грецький Салат. Опис: Свіжі овочі, ніжний сир фета вимочений у томатному соку, грубо...",
      //   img: "https://media.istockphoto.com/id/1370630918/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%B8%D0%BE%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D0%BC%D0%B0%D0%B3%D0%BD%D0%BE%D0%BB%D0%B8%D0%B8-%D0%BC%D0%B0%D0%B3%D0%BD%D0%BE%D0%BB%D0%B8%D1%8F-%D1%84%D0%B5%D0%BB%D0%B8%D0%BA%D1%81-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81-%D0%BE%D1%82%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BF%D1%83%D1%82%D1%8C.jpg?s=2048x2048&w=is&k=20&c=NUY-Evra0Gvaosq-yyRdIf4oxVWaYEqzIAw1XYlCTzk=",
      // },
      // {
      //   id: 2,
      //   name: "Пиво",
      //   price: 98,
      //   text: "Cалат з дрібно нарізаних помідорів і сиру Мізітра...",
      //   alt: "Фото салату. Назва: Дакос. Опис: Cалат з дрібно нарізаних помідорів і сиру Мізітра...",
      //   img: "https://media.istockphoto.com/id/1205259160/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B2%D0%BE%D1%89%D0%BD%D0%BE%D0%B9-%D1%81%D0%B0%D0%BB%D0%B0%D1%82-%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D1%8B-%D1%87%D0%B5%D1%80%D1%80%D0%B8-%D0%B7%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D1%86-%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D0%BC%D0%B5%D1%81%D1%8C-%D0%B8-%D0%BB%D1%83%D0%BA-%D1%81-%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%BC-%D1%81%D1%8B%D1%80%D0%BE%D0%BC-%D1%85%D0%B0%D0%BB%D1%83%D0%BC%D0%B8-%D0%BA%D0%B5%D1%82%D0%BE.jpg?s=2048x2048&w=is&k=20&c=0GsAS3742KlaPnj34Sz6vFzRvnzbXoC_zWOtr7p1Ryo=",
      // },
      // {
      //   id: 3,
      //   name: "Редиш",
      //   price: 140,
      //   text: "Салат складається з маринованих мідій, нарізаних огірків, оливкової олії...",
      //   alt: "Фото салату. Назва: Салат з мідій. Опис: Салат складається з маринованих мідій, нарізаних огірків, оливкової олії...",
      //   img: "https://media.istockphoto.com/id/1327026515/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D1%8B.jpg?s=2048x2048&w=is&k=20&c=P5XIw56jilAhJQsbTt5VJl_Td1rOUkVFuBLSvoSisng=",
      // },
      // {
      //   id: 4,
      //   name: "Сливовий сік",
      //   price: 98,
      //   text: "Салат містить смажені кубики баклажанів, нарізані помідори...",
      //   alt: "Фото салату. Назва: Салат з кальмарів. Опис: До складу салату входять смажені кільця кальмарів, смажений кунжут...",
      //   img: "https://media.istockphoto.com/id/1349067702/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%80%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%B0%D0%BB%D0%B0%D1%82-%D1%81-%D0%B2%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B5%D1%82%D0%BD%D0%BE%D0%B9-%D0%B7%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%BE%D0%B9-%D1%81-%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9-%D0%B3%D1%80%D0%B8%D0%BB%D1%8C.jpg?s=2048x2048&w=is&k=20&c=2E3wMoRFgO-lt6aCxlj-gHTWGCGwyYLSAcamnHhaAZQ=",
      // },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setItems(items) {
    this._items = items;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get items() {
    return this._items;
  }

  get selectedType() {
    return this._selectedType;
  }
}
