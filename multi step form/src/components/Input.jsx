const Input = ({ label, type = "text", placeholder, error }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full max-w-md memory-font">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`px-3 py-2 bg-white border rounded-lg text-sm shadow-sm placeholder-gray-400
          focus:outline-none focus:ring-2 transition-all duration-200
          ${error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-100'
          }`}
      />
      {error && (
        <span className="text-xs font-medium text-red-600 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;