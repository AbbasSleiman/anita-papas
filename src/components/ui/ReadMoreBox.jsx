import Path from "/images/Path.png";

const ReadMoreBox = ({ text, class_name }) => {
  return (
    <div className={`flex flex-row items-center gap-4  ${class_name}`}>
      <div className="rounded-full border-2 border-primary w-fit h-fit p-3 md:p-2 md:border-opacity-45">
        <img
          src={Path}
          alt="arrow path"
          className={`w-3 h-3 object-contain md:w-2 md:h-2 `}
        />
      </div>
      <span className="utility-text inline">{text}</span>
    </div>
  );
};

export default ReadMoreBox;
