import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../blog/blog.module.css";
import type { BlogParagraph } from "../posts";
import { allPosts, getPost } from "../posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

function renderParagraph(paragraph: BlogParagraph, index: number) {
  if (typeof paragraph === "string") {
    return <p key={index}>{paragraph}</p>;
  }

  return (
    <p key={index}>
      {paragraph.segments.map((segment, segmentIndex) => {
        if (segment.href) {
          return <a key={segmentIndex} href={segment.href}>{segment.text}</a>;
        }
        if (segment.reveal) {
          return (
            <span
              className={styles.initialsReveal}
              key={segmentIndex}
              tabIndex={0}
              aria-label={`${segment.text}: ${segment.reveal}`}
            >
              {segment.text}
              <span className={styles.initialsTooltip} aria-hidden="true">
                {segment.reveal}
              </span>
            </span>
          );
        }

        if (segment.emphasis === "strong") {
          return <strong key={segmentIndex}>{segment.text}</strong>;
        }

        if (segment.emphasis === "italic") {
          return <em key={segmentIndex}>{segment.text}</em>;
        }

        return <span key={segmentIndex}>{segment.text}</span>;
      })}
    </p>
  );
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Aomsin’s Editorial`,
    description: post.excerpt,
    alternates: {
      canonical: `/editorial/${post.slug}/`,
    },
  };
}

export default async function EditorialPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.article}>
      <nav className={styles.nav} aria-label="Article navigation">
        <Link className={styles.wordmark} href="/editorial">
          Aomsin’s Editorial
        </Link>
        <Link href="/editorial">All pieces ↗︎</Link>
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
          <span className={styles.articleLabel}>The piece</span>
          <div className={styles.prose}>
            {post.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs.map(renderParagraph)}
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

            {post.poem ? (
              <p className={styles.verse}>
                {post.poem.map((line, index) => (
                  <span key={index}>{line || "\u00a0"}</span>
                ))}
              </p>
            ) : null}

            {post.closing ? (
              <div className={styles.postSignature}>
                <strong>{post.closing.title}</strong>
                <em>{post.closing.subtitle}</em>
              </div>
            ) : null}

            {post.disclaimer ? (
              <p className={styles.disclaimer}>Disclaimer: {post.disclaimer}</p>
            ) : null}
          </div>
          <p className={styles.articleAside}>
            Have a thought? <a href="mailto:jiratnim@gmail.com">Write to me.</a>
          </p>
        </div>
      </article>
    </main>
  );
}
