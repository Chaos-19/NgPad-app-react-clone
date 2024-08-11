import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/layout";
import NestedContentDetail from "./screens/nested-content-detail";
import DetailContentLayout from "./screens/detail-content-layout";
import DetailContent from "./components/detail-content";

import NestedCourseContent from "./components/nested-course-content";
import CoursePage from "./screens/course-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "course/content/:slug",
    element: <DetailContentLayout />,
    children: [],
  },
  {
    path: "course/content/:slug/nested_content/:slug",
    element: <DetailContent />,
  },
  {
    path: "course/content/:slug/nested_content/:slug/content",
    element: <NestedContentDetail />,
  },
  {
    path: "course/content/:slug/nested_content/:slug/content/detail-content/:slug",
    element: <CoursePage />,
  },
  {
    path: "course/content/:slug/detail-content/:slug",
    element: <CoursePage />,
  },
]);

function App() {
  return (
    <main className="flex w-screen h-dvh">
      <div className="flex-1 grow w-full h-full">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
