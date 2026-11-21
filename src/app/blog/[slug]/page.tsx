import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProviderReference } from "@/lib/business";
import {
  getAllBlogPostSlugs,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog";
import { blogPostRegistry } from "@/app/blog/posts/registry";
import SocialShareBar from "@/components/blog/SocialShareBar";
import RelatedArticlesSection from "@/components/blog/RelatedArticlesSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Spot My Business",
    };
  }

  const canonicalUrl = `https://www.spotmybusiness.in/blog/${post.slug}`;
  const absoluteImageUrl = `https://www.spotmybusiness.in${post.heroImage}`;

  return {
    title: {
      absolute: post.metaTitle,
    },
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Spot My Business",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author.name],
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 675,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@spotmybusinesss",
      creator: "@spotmybusinesss",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [absoluteImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const PostComponent = blogPostRegistry[post.slug];

  if (!PostComponent) {
    notFound();
  }

  const canonicalUrl = `https://www.spotmybusiness.in/blog/${post.slug}`;
  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.spotmybusiness.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.spotmybusiness.in/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        headline: post.title,
        description: post.metaDescription,
        url: canonicalUrl,
        datePublished: `${post.publishDate}T09:00:00+05:30`,
        dateModified: `${post.modifiedDate}T18:00:00+05:30`,
        mainEntityOfPage: canonicalUrl,
        image: [
          {
            "@type": "ImageObject",
            url: `https://www.spotmybusiness.in${post.heroImage}`,
            width: 1200,
            height: 675,
          },
          ...post.secondaryImages.map((img) => ({
            "@type": "ImageObject",
            url: `https://www.spotmybusiness.in${img}`,
          })),
        ],
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          url: "https://www.spotmybusiness.in/about#team",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: post.author.qualification,
          },
          sameAs: [post.author.linkedin],
        },
        publisher: getProviderReference(),
      },
    ],
  };

  return (
    <main className="blog-editorial bg-primary-bg text-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <PostComponent post={post} />

      <SocialShareBar title={post.title} url={canonicalUrl} />

      <RelatedArticlesSection posts={relatedPosts} />
    </main>
  );
}
