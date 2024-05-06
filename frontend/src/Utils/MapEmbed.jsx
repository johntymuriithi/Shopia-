import { useState } from "react";

const MapEmbed = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-400px sm:h-[300px] relative">
      {/* Loader Skeleton */}
      {!loaded && (
        <div className="w-full h-full flex flex-col justify-center items-center text-center absolute top-0 left-0 bg-white z-10 p-11">
          <img src="map-pin.png" alt="Map" className="animate-spin" />
          <p className="text-sm mt-5">Loading Map data...</p>
        </div>
      )}

      {/* Map Iframe */}
      <iframe
        className="w-full h-[400px] sm:h-[300px]"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Benin City, Edo State, Nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        onLoad={() => setLoaded(!loaded)}
      ></iframe>
    </div>
  );
};

export default MapEmbed;
