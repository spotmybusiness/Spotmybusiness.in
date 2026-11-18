import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProviderReference } from "@/lib/business";
import { getAllBlogPostSlugs, getBlogPostBySlug } from "@/lib/blog";
import AiSearchOptimizationGeoVsAeoVsSeoPost from "@/app/blog/posts/AiSearchOptimizationGeoVsAeoVsSeoPost";
import LocalSeoStrategyIndiaPost from "@/app/blog/posts/LocalSeoStrategyIndiaPost";
import GoogleMapsSeoStorefrontVsSabPost from "@/app/blog/posts/GoogleMapsSeoStorefrontVsSabPost";
import GbpOptimizationChecklistPost from "@/app/blog/posts/GbpOptimizationChecklistPost";
import KolkataGbpNoCallsPost from "@/app/blog/posts/KolkataGbpNoCallsPost";

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
          url: `https://www.spotmybusiness.in${post.heroImage}`,
          width: 1200,
          height: 675,
          alt: post.heroImageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://www.spotmybusiness.in/blog/${post.slug}`;

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
    <main className="bg-primary-bg text-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {post.slug === "ai-search-optimization-geo-vs-aeo-vs-seo" ? (
        <AiSearchOptimizationGeoVsAeoVsSeoPost post={post} />
      ) : post.slug === "local-seo-strategy-kolkata-indian-businesses" ? (
        <LocalSeoStrategyIndiaPost post={post} />
      ) : post.slug === "google-maps-seo-service-area-businesses" ? (
        <GoogleMapsSeoStorefrontVsSabPost post={post} />
      ) : post.slug === "google-business-profile-optimization-checklist" ? (
        <GbpOptimizationChecklistPost post={post} />
      ) : (
        <KolkataGbpNoCallsPost post={post} />
      )}
    </main>
  );
}
