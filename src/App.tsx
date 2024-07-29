import AppLayout from './layouts/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />
  },
  {
    
  }
  
  ])

function App() {
  return (
    <main className="flex w-screen h-dvh">
      <div className="flex-1 grow w-full h-full">
      <RouterProvider router={router}  />
      </div>
    </main>
  );
}

export default App;
