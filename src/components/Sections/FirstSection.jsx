import NavBar from "../ui/NavBar";
import MenuBox from "../ui/MenuBox";

import { useState } from "react";

const FirstSection = () => {
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  // toggle function to switch the state
  const toggleBox = () => {
    setIsBoxOpened((prev) => !prev);
  };

  return (
    <section className="flex flex-col md:flex-row">
      <NavBar toggle_box={toggleBox} is_box_opened={isBoxOpened} />
      <MenuBox is_box_opened={isBoxOpened} toggle_box={toggleBox} />

      <div className="md:flex flex-row gap-20 items-center justify-center">
        <div className="image-container flex flex-col items-center justify-between h-screen bg-cover bg-center pt-2 md:w-10/12"></div>
        {/* Header container */}
        <div className="flex flex-row gap-10 w-3/4 mt-20 m-auto absolute top-96 right-10 md:static md:w-2/4 md:m-0 md:">
          <div>
            <hr className="vertical-line border-secondary md:border-primary" />
          </div>
          <h1 className="text-secondary md:text-primary">
            There is nothing more important than you taking back control of your
            life.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
