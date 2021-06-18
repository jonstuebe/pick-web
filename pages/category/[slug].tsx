import Link from "next/link";
import Error from "next/error";
import { useRouter } from "next/router";
import Place, { PlaceProps } from "../../components/Place";

import type { CategoryType } from "../../types";

import places from "../../places";
import { useMemo } from "react";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;
  const type = router.query.type ?? "fastfood";

  if (!slug) return null;
  if (!places[slug as CategoryType]) {
    return <Error statusCode={404} />;
  }

  const filteredPlaces = useMemo(
    () =>
      places[slug as CategoryType].filter(
        ({ type: placeType, show = () => true }) =>
          (placeType === type || placeType === "both") && show() === true
      ),
    [places, slug, type]
  );

  return (
    <main className="flex flex-col">
      {filteredPlaces.length === 0 ? (
        <div className="py-10">
          <h2 className="text-3xl font-semibold text-center text-white">
            No Places Found
          </h2>
        </div>
      ) : (
        filteredPlaces.map((place, idx) => <Place {...place} key={idx} />)
      )}
      <Link
        passHref
        href={`/category/${slug}?type=${
          type === "fastfood" ? "restaurant" : "fastfood"
        }`}
      >
        <a className="absolute inline-flex items-center p-3 text-white bg-blue-600 border border-transparent rounded-full shadow-sm bottom-4 right-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
  );
}
