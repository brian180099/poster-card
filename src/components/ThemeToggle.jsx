import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("poster-card-theme", theme);
    } catch {
      // 저장 공간을 사용할 수 없어도 테마 전환은 동작합니다.
    }
  }, [theme]);

  return (
    <div className="theme-toolbar">
      <button
        type="button"
        className="theme-toggle"
        aria-label="다크 모드"
        aria-pressed={isDark}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
        {isDark ? "라이트 모드로" : "다크 모드로"}
      </button>
    </div>
  );
}
