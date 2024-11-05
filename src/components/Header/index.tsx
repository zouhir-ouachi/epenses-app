import { UserButton } from "@clerk/clerk-react";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b flex h-16 items-center px-4">
      <div>EXPEDIA</div>
      <div className="flex items-center justify-between w-full ml-6">
        <MainNav />
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
