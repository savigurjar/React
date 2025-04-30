export default function GrocerCard({ fooddata }) {
  return (
    <>
      <div className="flex flex-col">
      <a href={fooddata?.action?.link}>
        {" "}
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${fooddata.imageId}`}
          alt={fooddata.name}
          className="w-40 h-50 object-cover"
        />
      </a>
      <h1 className="mt-5">{fooddata?.action?.text}</h1>
      </div>
    </>
  );
}
