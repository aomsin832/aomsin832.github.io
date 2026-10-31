import type { Metadata } from "next";
import Link from "next/link";
import styles from "../blog/blog.module.css";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Aomsin’s Editorial — Jirat Nimsombun",
  description: "Essays, observations, and occasional nonsense by Jirat Nimsombun.",
  alternates: {
    canonical: "/editorial/",
  },
};

export default function EditorialPage() {
  return (
    <main className={styles.shell}>
      <nav className={styles.nav} aria-label="Editorial navigation">
        <Link className={styles.wordmark} href="/">
          jirat nimsombun
        </Link>
        <Link href="/">Index ↗</Link>
      </nav>

      <header className={styles.hero}>
        <div>
          <span className={styles.kicker}>Aomsin’s</span>
          <h1>editorial</h1>
        </div>
        <p className={styles.heroCopy}>
          Essays, observations, and occasional nonsense.
        </p>
      </header>

      <section aria-labelledby="latest-posts">
        <div className={styles.postsHeader}>
          <h2 id="latest-posts">Latest pieces</h2>
          <span>{String(posts.length).padStart(2, "0")}</span>
        </div>
        <ol className={styles.postList}>
          {posts.map((post, index) => (
            <li key={post.slug}>
              <Link className={styles.postLink} href={`/editorial/${post.slug}`}>
                <span className={styles.postIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                </div>
                <div className={styles.postMeta}>
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{post.displayDate}</time>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Jirat Nimsombun</span>
        <a href="mailto:jiratnim@gmail.com">jiratnim [at] gmail</a>
      </footer>
    </main>
  );
}
