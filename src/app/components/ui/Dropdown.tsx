// "use client";

// import React, { SelectHTMLAttributes, useCallback, ChangeEvent } from "react";
// import { ChevronDown } from "lucide-react";

// interface DropdownProps
//   extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
//   label: string;
//   id: string;
//   options: { value: string; label: string }[];
//   value?: string;
//   onChange?: (value: string) => void;
// }

// const Dropdown = ({
//   label,
//   id,
//   options,
//   value,
//   onChange,
//   ...props
// }: DropdownProps) => {
//   const handleChange = useCallback(
//     (e: ChangeEvent<HTMLSelectElement>) => {
//       onChange?.(e.target.value);
//     },
//     [onChange]
//   );

//   return (
//     <div className="space-y-1.5">
//       <label
//         htmlFor={id}
//         className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//       >
//         {label}
//       </label>
//       <div className="relative cursor-pointer">
//         <select
//           id={id}
//           value={value}
//           onChange={handleChange}
//           className="flex h-10 w-full cursor-pointer appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           {...props}
//         >
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//         <ChevronDown className="cursor-pointer absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 pointer-events-none" />
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

"use client";

import React, { SelectHTMLAttributes, useCallback, ChangeEvent } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label: string;
  id: string;
  options: { value: string; label: string; fontFamily?: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

const Dropdown = ({
  label,
  id,
  options,
  value,
  onChange,
  ...props
}: DropdownProps) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <div className="relative cursor-pointer">
        <select
          id={id}
          value={value}
          onChange={handleChange}
          className="flex h-10 w-full cursor-pointer appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              style={{ fontFamily: option.fontFamily }}
            >
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="cursor-pointer absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default Dropdown;
