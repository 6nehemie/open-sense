import { ArrowDownTrayIcon, UserIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

interface UploadInputProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  uploadedFile?: File;
}

const UploadInput: React.FC<UploadInputProps> = ({ user, uploadedFile }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uploadedFile) {
      setFileName(null);
    }
  }, [uploadedFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFileName(e.target.files[0].name);
  };

  const handleCancel = () => {
    setFileName(null);
    inputRef.current!.value = '';
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p>Update your image profile</p>
        <div>
          {fileName && (
            <div className="flex items-end gap-4">
              <button type="submit" className="mt-2">
                Submit
              </button>
              <p
                className="text-red-light cursor-pointer"
                onClick={handleCancel}
              >
                Cancel
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="rounded-full h-12 w-12 aspect-square overflow-hidden">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={`Profile image of ${user.name}`}
              height={60}
              width={60}
              className="object-cover"
            />
          ) : (
            <div className="bg-light-gray h-full w-full aspect-square flex items-center justify-center">
              <UserIcon className="h-6 text-white" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-end">
          <div className=" hover:text-red-light transition-colors duration-200">
            <label
              htmlFor="avatar"
              className="cursor-pointer flex items-center gap-2"
            >
              <span>New profile picture</span>
              <ArrowDownTrayIcon className="h-5" />
            </label>
            <input
              ref={inputRef}
              id="avatar"
              name="avatar"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {fileName && (
            <p className="text-[12px]">
              {fileName.slice(1, 10)}...{fileName.slice(-10)}
            </p>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] bg-light-gray bg-opacity-60 mt-2"></div>
    </div>
  );
};
export default UploadInput;
