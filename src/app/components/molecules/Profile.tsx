import { clear } from 'console';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { TbCameraPlus } from "react-icons/tb";

function Profile() {
    const [coverImage, setCoverImage] = useState<string | null>(null);

    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        if (file && file.size > 1024 * 1024) {
          alert("Image size exceeds 1MB");
          return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
          setCoverImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };

      const handleReUpload = () => {
        if (coverImage) {
          setCoverImage(null);
        } else if (fileInput.current) {
          fileInput.current.click();
        }
      };

  return (
    <>
      {!coverImage ? (
        <div className="h-12 w-12 rounded-full flex items-center justify-center border-[1px] border-black">
          <label htmlFor="upload-file">
            <TbCameraPlus />
          </label>
          <input
            className="text-xs h-full w-full text-center hidden"
            id="upload-file"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            placeholder="display picture"
          />
        </div>
      ) : (
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full"
          onClick={handleReUpload}
        >
          <Image
            className="rounded-full w-full h-full"
            src={coverImage}
            alt="Profile pic"
            height="50"
            width="50"
          />
        </div>
      )}
    </>
  );
}

export default Profile


