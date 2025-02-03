import ReadMoreBox from "./ui/ReadMoreBox";

const InfoContainer = ({
  title,
  title_large,
  text,
  paragraph,
  paragraph_small,
}) => {
  return (
    <div className="space-y-3">
      <p className="uppercase font-roboto font-medium text-xs pt-3">{text}</p>
      <h2 className="block md:hidden">{title}</h2>
      <h2 className="hidden md:block">{title_large}</h2>
      <p className="block md:hidden">{paragraph}</p>
      <p className="hidden md:block">{paragraph_small}</p>
      <ReadMoreBox text={"Learn more"} />
    </div>
  );
};

export default InfoContainer;
