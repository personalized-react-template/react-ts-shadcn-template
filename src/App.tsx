import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/Root";
import { LandingPage, ErrorPage, SamplePage } from "./pages";
import ThemeProvider from "./layout/ThemeProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        { path: "sample-page2", element: <SamplePage /> }, //modify your preference relative path name
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        storageKey="mugnaReactTS"
      >
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
