import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>This is 333code.</h2>
        <p>Prepare-se para as melhores festas da cidade!</p>
      </main>
      <Footer />
    </>
  );
}
