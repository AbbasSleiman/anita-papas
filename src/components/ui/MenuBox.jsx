import CircleBox from "./CircleBox";

import { Link } from "react-router-dom";

const MenuBox = ({ is_box_opened, toggle_box }) => {
  return (
    <div
      className={`${is_box_opened ? "flex" : "hidden"} flex-col items-center justify-center h-screen w-full bg-secondary px-3 absolute z-10 md:h-96 shadow-xl`}
    >
      <CircleBox is_box_opened={is_box_opened} toggle_box={toggle_box} class_name={"absolute top-4 right-3 z-10 md:top-6 md:right-6 lg:right-10"}/>
      <ul className="space-y-5 text-center">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Meet Anita</Link>
        </li>
        <li>
          <Link>Clinical Services</Link>
        </li>
        <li>
          <Link>Workshops & Seminars</Link>
        </li>
        <li>
          <Link>Anita's Bookshelf</Link>
        </li>
        <li>
          <Link>Contact me</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBox;
