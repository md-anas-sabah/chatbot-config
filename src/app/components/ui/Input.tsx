"use client";

import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  label,
  id,
  value: externalValue,
  onChange,
  ...props
}: InputProps) => {
  const [internalValue, setInternalValue] = useState(externalValue || "");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
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
      <input
        id={id}
        value={externalValue ?? internalValue}
        onChange={handleChange}
        className="focus:outline-none flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  );
};

export default Input;
