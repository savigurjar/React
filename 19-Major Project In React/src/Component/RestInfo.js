export default function RestInfo({ restData }) {
    return (
      <>
        <div className="flex flex-col md:flex-row w-full justify-between mb-4 pb-4 border-b border-gray-200">
          {/* Left Content */}
          <div className="md:w-[70%] w-full pr-4">
            <p className="text-xl md:text-2xl text-gray-800 font-bold mb-2">{restData?.name}</p>
  
            <p className="text-lg md:text-xl text-gray-600 mb-1">
              ₹{("defaultPrice" in restData ? restData?.defaultPrice / 100 : restData?.price / 100)}
            </p>
  
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-700 font-medium text-sm md:text-base">
                {restData?.ratings?.aggregatedRating?.rating}
              </span>
              <span className="text-gray-500 text-sm md:text-base">
                ({restData?.ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </div>
  
            <p className="text-sm md:text-base text-gray-600">{restData?.description}</p>
          </div>
  
          {/* Right Image and Button */}
          <div className="md:w-[25%] w-full mt-4 md:mt-0 relative">
            <img
              className="w-full h-40 object-cover rounded-2xl shadow-md"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId
              }
              alt={restData?.name}
            />
            <button className="absolute bottom-2 right-4 md:right-6 rounded-lg text-sm md:text-base font-semibold text-green-600 px-4 py-2 shadow-lg border border-white bg-white hover:bg-green-50 transition-all duration-200">
              ADD
            </button>
          </div>
        </div>
      </>
    );
  }
  