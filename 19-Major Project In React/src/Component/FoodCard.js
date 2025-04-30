export default function FoodCard({ fooddata }) {
  return (
    <>
    <a href={fooddata?.action?.link}> <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${fooddata.imageId}`}
        alt={fooddata.name}
        className="w-40 h-50 object-cover"
      /></a>
    </>
  );
}
