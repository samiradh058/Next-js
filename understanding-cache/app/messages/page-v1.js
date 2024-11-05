// import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";

// If many components need to fetch the data (configure for the entire file)
// export const revalidate = 5;

// Always refetch data and route paths
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // unstable_noStore();

  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: {
  //     'X-ID': 'page',
  //   },
  // });

  // const response = await fetch("http://localhost:8080/messages", {
  //   cache: "no-store",
  // });

  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     revalidate: 5, // revalidate cache after 5 seconds
  //   },
  // });

  // const response = await fetch("http://localhost:8080/messages");

  const response = await fetch("http://localhost:8080/messages", {
    next: { tags: ["msg"] },
  });

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
