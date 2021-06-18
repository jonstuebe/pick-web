import Link from "next/link";
import { useRouter } from "next/router";
import Place from "../../components/Place";

import type { CategoryType } from "../../types";

import places from "../../places";
import { useMemo } from "react";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;
  const type = router.query.type ?? "fastfood";

  const filteredPlaces = useMemo(() => {
    if (!slug) return [];
    if (!places[slug as CategoryType]) return [];

    return places[slug as CategoryType].filter(
      ({ type: placeType, show = () => true }) => {
        return (placeType === type || placeType === "both") && show() === true;
      }
    );
  }, [places, slug, type]);

  if (!slug) return null;

  return (
    <>
      <header className="relative">
        <Link passHref href={`/category?type=${type}`}>
          <a className="absolute p-2 text-white md:invisible top-3 left-2">
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
          </a>
        </Link>
        <h2 className="py-4 text-2xl font-bold text-center text-white md:text-3xl">
          {type === "fastfood" ? "Fast Food" : "Restaurants"}
        </h2>
      </header>
      <main className="md:max-w-5xl md:my-0 md:mx-auto">
        {filteredPlaces.length === 0 ? (
          <div className="flex flex-col items-center py-10">
            <h2 className="mb-4 text-3xl font-semibold text-center text-white">
              No Places Found
            </h2>

            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-8 py-3 text-white bg-gray-600 border border-transparent rounded-full shadow-sm bottom-4 right-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Back
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
            {filteredPlaces.map((place, idx) => (
              <Place {...place} key={idx} />
            ))}
          </div>
        )}
        <Link
          passHref
          href={`/category/${slug}?type=${
            type === "fastfood" ? "restaurant" : "fastfood"
          }`}
          replace
        >
          <a className="fixed inline-flex items-center p-3 text-white bg-gray-600 border border-transparent rounded-full shadow-sm bottom-4 right-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <h4 className="pr-2">
              {type === "fastfood" ? "Fast Food" : "Restaurant"}
            </h4>
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
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </a>
        </Link>
      </main>
    </>
  );
}
