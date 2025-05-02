export default function Shimmer() {
    return (
      <div className="flex flex-wrap w-[80%] mx-auto gap-5 mt-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-[280px] animate-pulse">
            <div className="w-full h-40 rounded-xl bg-gray-300"></div>
            <div className="mt-3 space-y-2">
              <div className="w-full h-5 bg-gray-400 rounded"></div>
              <div className="w-3/4 h-5 bg-gray-400 rounded"></div>
              <div className="w-1/2 h-5 bg-gray-400 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  