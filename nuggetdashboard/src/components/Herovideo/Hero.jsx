import IndexPicture from "../../assets/image_.png";

function HeroComponent() {
  return (
    <div className="relative">
      <img
        src={IndexPicture}
        alt="Description of the image"
        className="w-full max-h-[700px] object-cover"
      />
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl! font-bold text-white font-serif ">
        Global Index
      </h2>
    </div>
  );
}

export default HeroComponent;
