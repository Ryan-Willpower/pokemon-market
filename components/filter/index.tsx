import Image from "next/image"
import { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"

import arrowDownIcon from "../../public/icons/arrow-down.svg"

import type { FilterProps } from "./type"

export enum FilterDropdownPosition {
  Left = "left",
  Right = "right",
}

export function Filter({
  name,
  data,
  position = FilterDropdownPosition.Left,
  onUpdateFilter,
}: FilterProps) {
  const [selectedFilter, setFilter] = useState<string>()

  const handleFilterChange = (item: string) => {
    setFilter(item)
    onUpdateFilter(item)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          type="button"
          className="flex bg-steel-gray p-3 rounded-lg border border-bright-gray"
          id={`filter-${name}`}
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span className="pr-2">{selectedFilter || name}</span>
          <Image src={arrowDownIcon} width={20} height={20} alt="arrow" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${
            position === FilterDropdownPosition.Left
              ? "origin-top-left left-0"
              : "origin-top-right right-0"
          } absolute z-10 bg-steel-gray border border-bright-gray text-white rounded-lg overflow-hidden max-h-32 w-52 overflow-y-scroll flex flex-col mt-3`}
        >
          {data.map(item => (
            <Menu.Item key={item}>
              <span
                className="cursor-pointer font-poppins border border-bright-gray p-3"
                onClick={() => handleFilterChange(item)}
              >
                {item}
              </span>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
