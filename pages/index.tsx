import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <header>
        <h2 className="py-4 text-4xl font-bold text-center text-white md:mb-10 md:text-5xl">
          Pick
        </h2>
      </header>
      <main className="flex flex-col">
        <Card
          label="Restaurant"
          unsplashID="0uAVsDcyD0M"
          href="/category?type=restaurant"
        />
        <Card
          label="Fast Food"
          unsplashID="VLu9Zef2_tw"
          href="/category?type=fastfood"
        />
      </main>
      <button
        onClick={() => {
          (async () => {
            try {
              await navigator.share({
                title: "Pick",
                text: `What do you want for dinner?\n\n`,
                url: location.href,
              });
            } catch (e) {
              console.log(e);
            }
          })();
        }}
        className="absolute inline-flex items-center p-3 text-white bg-blue-600 border border-transparent rounded-full shadow-sm bottom-4 right-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>
    </>
  );
}
