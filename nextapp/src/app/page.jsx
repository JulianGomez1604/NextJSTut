import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return <div className={styles.container}>
    
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, 
        dolores fugit? Quae architecto minus id veniam quos odit, doloribus sequi 
        labore, vel voluptas nemo accusamus rerum veritatis soluta amet magnam!
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImage} />
    </div>

  </div>;
};

export default Home;