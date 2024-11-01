"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ImagePage({ params }) {
  const router = useRouter();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        const param = await params;
        const newsItemSlug = param.slug;

        const foundNewsItem = DUMMY_NEWS.find(
          (item) => item.slug === newsItemSlug
        );

        if (!foundNewsItem) {
          notFound();
        } else {
          setNewsItem(foundNewsItem);
        }
      }
      fetchData();
    },
    [params]
  );

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <h2>{newsItem?.title}</h2>
          <Image
            src={`/images/news/${newsItem?.image}`}
            alt={newsItem?.title}
            width={730}
            height={600}
          />
        </div>
      </dialog>
    </>
  );
}
