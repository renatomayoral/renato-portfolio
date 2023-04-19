import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
        <>
      {currentTheme === "dark" ? (
        <BsFillSunFill className="cursor-pointer text-2xl text-yellow-400" onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill className="cursor-pointer text-2xl text-teal-600" onClick={() => setTheme("dark")} />
      )}
      </>
  );
}
