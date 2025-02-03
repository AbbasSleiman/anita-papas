import Image from "/images/image5.png";
import Image2 from "/images/image3.png";
import InfoContainer from "../InfoContainer";

const FourthSection = () => {
  return (
    <section className="flex flex-col space-y-20 bg-third px-5 py-12 items-center md:flex md:flex-row md:gap-12 md:px-24 lg:justify-evenly lg:pb-32">
      {/*Outer Image Container */}
      <div className="border border-primary border-opacity-45 w-72 md:hidden ">
        <div className="relative top-10 left-8">
          <img
            src={Image}
            alt="image of a concert room"
            className="object-contain w-72 h-80 block md:hidden"
          />
        </div>
      </div>

      {/*Outer Image Container for Bigger devices*/}

      <div className="border border-primary border-opacity-45 hidden md:block md:w-96">
        <div className="relative top-10 left-8 ">
          <img
            src={Image2}
            alt="image of a speech"
            className="hidden md:block md:object-contain "
          />
        </div>
      </div>

      <div className="sm:w-10/12 p-2 lg:w-6/12">
        <InfoContainer
          title={"Manifest Together"}
          title_large={"Captivating Audiences"}
          text={"Workshops & Seminars"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
          paragraph_small={
            "My passion for sharing my knowledge led me from clinical services to publishing books and eventually to reaching wider audiences. I started spreading positivity across different age groups, different settings, backgrounds across the world. I could never refuse an invitation to a school, a university, welfare organization, hospital staff, bank employees or insurance company members. Tv appearances, and radio interviews were the bigger challenge, Arabic being my third language, I found it somewhat more difficult to convey my message. "
          }
        />
      </div>
    </section>
  );
};

export default FourthSection;
