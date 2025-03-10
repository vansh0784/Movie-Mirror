import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="flex items-center text-zinc-100 p-1">
      <label htmlFor="options" className="sr-only">
        {title}
      </label>
      <select
        name="option"
        id="options"
        className="rounded-lg border bg-gray-700 border-gray-500 text-white px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600 transition-all duration-200"
        onChange={func}
      >
        {options.map((o, i) => (
          <option value={o} key={i} className="text-black">
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
