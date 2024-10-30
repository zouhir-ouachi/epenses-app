import MainNav from "./MainNav";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <div className="border-b flex h-16 items-center px-4">
      <div>EXPEDIA</div>
      <div className="flex items-center justify-between w-full ml-6">
        <MainNav />
        <UserNav />
      </div>
    </div>
  );
};

export default Header;
