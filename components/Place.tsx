export interface PlaceProps {
  label: string;
  brandColor: string;
  type: "fastfood" | "restaurant" | "both";
  url: string;
  show?: () => boolean;
}

export default function Place({ label, brandColor, url }: PlaceProps) {
  return (
    <button
      onClick={() => {
        (async () => {
          try {
            await navigator.share({
              title: "Pick",
              text: `Wanna go to ${label} for dinner?\n\n`,
              url,
            });
          } catch (e) {
            window.open(url, "_blank");
          }
        })();
      }}
      className="px-4 py-10 pb-4"
      style={{ backgroundColor: brandColor }}
    >
      <h2 className="text-4xl font-semibold text-left text-white md:text-3xl">
        {label}
      </h2>
    </button>
  );
}
