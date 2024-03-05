import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Page() {
  return (
    <div className="w-full max-w-screen-lg h-96 mb-28">
      <GoogleMapsEmbed
        apiKey="AIzaSyDodo5jxKmdXUXC3kXBbq67NgjE7jIs3WQ"
        height="384"
        width="100%"
        mode="place"
        q="Debarcader+Str. Portului, Tulcea 827150"
        zoom="14"
      />
    </div>
  );
}
