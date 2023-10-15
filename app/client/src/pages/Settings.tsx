import { useContext, useEffect, useState } from 'react';
import { ChangePasswordInput, SettingsInput, UploadInput } from '../components';
import { DashboardContext } from './DashboardLayout';
import { Form, useActionData } from 'react-router-dom';
import { updateErrors } from '../utils/errors/updateErrors';

interface PostInput {
  name: string;
  email: string;
  avatar?: File;
  password: string;
}

const Settings = () => {
  const { user } = useContext(DashboardContext);
  const updatedData = useActionData() as PostInput;

  const [updateError, setUpdateError] = useState<{
    name: string;
    email: string;
    password: string;
    newPassword: string;
    confirmPassword: string;
  }>();
  const [postInput, setPostInput] = useState<PostInput>({
    name: '',
    email: '',
    avatar: undefined,
    password: '',
  });

  useEffect(() => {
    if (updatedData) {
      if (typeof updatedData === 'string') {
        setUpdateError(updateErrors(updatedData));
      } else {
        setPostInput((prev) => {
          if (updatedData.name) prev.name = updatedData.name;
          if (updatedData.email) prev.email = updatedData.email;
          if (updatedData.password) prev.password = updatedData.password;
          if (updatedData.avatar) prev.avatar = updatedData.avatar;
          return prev;
        });
      }
    }
  }, [updatedData]);

  return (
    <div className="p-side w-screen pb-12 ">
      <div className="max-w-screen-wide w-full mx-auto">
        <h2 className="heading-2">Settings</h2>
        <Form
          method="patch"
          // encType="multipart/form-data" // Really important for uploading files!!!!!!!!!!!!!
          encType="multipart/form-data"
          className="p-14 max-lg:p-10 max-md:p-6 max-sm:p-0 bg-white font-exo text-dark-gray rounded-xl w-full grid grid-cols-2 max-[1183px]:grid-cols-1 gap-8"
        >
          <div className="flex flex-col gap-5">
            <h3 className="heading-3 font-normal">My data</h3>
            <UploadInput user={user} uploadedFile={updatedData?.avatar} />
            <SettingsInput
              label="Name"
              name="name"
              newValue={postInput.name}
              placeholder="Your name"
              error={updateError?.name}
              type="text"
              defaultValue={user.name}
            />

            <SettingsInput
              label="Email"
              name="email"
              newValue={postInput.email}
              placeholder="Your email"
              error={updateError?.email}
              type="email"
              defaultValue={user.email}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading-3 font-normal">Security</h3>
            <ChangePasswordInput
              errorObject={updateError}
              newValue={postInput.password}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Settings;
