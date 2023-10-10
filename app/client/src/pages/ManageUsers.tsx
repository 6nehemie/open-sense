import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline';
import { users } from '../constants/index';

const ManageUsers = () => {
  return (
    <>
      <div className="p-side">
        <h1 className="heading-2 mb-8 w-full max-w-screen-wide mx-auto">
          Users
        </h1>
      </div>

      <div className="min-[612px]:p-side mb-16">
        <div className="w-full max-w-screen-wide mx-auto font-exo">
          <div className="border border-neutral-800 min-[612px]:rounded-lg overflow-hidden">
            <div className="w-full">
              <div className="grid grid-cols-4 py-3 px-4 text-sm bg-neutral-800 bg-opacity-50 font-normal text-neutral-300 border-b-[1px] border-neutral-800 max-[1150px]:grid-cols-3 max-[900px]:grid-cols-2 max-[612px]:grid-cols-1">
                <h2>Name</h2>
                <h2 className="max-[1150px]:hidden">Role</h2>
                <h2 className="max-[900px]:hidden">Status</h2>
                <h2 className="max-[612px]:hidden">Email</h2>
              </div>

              <ul>
                {users.map((user) => (
                  <li className=" items-center relative grid grid-cols-4 px-4 py-3 font-light border-b-[1px] border-neutral-800 max-[1150px]:grid-cols-3 max-[900px]:grid-cols-2 max-[612px]:grid-cols-1">
                    <div className=" flex items-center gap-4">
                      <div className="aspect-square rounded-full bg-neutral-700 h-8 overflow-hidden">
                        {/* {user?.avatar && <img src={user.avatar} alt="" />} */}
                      </div>
                      <div className="leading-tight">
                        <p>{user.name}</p>
                        <p className="text-neutral-400 min-[612px]:hidden">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <p className="max-[1150px]:hidden">User</p>

                    <div
                      className={`border w-max px-3 py-1 rounded-full flex items-center gap-2
				  max-[900px]:hidden
					${user.status === 'member' && 'border-red-400 text-red-400'}
				`}
                    >
                      <div
                        className={`h-2 rounded-full aspect-square bg-white
				  ${user.status === 'member' && 'bg-red-400'}
				  `}
                      ></div>
                      <p className="">{user.status}</p>
                    </div>

                    <p className="max-[612px]:hidden">{user.email}</p>

                    <div className="absolute right-4 top-4 cursor-pointer hover:bg-neutral-800 text-light-gray rounded-full p-1 transition-colors duration-200">
                      <EllipsisVerticalIcon className="h-5" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-side text-sm">
        <div className="w-full max-w-screen-wide mx-auto flex justify-between items-center text-neutral-300">
          <button className="flex self-start items-center gap-4 hover:text-white transition-colors duration-200">
            <ArrowLongLeftIcon className="h-5 inline-block max-[602px]:hidden" />
            <p>Previous</p>
          </button>

          <div className="grid grid-cols-5 w-52">
            <div className="border-b-[1.5px] pb-2 text-white">
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                1
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                2
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                3
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                4
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                5
              </p>
            </div>
          </div>

          <button className="flex self-start items-center gap-4 hover:text-white transition-colors duration-200">
            <p>Next</p>
            <ArrowLongRightIcon className="h-5 inline-block max-[602px]:hidden" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ManageUsers;
