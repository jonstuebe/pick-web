import { useRouter } from "next/router";
import Card from "../../components/Card";

export default function Categories() {
  const router = useRouter();
  const type = router.query.type ?? "fastfood";

  return (
    <>
      <header className="relative">
        <button
          onClick={() => router.back()}
          className="absolute visible p-2 text-white top-3 left-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="py-4 text-2xl font-bold text-center text-white md:text-3xl">
          Categories
        </h2>
      </header>
      <main className="grid grid-cols-1 gap-0 md:max-w-5xl md:my-0 md:mx-auto md:grid-cols-2">
        <Card
          label="Mexican"
          href={`/category/mexican?type=${type}`}
          unsplashID="z_PfaGzeN9E"
        />
        <Card
          label="Italian"
          href={`/category/italian?type=${type}`}
          unsplashID="KxcYYoJZehI"
        />
        <Card
          label="American"
          href={`/category/american?type=${type}`}
          unsplashID="FlmXvqlD-nI"
        />
        <Card
          label="Chinese"
          href={`/category/chinese?type=${type}`}
          unsplashID="jFu2L04tMBc"
        />
        <Card
          label="Vietnamese"
          href={`/category/vietnamese?type=${type}`}
          unsplashID="0BhsN70JVA8"
        />
        <Card
          label="Thai"
          href={`/category/thai?type=${type}`}
          unsplashID="XoByiBymX20"
        />
        <Card
          label="Barbecue"
          href={`/category/barbecue?type=${type}`}
          unsplashID="cpkPJ-U9eUM"
        />
        <Card
          label="Mediterranean"
          href={`/category/mediterranean?type=${type}`}
          unsplashID="C1fMH2Vej8A"
        />
        <Card
          label="Sandwiches"
          href={`/category/sandwiches?type=${type}`}
          unsplashID="uhJfaJ6c9fY"
        />
        <Card
          label="Salad"
          href={`/category/salad?type=${type}`}
          unsplashID="2RrBE90w0T8"
        />
      </main>
    </>
  );
}
