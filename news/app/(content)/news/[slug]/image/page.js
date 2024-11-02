// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const param = await params;
  const newsItemSlug = param.slug;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <h2>HELLO</h2>
      <h2>{newsItem.title}</h2>
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={730}
        height={600}
      />
    </div>
  );
}
