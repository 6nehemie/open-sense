import { SettingsInput } from '../components';
import { user } from '../constants';

const Settings = () => {
  return (
    <div className="p-side w-screen">
      <div className="max-w-screen-wide w-full mx-auto">
        <h2 className="heading-2">Settings</h2>
        <form className="p-14 max-lg:p-10 max-md:p-6 max-sm:p-0 bg-white font-exo text-dark-gray rounded-xl w-full grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="heading-3 font-normal">My data</h3>
            <SettingsInput
              label="Name"
              name="name"
              placeholder="Your name"
              type="text"
              defaultValue={user.name}
            />
            <SettingsInput
              label="Email"
              name="email"
              placeholder="Your email"
              type="email"
              defaultValue={user.email}
            />
          </div>
          <div>
            <h3 className="heading-3 font-normal">Security</h3>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings;
