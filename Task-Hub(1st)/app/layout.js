import "./globals.css";

export const metadata = {
  title: "Task Management",
  description: "App to manage tasks in an enterprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F4F6F8]">{children}</body>
    </html>
  );
}
