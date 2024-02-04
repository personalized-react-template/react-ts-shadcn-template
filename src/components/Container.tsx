import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
};

export default Container;
