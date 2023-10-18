"use client";
import React, { Fragment, useState } from "react";
import { manufacturers } from "@/constants";
import { Combobox } from "@headlessui/react";
import { SearchManufacturer } from ".";

const SearcBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearcBar;
