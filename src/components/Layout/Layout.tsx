import { Disclosure } from "@headlessui/react";
import { DocumentReportIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Cookies from "universal-cookie";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Layout() {
  const auth = new Cookies().get("TOKEN");
  const navigation = [
    { name: "Home", href: ROUTES.HOME, current: false },
    { name: "About", href: ROUTES.ABOUT, current: false },
    { name: "Free", href: "/free", current: false },
    { name: "Auth", href: "/auth", current: false },
  ];

  !auth &&
    navigation.push(
      { name: "Register", href: ROUTES.REGISTER, current: false },
      { name: "Login", href: ROUTES.LOGIN, current: false }
    );

  return (
    <div>
      <Disclosure as="nav" className="bg-blue-100">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div>
                  <div className="self-center text-lg font-semibold whitespace-nowrap text-black">
                    <Link to={ROUTES.HOME}>
                      <div>Open-Doc</div>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "text-emerald-400"
                              : "hover:text-blue-700",
                            "px-3 py-2 rounded-md text-lg font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div>
                  <Link to={ROUTES.CREATE_DOCUMENTATION}>
                    <button
                      type="button"
                      className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Create Documentation
                    </button>
                  </Link>
                  <span className="pl-2" />
                  <Link to={ROUTES.PROJECTS}>
                    <button
                      type="button"
                      className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      View Documentation
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-black"
                        : "text-gray-300 hover:bg-gray-700 hover:text-black",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
