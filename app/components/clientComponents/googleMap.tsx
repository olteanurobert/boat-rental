// Google maps embed
import { GoogleMapsEmbed } from "@next/third-parties/google";

const GoogleMap = () => {
  return (
    <div className="w-full max-w-screen-lg h-96 mb-28">
      <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS_API_KEY!}
        height="384"
        width="100%"
        mode="place"
        q="Debarcader+Str. Portului, Tulcea 827150"
        zoom="14"
      />
    </div>
  );
};

export default GoogleMap;
