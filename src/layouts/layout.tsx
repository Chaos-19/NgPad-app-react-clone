import React, { useState, useContext } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Lottie from 'lottie-react';

import { Navbar, NavigationDrawer } from '../components';
import { ApplicationContext } from '../context/app-context';

import { TABS } from '../constants/tabs';
import Home from '../screens/home-page';
import java from '../assets/tuts.json';

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  const { currentTab, setCurrentTab } = useContext(ApplicationContext);

  const handleChange = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <section className="w-full flex h-full">
      <div className="w-full flex flex-col flex-1">
        <Navbar>
          <NavigationDrawer />
        </Navbar>
        <div className="w-full grow">
          <Tabs
            defaultValue="home"
            value={currentTab}
            className="w-full h-full flex flex-col"
            onValueChange={handleChange}
          >
            <ScrollArea className="bg-[#092032] w-full rounded-none text-white">
              <TabsList className="bg-[#092032] w-full rounded-none text-white pl-32 overflow-x-scroll w-[100vw] import!:py-0 no-scrollbar">
                {TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.title}
                    value={tab.title}
                    className="capitalize my-0 data-[state=active]:rounded-none"
                  >
                    {tab.pageName}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
            <ScrollArea className="flex grow m-0">
              <div className="h-[650px] no-scrollbar">
                {TABS.map((tab) => (
                  <TabsContent
                    key={tab.title}
                    value={tab.title}
                    className="w-full grow m-0"
                  >
                    {tab.component}
                  </TabsContent>
                ))}
              </div>
            </ScrollArea>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
export default AppLayout;
