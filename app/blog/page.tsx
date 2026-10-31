import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Notes — Jirat Nimsombun",
  description:
    "Notes on engineering, technology, business, strategy, and the spaces between them.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogPage() {
  return (
    <main className={styles.shell}>
      <nav className={styles.nav} aria-label="Blog navigation">
        <Link className={styles.wordmark} href="/">
          jirat nimsombun
        </Link>
        <Link href="/">Index ↗</Link>
      </nav>

      <header className={styles.hero}>
        <div>
          <span className={styles.kicker}>Writing &amp; observations</span>
          <h1>notes</h1>
        </div>
        <p className={styles.heroCopy}>
          Ideas from engineering, technology, business, strategy — and the
          spaces between them.
        </p>
      </header>

      <section aria-labelledby="latest-posts">
        <div className={styles.postsHeader}>
          <h2 id="latest-posts">Latest notes</h2>
          <span>{String(posts.length).padStart(2, "0")}</span>
        </div>
        <ol className={styles.postList}>
          {posts.map((post, index) => (
            <li key={post.slug}>
              <Link className={styles.postLink} href={`/blog/${post.slug}`}>
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
