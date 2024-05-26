import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full bg-gray-800 text-white"
        placeholder="Search.."
      />
      <button type="submit" className="btn btn-circle bg-gray-800 text-white hover:text-black">
        <IoSearchSharp className="w-6 h-6 outline-none"/>
      </button>
    </form>
  );
};

export default SearchInput;
