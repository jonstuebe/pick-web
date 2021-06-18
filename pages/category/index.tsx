import { useRouter } from "next/router";
import Card from "../../components/Card";

export default function Categories() {
  const router = useRouter();
  const type = router.query.type ?? "fastfood";

  return (
    <main className="flex flex-col">
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
        label="Korean BBQ"
        href={`/category/korean-bbq?type=${type}`}
        unsplashID="4f4YZfDMLeU"
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
  );
}
