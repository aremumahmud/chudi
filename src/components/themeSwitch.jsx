import "../css/themeswitch.css";

const ThemeToggleButton = ({ isDark, onChange, invertedIconLogic = false }) => (
  <label className={`theme-container ${isDark ? "IsDark" : "IsLight"}`}>
    <input
      type="checkbox"
      defaultChecked={invertedIconLogic ? !isDark : isDark}
      onChange={onChange}
    />
    <div />
  </label>
);

export default ThemeToggleButton;
