"use client";
import React, { Fragment, useState } from "react";
import { manufacturers } from "@/constants";
import { Combobox } from "@headlessui/react";

const Demo = () => {
  const [selectedPerson, setSelectedPerson] = useState(manufacturers[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? manufacturers
      : manufacturers.filter((car) => {
          return car.toLocaleLowerCase().includes(query.toLocaleLowerCase()); // Fix the variable name here
        });
  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredPeople.map((car) => (
          <Combobox.Option key={car} value={car} as={Fragment}>
            {({ active }) => (
              <li
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {car}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default Demo;
