const PreferencesInfo = ({ register, errors, control }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-1">
        <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
        <p className="text-sm text-gray-500">Customize your experience.</p>
      </div>

      {/* Newsletter toggle */}
      <label className="flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">Newsletter</span>
          <span className="text-xs text-gray-500">Receive product updates and news.</span>
        </div>
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
        />
      </label>

      {/* Theme selection */}
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-gray-700">Theme</span>
        <div className="grid grid-cols-2 gap-3">
          {["light", "dark"].map((theme) => (
            <label
              key={theme}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm shadow-sm cursor-pointer capitalize hover:border-blue-400 transition-colors duration-200"
            >
              <input
                type="radio"
                name="theme"
                value={theme}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-800">{theme}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferencesInfo;
