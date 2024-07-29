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
    fileName: "basic",
    icon: "assets/main-icons/adv-web-dev.svg",
    title: `Learn the basic of web  development first`,
    column: true,
  },
  {
    fileName: "angular",
    icon: "assets/main-icons/angular-6.svg",
    title: `Learn Angular development`,
    column: true,
  },
  {
    fileName: "good_to_know",
    icon: "assets/reading.png",
    title: `good to know`,
    column: false,
  },
  {
    fileName: "web",
    icon: "assets/main-icons/state.svg",
    title: "Angular state management",
    column: true,
  },
  {
    fileName: "programming_lang",
    icon: "assets/main-icons/mobile.svg",
    title: "mobile app development with \n angular",
    column: true,
  },
  {
    fileName: "more_programming_lang",
    icon: "assets/main-icons/pie-chart.png",
    title: "working with chart",
    column: false,
  },
  {
    fileName: "advanced_web_development",
    icon: "assets/main-icons/library.svg",
    title: "must learn thrid party libraries",
    column: true,
  },
  {
    fileName: "machine",
    icon: "assets/main-icons/computer.svg",
    title: "development desktop apps with angular\n in electron",
    column: false,
  },
  {
    fileName: "apps_dev",
    icon: "assets/main-icons/debugging.svg",
    title: "testing angular application `",
    column: true,
  },
  {
    fileName: "python_third_party",
    icon: "assets/main-icons/utility.svg",
    title: "utility libraries",
    column: false,
  },
  {
    fileName: "blockchain",
    icon: "assets/main-icons/server-data-repository.svg",
    title: "angular server side rendering",
    column: true,
  },
  {
    fileName: "datascience",
    icon: "assets/main-icons/read.svg",
    title: "angular best practice",
    column: true,
  },
  {
    fileName: "gui",
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
