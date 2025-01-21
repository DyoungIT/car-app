import style from "./AboutCompany.module.css";

export function AboutCompany() {
  return (
    <div className={style.mainContainer}>
      <h1>Немного о нашей компании</h1>

      <div className={style.FirstTextContainer}>
        <h2>Преимущества</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          suscipit praesentium totam delectus ipsa commodi debitis perspiciatis,
          ab rem voluptatum earum! Itaque sunt obcaecati commodi tempore tempora
          illo sint nisi.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          suscipit praesentium totam delectus ipsa commodi debitis perspiciatis,
          ab rem voluptatum earum! Itaque sunt obcaecati commodi tempore tempora
          illo sint nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Maxime suscipit praesentium totam delectus ipsa commodi debitis
          perspiciatis, ab rem voluptatum earum! Itaque sunt obcaecati commodi
          tempore tempora illo sint nisi.
        </p>
      </div>

      <div className={style.SecondTextContainer}>
        <h2>Качественное обслуживание</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          suscipit praesentium totam delectus ipsa commodi debitis perspiciatis,
          ab rem voluptatum earum! Itaque sunt obcaecati commodi tempore tempora
          illo sint nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Maxime suscipit praesentium totam delectus ipsa commodi debitis
          perspiciatis, ab rem voluptatum earum! Itaque sunt obcaecati commodi
          tempore tempora illo sint nisi.
        </p>
      </div>

      <div className={style.ThirdTextContainer}>
      <h2>Надежность</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        suscipit praesentium totam delectus ipsa commodi debitis perspiciatis,
        ab rem voluptatum earum! Itaque sunt obcaecati commodi tempore tempora
        illo sint nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Maxime suscipit praesentium totam delectus ipsa commodi debitis
        perspiciatis, ab rem voluptatum earum! Itaque sunt obcaecati commodi
        tempore tempora illo sint nisi.
      </p>
      </div>
    </div>
  );
}
