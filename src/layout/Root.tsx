import { Outlet } from "react-router-dom";
import { MainNav, MetaTags } from "@/components";
import { metadata } from "@/metadata";

const RootLayout = () => {
  return (
    <>
      {metadata.map((meta, index) => (
        <MetaTags
          key={index}
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
          author={meta.author}
          twitterCard={meta.twitterCard}
          twitterCreator={meta.twitterCreator}
          twitterImage={meta.twitterImage}
          twitterSite={meta.twitterSite}
          fbImage={meta.fbImage}
          fbType={meta.fbType}
          fbUrl={meta.fbUrl}
        />
      ))}
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
