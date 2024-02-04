import { Outlet } from "react-router-dom";
import { MainNav, MetaTags } from "@/components";

const RootLayout = () => {
  return (
    <>
      <MetaTags
        title="React + TypeScript + Shadcn-ui "
        description="Put your description about your website"
        keywords="react, typescript, shadcn-ui, react template, vite"
      />
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
