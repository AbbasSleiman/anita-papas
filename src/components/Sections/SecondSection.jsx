import ReadMoreBox from "../ui/ReadMoreBox";
const SecondSection = () => {
  return (
    <section className="px-5 space-y-4 md:px-0 ">
      {/* Text Container */}
      <div className="md:flex md:flex-row md:items-center">
        <hr className="hidden border border-primary border-opacity-35 w-full md:block" />
        <div className="md:text-box md:flex md:flex-col md:px-12">
          <p className="">
            It gives me great pleasure to welcome you to this page. I find it a
            wonderful opportunity to be able to reach out to so many people. As
            a clinical psychologist, I listen to the life stories of hundreds of
            people. Every person is special, every journey unique. Some come to
            talk, some come to listen. Some come for a safe place to talk about
            painful things, some come to learn new ways of being. All come
            hoping to feel better in some way…. Most feel better just taking the
            first step…
            <p className="md:hidden">
              As a clinical psychologist and the author of self help books, I
              firmly believe that the most important person in your life is
              “You”. It is YOU who chooses the life YOU wish to live. You are
              the architect of your own life. While outer circumstances do have
              their influences on us, it is you who decides how well you will
              take life's challenges.
            </p>
          </p>
          <ReadMoreBox text={"Read more"} class_name={"relative top-8"} />
        </div>
        <hr className="hidden border border-primary border-opacity-35 w-full md:block" />
      </div>
    </section>
  );
};

export default SecondSection;
