"use client";
import { Employee } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { SalesEmple } from "./component/SalesEmple";
import { Listbox, Tab, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { TablaEmple } from "./component/TablaEmple";
import logoLobito from "@/../public/images/logos/lobito.svg";
import logoBibo from "@/../public/images/logos/bibo.svg";
import logoTragabuches from "@/../public/images/logos/tragabuches.svg";
import logoSmoked from "@/../public/images/logos/smoked.svg";
import logoLena from "@/../public/images/logos/lena.svg";
const restaurante = [
  { id_restaurant: 1, name: "Lena Madrid" },
  { id_restaurant: 2, name: "Lena Marbella" },
  { id_restaurant: 3, name: "Lena Dubai" },
  { id_restaurant: 4, name: "Tragabuches Marbella" },
  { id_restaurant: 5, name: "Tragabuches Madrid" },
  { id_restaurant: 6, name: "BIBO Marbella" },
  { id_restaurant: 7, name: "BIBO Madrid" },
  { id_restaurant: 8, name: "BIBO Tarifa" },
  { id_restaurant: 9, name: "Lobito de Mar Marbella" },
  { id_restaurant: 10, name: "Lobito de Mar Madrid" },
  { id_restaurant: 11, name: "Lobito de Mar La Finca" },
];
const people = [
  { id: 1, name: "Enero" },
  { id: 2, name: "Febrero" },
  { id: 3, name: "Marzo" },
  { id: 4, name: "Abril" },
  { id: 5, name: "Mayo" },
  { id: 6, name: "Junio" },
  { id: 7, name: "Julio" },
  { id: 8, name: "Agosto" },
  { id: 9, name: "Septiembre" },
  { id: 10, name: "Octubre" },
  { id: 11, name: "Noviembre" },
  { id: 12, name: "Diciembre" },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Home() {
  let [selected, setSelected] = useState(0);

  const hoy = new Date();
  const [selectedPerson, setSelectedPerson] = useState(people[hoy.getMonth()]);
  let [categories] = useState([
    {
      title: "Lobito de Mar",
      img: logoLobito,
      restaurant: [
        {
          id: 1,
          name: "Madrid",
        },
        {
          id: 2,
          name: "Marbella",
        },
        {
          id: 11,
          name: "La Finca",
        },
      ],
    },
    {
      title: "Leña",
      img: logoLena,
      restaurant: [
        {
          id: 10,
          name: "Madrid",
        },
        {
          id: 9,
          name: "Marbella",
        },
        {
          id: 8,
          name: "Dubai",
        },
      ],
    },
    ,
    {
      title: "Bibo",
      img: logoBibo,
      restaurant: [
        {
          id: 4,
          name: "Madrid",
        },
        {
          id: 5,
          name: "Marbella",
        },
        {
          id: 3,
          name: "Tarifa",
        },
      ],
    },
    ,
    {
      title: "Smoked Room",
      img: logoSmoked,
      restaurant: [
        {
          id: 13,
          name: "Madrid",
        },
        {
          id: 12,
          name: "Dubai",
        },
      ],
    },
    ,
    {
      title: "Tragabuches",
      img: logoTragabuches,
      restaurant: [
        {
          id: 6,
          name: "Madrid",
        },
        {
          id: 7,
          name: "Marbella",
        },
      ],
    },
  ]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <div className="flex flex-col justify-center">
        <div className="w-full  px-2 py-2 sm:px-0">
          <div className="flex justify-center w-full py-5 mb-16 gap-4 items-center">
            <div>
              {" "}
              <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-main/15 sm:text-sm">
                    <span className="block truncate">
                      {selectedPerson.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      {/* <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      /> */}
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-main/70 text-white" : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {(selectedPerson) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-main">
                                  {/* <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  /> */}
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            {categories.map((category, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelected(idx);
                }}
                className={
                  selected == idx
                    ? "cursor-pointer py-3 px-5 flex justify-center rounded-xl bg-black/[0.12]"
                    : "cursor-pointer py-3 px-5 flex justify-center "
                }
              >
                <Image
                  src={category?.img}
                  alt="logo"
                  className={"h-8 max-w-32 "}
                ></Image>
              </div>
            ))}
          </div>
          <Tab.Group defaultIndex={1}>
            <Tab.List className="flex space-x-1 rounded-xl bg-main/20 p-1">
              {categories[selected]?.restaurant.map((category, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                      "ring-white/60 ring-offset-2 ring-offset-main focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-main shadow"
                        : "text-gray-100 hover:bg-black/[0.12] hover:text-white"
                    )
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {categories[selected]?.restaurant.map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <TablaEmple
                    id={posts.id}
                    selected={selected}
                    month={selectedPerson.id}
                  ></TablaEmple>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
