/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { Upload } from "lucide-react";

interface ImageUploaderProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "type" | "value"
  > {
  label: string;
  id: string;
  onChange?: (file: File | null) => void;
  imageFile?: File | null;
}

const ImageUploader = ({
  label,
  id,
  onChange,
  imageFile,
  ...props
}: ImageUploaderProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        onChange?.(file);
      }
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
      <div className="relative">
        <input
          id={id}
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleChange}
          className="hidden"
          {...props}
        />
        <div
          onClick={() => document.getElementById(id)?.click()}
          className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md border border-input bg-background px-3 py-2"
        >
          <div className="flex items-center gap-2">
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className={`h-6 w-6 ${
                  id === "launcher-image" ? "rounded-sm" : "rounded-full"
                }  object-cover`}
              />
            )}
            <span className="text-sm text-gray-500">
              {preview ? "" : "Upload image"}
            </span>
          </div>
          <Upload className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
