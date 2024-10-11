import { Input } from "./ui/input";

export default function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:wp[100px] lg:w-[300px]"
      />
    </div>
  );
}
