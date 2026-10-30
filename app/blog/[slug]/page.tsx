import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../blog.module.css";
import { getPost, posts } from "../posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Jirat Nimsombun`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.article}>
      <nav className={styles.nav} aria-label="Article navigation">
        <Link className={styles.wordmark} href="/blog">
          notes
        </Link>
        <Link href="/blog">All writing ↗</Link>
      </nav>

      <article>
        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span>{post.category}</span>
            <time dateTime={post.date}>{post.displayDate}</time>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className={styles.dek}>{post.intro}</p>
        </header>

        {post.coverImage ? (
          <figure className={styles.coverFigure}>
            <Image
              className={styles.coverImage}
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              sizes="(max-width: 760px) calc(100vw - 2.5rem), 72rem"
              style={{ objectPosition: post.coverImage.position }}
              priority
              unoptimized
            />
            {post.coverImage.caption ? (
              <figcaption>{post.coverImage.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className={styles.articleGrid}>
          <span className={styles.articleLabel}>The note</span>
          <div className={styles.prose}>
            {post.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.image ? (
                  <figure className={styles.inlineFigure}>
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      sizes="(max-width: 760px) calc(100vw - 2rem), 38rem"
                      unoptimized
                    />
                    {section.image.caption ? (
                      <figcaption>{section.image.caption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </section>
            ))}
          </div>
          <p className={styles.articleAside}>
            Have a thought? <a href="mailto:jiratnim@gmail.com">Write to me.</a>
          </p>
        </div>
      </article>
    </main>
  );
}
