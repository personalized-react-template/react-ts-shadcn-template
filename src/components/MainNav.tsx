import { Link } from "react-router-dom";
import { Container, NavRoutes, ModeToggle } from ".";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

/**modify to your preferred path and label
 * add route if necessary
 * @example
 * { path: "page3", label: "page3" }
 */
const routes = [
  { path: "", label: "home" },
  { path: "sample-page2", label: "page2" },
];

const MainNav = () => {
  return (
    <header>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-6">
                  <NavRoutes routes={routes} />
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Your Brand</h1>
            </Link>
          </div>
          <nav className="mx-6 space-x-4 lg:space-x-6 hidden md:block">
            <NavRoutes routes={routes} />
          </nav>
          <div>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainNav;
