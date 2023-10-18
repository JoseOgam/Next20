"use client";
import React, { Fragment, useState } from "react";
import { manufacturers } from "@/constants";
import { Combobox } from "@headlessui/react";
import { SearchManufacturer } from ".";

const SearcBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  // const [query, setQuery] = useState("");
  const handleSearch = () => {};

  // const filteredPeople =
  //   query === ""
  //     ? manufacturers
  //     : manufacturers.filter((car) => {
  //         return car.toLocaleLowerCase().includes(query.toLocaleLowerCase()); // Fix the variable name here
  //       });
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
    // <Combobox value={selectedPerson} onChange={setSelectedPerson}>
    //   <Combobox.Input
    //     onChange={(event) => setQuery(event.target.value)}
    //     className="appearance-none block  bg-gray-200
    //      text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
    //       focus:outline-none focus:bg-white focus:border-gray-500"
    //   />
    //   <Combobox.Options>
    //     {filteredPeople.map((car) => (
    //       <Combobox.Option key={car} value={car} as={Fragment}>
    //         {({ active }) => (
    //           <li
    //             className={`${
    //               active ? "bg-blue-500 text-white" : "bg-white text-black"
    //             }`}
    //           >
    //             {car}
    //           </li>
    //         )}
    //       </Combobox.Option>
    //     ))}
    //   </Combobox.Options>
    // </Combobox>
  );
};

export default SearcBar;
