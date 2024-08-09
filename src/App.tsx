import AppLayout from "./layouts/layout";
import DetailContentLayout from "./screens/detail-content-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailContent from "./components/detail-content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "course/content/:slug",
    element: <DetailContentLayout />,
    children: [
      {
        path: "nested_content/:slug",
        element: <DetailContentLayout />,
      },
      {
        path: "detail-content/:slug",
        element: <DetailContent />,
      },
    ],
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
