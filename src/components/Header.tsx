import MainNav from "./MainNav";
import Search from "./Search";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>EXPEDIA</div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
