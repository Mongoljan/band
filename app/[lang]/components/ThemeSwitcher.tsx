import { useEffect, useState } from "react";
import {
  AiFillMoon,
  AiFillSun,
  AiOutlineMoon,
  AiOutlineSun,
} from "react-icons/ai";
import { useTheme } from "next-themes";


const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {!mounted ? (
        <div className="mx-5 skeleton p-5 rounded-3xl"></div>
      ) : (
        <div className="mr-4  px-1 justify-between rounded-full flex items-center shadow-md transition-all duration-300 ease-in-out  w-[65px] dark:bg-base-100 bg-slate-200 h-[30px] my-auto">
          {theme === "light" ? (
            <>
              <button
                className="bg-white p-1 rounded-full flex items-center gap-2  shadow-sm hover:bg-yellow-100 transition-all duration-300 ease-in-out"
                onClick={() => setTheme("light")}
              >
                <AiFillSun className="text-yellow-400 text-[16px]" />
              </button>
              <button
                className="p-1 rounded-full flex items-center gap-1  hover:bg-gray-300 transition-all duration-300 ease-in-out"
                onClick={( ) => setTheme("dark")}
              >
                <AiOutlineMoon className="text-gray-500 text-[16px]" />
              </button>
            </>
          ) : (
            <>
              <button
                className="p-1 rounded-full flex items-center gap-1  hover:bg-base-300 transition-all duration-300 ease-in-out"
                onClick={() => setTheme("light")}
              >
                <AiOutlineSun className="text-yellow-400 text-[16px]  " />
              </button>
              <button
                className="bg-primary p-1 rounded-full flex items-center gap-1 shadow-sm hover:bg-gray-700 transition-all duration-300 ease-in-out"
                onClick={() => setTheme("dark")}
              >
                <AiFillMoon className="text-white" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default ThemeSwitcher;