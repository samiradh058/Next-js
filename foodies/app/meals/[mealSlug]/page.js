export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  return <h1>It is single meal page {mealSlug}</h1>;
}
