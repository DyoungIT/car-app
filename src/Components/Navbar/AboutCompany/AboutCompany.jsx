import style from "./AboutCompany.module.css";

export function AboutCompany() {
  return (
    <div className={style.mainContainer}>
      <h1>О Кампании</h1>
      <div className={style.blockText}>
        <div className={style.FirstTextContainer}>
          <h2> <img src="/spanner.svg" alt="" className= {style.svgIcon}/>Преимущества</h2>
          <ul>
            <li>
              Impedit rerum suscipit eius exercitationem doloribus, sapiente
              magnam facere ratione minus maiores, laudantium odit mollitia
              saepe alias velit.
            </li>
            <li>Fugiat architecto eos nulla!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>
        </div>

        <div className={style.SecondTextContainer}>
          <h2> <img src="/service.svg" alt="" className= {style.svgIcon}/>Качественное обслуживание</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            suscipit praesentium totam delectus ipsa commodi debitis
            perspiciatis, ab rem voluptatum earum! Itaque sunt obcaecati commodi
            tempore tempora illo sint nisi. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Maxime suscipit praesentium totam
            delectus ipsa commodi debitis perspiciatis, ab rem voluptatum earum!
            Itaque sunt obcaecati commodi tempore tempora illo sint nisi.
          </p>
        </div>

        <div className={style.ThirdTextContainer}>
          <h2> <img src="/service-hands.svg" alt="" className= {style.svgIcon}/>Надежность</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            suscipit praesentium totam delectus ipsa commodi debitis
            perspiciatis, ab rem voluptatum earum! Itaque sunt obcaecati commodi
            tempore tempora illo sint nisi. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Maxime suscipit praesentium totam
            delectus ipsa commodi debitis perspiciatis, ab rem voluptatum earum!
            Itaque sunt obcaecati commodi tempore tempora illo sint nisi.
          </p>
        </div>
        <div className={style.FourthTextContainer}>
          <h2> <img src="/hands.svg" alt="" className= {style.svgIcon}/>Доверие</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            suscipit praesentium totam delectus ipsa commodi debitis
            perspiciatis, ab rem voluptatum earum! Itaque sunt obcaecati commodi
            tempore tempora illo sint nisi. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Maxime suscipit praesentium totam
            delectus ipsa commodi debitis perspiciatis, ab rem voluptatum earum!
            Itaque sunt obcaecati commodi tempore tempora illo sint nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
