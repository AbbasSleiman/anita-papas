import LogoWhite from "/images/Logo-White.png";

const LogoContainer = () => {
  return (
    <div className="flex flex-col items-start w-56">
      <img
        src={LogoWhite}
        alt="Author Image"
        className="object-contain w-full p-2"
      />
    </div>
  );
};

export default LogoContainer;
