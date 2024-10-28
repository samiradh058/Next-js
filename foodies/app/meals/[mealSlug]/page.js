// export default async function MealDetailsPage({ params }) {
//   const { mealSlug } = await params;
//   return <h1>It is single meal page {mealSlug}</h1>;
// }

import { getMeal } from "@/lib/meals";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// For metadata of dynamic pages
// Metadata is read first before rendering page
export async function generateMetadata({ params }) {
  const param = await params;
  const meal = await getMeal(param.mealSlug);
  if (!meal) {
    // Show the closest not found
    notFound();
  }
  return { title: meal.title, description: meal.summary };
}

export default async function MealDetailsPage({ params }) {
  //mealSlug is key and the URL param is value
  const param = await params;
  const meal = getMeal(param.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
