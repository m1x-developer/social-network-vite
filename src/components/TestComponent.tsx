import React, { useState } from 'react';

interface FormFilesProps {
  onChange: (files: File[]) => void;
}

const FormFiles: React.FC<FormFilesProps> = ({ onChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [index, setIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files: fileList } = e.target;
    if (fileList) {
      const newFiles = [...files];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const existingIndex = files.findIndex((f) => f.name === file.name);
        if (existingIndex >= 0) {
          newFiles[existingIndex] = {
            ...file,
            name: `${file.name} (${index})`,
          };
          setIndex(index + 1);
        } else {
          newFiles.push(file);
        }
      }
      setFiles(newFiles);
      onChange(newFiles);
    }
  };

  return <input type="file" multiple onChange={handleChange} />;
};

export default FormFiles;
