import LogoContainer from "../LogoContainer";
import CircleBox from "../ui/CircleBox";


const NavBar = ({is_box_opened, toggle_box}) => {
  return (
    <nav className="flex flex-row items-center justify-between w-full px-5 absolute z-10 top-4">
      <LogoContainer />
      <CircleBox is_box_opened={is_box_opened} toggle_box={toggle_box} />
    </nav>
  );
};

export default NavBar;
