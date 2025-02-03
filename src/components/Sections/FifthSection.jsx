import Image from "/images/image4.png";
import BooksSlider from "../BooksSlider";

const FifthSection = () => {
  return (
    <section className="space-y-6 bg-third px-5 pt-10 lg:flex lg:flex-row lg:items-center lg:justify-between lg:p-0 ">
      <div className="block lg:hidden">
        <img src={Image} alt="image of books" className="w-full"/>
      </div>
      {/* Info Container for small screen */}
      <div className="space-y-3 lg:hidden">
        <p className="uppercase font-roboto font-medium text-xs pt-3">
          My Bookshelf
        </p>
        <h2>Changing the World One Person at a Time</h2>
        <p>
          It is my clinical experiences that highly motivated me to share my
          ideas through books. Having witnessed the improvement and positive
          changes in so many of my clients' lives, I decided to reach out to as
          many others as possible.
        </p>
      </div>
      {/* Info Container for bigger screens */}
      <div className=" w-7/12 hidden lg:block lg:mx-36">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <p className="uppercase font-roboto font-normal text-xs">
              Anita's Bookshelf
            </p>
            <h2>Changing the World One Person at a Time</h2>
          </div>
        </div>
        <p className="w-full mt-5">
          It is my clinical experiences that highly motivated me to share my
          ideas through books. Having witnessed the improvement and positive
          changes in so many of my clients' lives, I decided to reach out to as
          many others as possible. For one reason or another, we often shy away
          from therapy. We avoid asking for help. However, from time to time we
          all need the little push in the right direction. This was the whole
          intention behind my publications; for my words and ideas to go behind
          the deaf ears of my clinic walls.
        </p>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-stretch lg:w-full">
        <img src={Image} alt="image of books" />
      </div>
    </section>
  );
};

export default FifthSection;
