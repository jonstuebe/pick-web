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
    </main>
  );
}
