import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import ModeToggle from "./mode-toggle";

import { navDraweLinks } from "../constants/tabs";

import topImg from "../assets/drawer_header.jpg";

const NavigationDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} className="font-black text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <ScrollArea className="w-full">
          <div className="w-full h-[calc(100hv_-_10px)] pb-20">
            <img src={topImg} />
            <div className="pl-3 pt-3">
              <ul className="flex flex-col gap-4">
                {navDraweLinks.map((item, index) => (
                  <li key={item.title} className="py-1.5">
                    <Link
                      to=""
                      className="flex items-center gap-3 capitalize text-base px-2"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <div className="py-2 border-y border-border">
                  <span className="font-medium text-lg">setting</span>
                </div>

                <div className="py-2 flex items-center gap-5">
                  <span>change theme</span>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationDrawer;
