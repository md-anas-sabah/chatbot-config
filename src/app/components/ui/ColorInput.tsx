"use client";

import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

interface ColorInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorInput = ({
  label,
  id,
  value: externalValue,
  onChange,
  ...props
}: ColorInputProps) => {
  const [internalValue, setInternalValue] = useState(externalValue || "");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  const isValidColor = (color: string): boolean => {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
  };

  const displayColor = externalValue ?? internalValue;
  const validColor = isValidColor(displayColor) ? displayColor : "transparent";

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          value={displayColor}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-12"
          {...props}
        />
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full border"
          style={{ backgroundColor: validColor }}
        />
      </div>
    </div>
  );
};

export default ColorInput;
