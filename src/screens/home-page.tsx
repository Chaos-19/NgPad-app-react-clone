import { CategoryColList, CategoryRowList } from "../components";
import { getImgUrl, loadJsonfile } from "../lib/utils";

import webBasics from "../assets/categories/basic";
import angular from "../assets/categories/angular";
import goodToKnow from "../assets/categories/good_to_know";
import NgstateManagement from "../assets/categories/good_to_know";

import useFetchJsonData from "../hooks/fetchJsonData";

interface Props {
  // Define your props here
}
const basePath = "../assets/categories/";

const categoriesUIList = [
  {
    fileName: "categories/basic",
    icon: "assets/main-icons/adv-web-dev.svg",
    title: `Learn the basic of web  development first`,
    column: true,
  },
  {
    fileName: "categories/angular",
    icon: "assets/main-icons/angular-6.svg",
    title: `Learn Angular development`,
    bannerIcon: "assets/angular-poster.svg",
    column: true,
  },
  {
    fileName: "categories/good_to_know",
    icon: "assets/reading.png",
    title: `good to know`,
    column: false,
  },
  {
    fileName: "categories/web",
    icon: "assets/main-icons/state.svg",
    title: "Angular state management",
    column: true,
  },
  {
    fileName: "categories/programming_lang",
    icon: "assets/main-icons/mobile.svg",
    title: "mobile app development with \n angular",
    column: true,
  },
  {
    fileName: "categories/more_programming_lang",
    icon: "assets/main-icons/pie-chart.png",
    title: "working with chart",
    column: false,
  },
  {
    fileName: "categories/advanced_web_development",
    icon: "assets/main-icons/library.svg",
    title: "must learn thrid party libraries",
    column: true,
  },
  {
    fileName: "categories/machine",
    icon: "assets/main-icons/computer.svg",
    title: "development desktop apps with angular\n in electron",
    column: false,
  },
  {
    fileName: "categories/apps_dev",
    icon: "assets/main-icons/debugging.svg",
    title: "testing angular application `",
    column: true,
  },
  {
    fileName: "categories/python_third_party",
    icon: "assets/main-icons/utility.svg",
    title: "utility libraries",
    column: false,
  },
  {
    fileName: "categories/blockchain",
    icon: "assets/main-icons/server-data-repository.svg",
    title: "angular server side rendering",
    column: true,
  },
  {
    fileName: "categories/datascience",
    icon: "assets/main-icons/read.svg",
    title: "angular best practice",
    column: true,
  },
  {
    fileName: "categories/gui",
    icon: "assets/main-icons/toolbox.svg",
    title: "angular tools",
    column: true,
  },
];

function Home() {
  return (
    <div className="w-full flex flex-col">
      {categoriesUIList.slice(0, 1).map((categoryData, index) => (
        <CategoryColList {...categoryData} key={categoryData.fileName} />
      ))}
      <div>
        <img src={getImgUrl("assets/main-icons/ads-free.png")} />
      </div>
      {categoriesUIList
        .slice(1, 5)
        .map((categoryData, index) =>
          categoryData.column ? (
            <CategoryColList {...categoryData} key={categoryData.fileName} />
          ) : (
            <CategoryRowList {...categoryData} key={categoryData.fileName} />
          )
        )}
      <div>
        <img src={getImgUrl("assets/main-icons/ads-free.png")} />
      </div>
      {categoriesUIList
        .slice(5)
        .map((categoryData, index) =>
          categoryData.column ? (
            <CategoryColList {...categoryData} key={categoryData.fileName} />
          ) : (
            <CategoryRowList {...categoryData} key={categoryData.fileName} />
          )
        )}
    </div>
  );
}
export default Home;
