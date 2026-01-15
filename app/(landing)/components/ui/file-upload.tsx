"use client";

import { useRef, useState } from "react";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";

type FileUploadProps = {
  onFileSelect?: (file: File | null) => void;
};

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="flex flex-col justify-center items-center w-full h-[140px] border border-dashed border-red-300 bg-red-50 rounded-lg cursor-pointer"
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) =>
          handleFileChange(e.target.files?.[0])
        }
      />

      {!file ? (
        <div className="text-center">
          <FiUploadCloud
            className="text-red-500 mx-auto mb-2"
            size={28}
          />
          <p className="text-sm text-gray-600">
            Upload Your Payment Receipt here
          </p>
        </div>
      ) : (
        <div className="text-center">
          <FiUploadCloud
            className="text-red-500 mx-auto mb-1"
            size={28}
          />
          <p className="text-sm font-medium text-red-500">
            {file.name}
          </p>
          <p className="text-xs text-gray-400">
            {(file.size / 1024).toFixed(1)} KB
          </p>

          <button
            onClick={removeFile}
            className="flex gap-2 bg-red-500 text-white mx-auto rounded-md mt-3 px-3 py-1 text-xs"
          >
            <FiTrash2 className="self-center" />
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
