import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.blogHeader}>
          <div className={styles.headerWrapper}>
            <h1 className={styles.blogTitle}>Blog</h1>
            <p className={styles.blogSubtitle}>Thoughts on AI, technology, and the future of development</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
