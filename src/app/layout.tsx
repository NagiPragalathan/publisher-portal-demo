import "./globals.css";
import Navbar from "@/components/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen bg-black text-white w-full flex-col"
      >
        <div className="flex flex-col items-center h-screen bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('/background_particals/top.png')" }}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
