// Helpers
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>

      <Link href="/contactPage">catre pagina de contact</Link>
    </main>
  );
};

export default HomePage;
