import React from "react";
import Image from "next/image";
import styles from "../styles/Artistas.module.css";
import Header from "@/components/Header";

const Artistas = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/borsoi.jpg"
            alt="DJ Borsoi"
            layout="responsive"
            width={800}
            height={800}
            objectFit="cover"
          />
        </div>
        <div className={styles.textWrapper}>
          <h2>Borsoi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia
            voluptatibus fuga amet nisi...
          </p>
        </div>
      </div>

      <div className={styles.containerReverse}>
        <div className={styles.textWrapperReverse}>
          <h2>Bela Coelho</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            impedit rem doloribus vitae...
          </p>
        </div>
        <div className={styles.imageWrapperReverse}>
          <Image
            src="/images/borsoi.jpg"
            alt="DJ Bela Coelho"
            layout="responsive"
            width={800}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default Artistas;
