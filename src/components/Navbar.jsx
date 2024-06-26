"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSuitcaseBold } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { PiHandCoinsBold } from "react-icons/pi";

export default function Navbar() {
    const [dropdown, setDropdown] = React.useState(false)
    const [isActive, setIsActive] = React.useState(-1)

    const menus = [
        { title: "Jobs", path: "#", icon: <PiSuitcaseBold/> },
        { title: "Messages", path: "#", icon: <FiMessageSquare/> },
        { title: "Payments", path: "#", icon: <PiHandCoinsBold/> },
    ]

    return (
        <nav className="bg-white w-full border-b md:border-0 z-50">
            <div className="items-center justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-xl font-bold bg-gray-200 px-3 py-2 text-red-500">Logo</h1>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-[#5D5D5D] outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setDropdown(!dropdown)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div
                    className={` flex-grow justify-center md:block md:flex-grow-0 ${dropdown ? "block" : "hidden"
                        }`}
                >
                    <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0 py-2 px-7 gap-5 border rounded-full">
                        {menus.map((item, idx) => (
                            <li
                                key={idx}
                                className={`flex gap-2 items-center justify-center  ${idx === isActive ? 'bg-red-500 text-white' : 'text-[#5D5D5D]'
                                } px-5 py-3 rounded-full `}
                                onClick={() => setIsActive(idx)}
                                >
                                {item.icon}
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex gap-2 items-center justify-center">
                    <Avatar>
  <AvatarImage src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJouUZ-6bZd7TC0fscphGWy39ykXdeZtt5SyEaWmEzIN1bVCuC" />
  <AvatarFallback>wait</AvatarFallback>
</Avatar>
  <IoMdArrowDropdown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}