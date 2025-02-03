import LinesImage from "/images/Combined-Shape.png";
import CloseImage from "/images/Close.png";

const CircleBox = ({toggle_box, is_box_opened, class_name}) => {
  return (
    <div className={`flex flex-col items-center justify-center rounded-full bg-secondary w-8 h-8 shadow-xl cursor-pointer ${class_name}`}>
      <img
        src={LinesImage}
        alt="lines"
        className={`${!is_box_opened ? "block" : "hidden"} w-4 object-cover`}
        onClick={toggle_box}
      />
      <img
        src={CloseImage}
        alt="close"
        className={`${is_box_opened ? "block" : "hidden"} w-3 object-contain`}
        onClick={toggle_box}
      />
    </div>
  );
};

export default CircleBox;
