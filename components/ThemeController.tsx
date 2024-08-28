import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { LuMoon, LuSunDim } from "react-icons/lu";

const ThemeController: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (isChecked: boolean) => {
    setTheme(isChecked ? "dark" : "light");
  };

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <label className="swap swap-rotate p-1">
      {/* This hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "dark"}
        onChange={(e) => handleThemeChange(e.target.checked)}
      />
      <LuSunDim className="swap-on text-xl" />
      <LuMoon className="swap-off text-xl p-0.5 dark:text-slate-200" />
    </label>
  );
};

export default ThemeController;
