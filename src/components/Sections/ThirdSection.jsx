import Image from "/images/image2.png";
import ReadMoreBox from "../ui/ReadMoreBox";
import InfoContainer from "../InfoContainer";

const ThirdSection = () => {
  return (
    <section className="flex flex-col gap-4 items-start px-5 md:flex-row md:px-0 md:items-center md:h-96 xl:h-11/12">
      {/* Image container */}
      <div className="block md:hidden ">
        <img src={Image} alt="image of a room" />
      </div>

      <div className="space-y-4 border-t-8 border-dark bg-secondary w-11/12 relative bottom-10 md:border-t-0 md:border-l-8 md:flex md:flex-row md:p-4 md:relative md:left-24 md:top-1 xl:w-4/12 ">
        <InfoContainer
          title={"Step Into Positivity"}
          title_large={"Mental Health First"}
          text={"Clinical Services"}
          paragraph={
            "At various stages and points in life, there are obstacles or challenges that arise. You may feel anxious or at a low and this can have a negative effect on your day to day life, influencing your thoughts, behaviors, relationships with others and of course your performance at work. We all have problems.That is just one of the facts of life, but when those problems become too serious, too overwhelming or simply too distressing, it's time to seek professional help."
          }
          paragraph_small={
            "At various stages and points in life, there are obstacles or challenges that arise. You may feel anxious or low spirited and this can have a negative effect on your day-to-day life, influencing your thoughts, behaviors, relationships with others and of course your performance at work. "
          }
        />
      </div>
      <div className="hidden md:block md:h-full md:w-8/12 xl:w-8/12">
        <img
          src={Image}
          alt="image of a room"
          className="md:h-full md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ThirdSection;
