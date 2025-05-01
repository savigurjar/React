export default function DineCard({ RestData }) {
  return (
    <>
      <div className="max-w-sm flex-none">
        <a href={RestData?.cta?.link} target="_blank">
          <div className="relative">
            <img
              className="w-80 h-50 object-cover rounded-2xl"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${RestData?.info?.mediaFiles[0]?.url}`}
              alt={RestData?.info?.name}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/100 to-transparent z-10" />
            <p className="absolute bottom-4 left-4 text-2xl text-white font-bold z-20">
              {RestData?.info?.name}
            </p>
            <p className="absolute bottom-4 right-4 text-2xl text-white z-20">
              {RestData?.info?.rating?.value}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
