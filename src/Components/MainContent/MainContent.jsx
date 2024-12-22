import style from "./MainContent.module.css";

export function MainContent() {
  return (
    <div className={style.container}>
      <img src="/MainCar2.png" alt="CarImage" className={style.image} />
      <div className={style.text}>
        <h1>
          Купи авто своей мечты вместе с CarMarket!
        </h1>
      </div>
    </div>
  );
}
