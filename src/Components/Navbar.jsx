import React from "react";
const liStyle =
  "hover:cursor-pointer hover:underline underline-offset-4 transition ";
function Navbar() {
  return (
    <div className="h-17 flex justify-between pl-[8rem] pr-[8rem] bg-primary text-white items-center">
      <div>
        <h1 className="font-bold text-[2rem]">./AN</h1>
      </div>
      <div className="flex gap-4 items-center text-[0.9rem]">
        <div>
          <ul className="flex gap-8 border border-primary border-r-gray-500 pr-4 text-[0.9rem]">
            <li className={liStyle}>About</li>
            <li className={liStyle}>Work</li>
            <li className={liStyle}>Testimonial</li>
            <li className={liStyle}>Contact</li>
          </ul>
        </div>

        <div>icon</div>
        <div>
          <button className="bg-white text-primary pt-2 pb-2 pl-3 pr-3 rounded text-[0.9rem] border border-primary hover:border-white hover:bg-primary hover:text-white">
            Download Cv
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
