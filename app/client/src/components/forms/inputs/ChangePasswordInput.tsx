import { useEffect, useState } from 'react';

interface ChangePasswordInputProps {
  errorObject?: {
    name: string;
    email: string;
    password: string;
    newPassword: string;
    confirmPassword: string;
  };
  newValue?: string;
}

const ChangePasswordInput: React.FC<ChangePasswordInputProps> = ({
  errorObject,
  newValue,
}) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (newValue) {
      setEdit(false);
    }
  }, [newValue]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <label htmlFor="password">Password</label>
        <div className="flex gap-3">
          {edit && <button>Submit</button>}
          <p
            className={`cursor-pointer
				${edit && 'text-red-light'}
			`}
            onClick={() => setEdit((prev) => !prev)}
          >
            {edit ? 'Cancel' : 'Edit'}
          </p>
        </div>
      </div>

      {edit ? (
        <>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            //   required
            className={`font-light border-2 border-light-gray border-opacity-50 py-2 px-3 rounded-md outline-none
            ${errorObject?.password ? 'border-red-light' : ''}
            `}
          />
          {errorObject?.password && edit && (
            <span className="text-red-light">{errorObject?.password}</span>
          )}
        </>
      ) : (
        <p className="">********</p>
      )}
      {edit && (
        <>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Your new password"
            //   required
            className={`font-light border-2 border-light-gray border-opacity-50 py-2 px-3 rounded-md outline-none
            ${errorObject?.newPassword ? 'border-red-light' : ''}
            `}
          />
          {errorObject?.newPassword && edit && (
            <span className="text-red-light">{errorObject?.newPassword}</span>
          )}
        </>
      )}
      {edit && (
        <>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your new password"
            //   required
            className={`font-light border-2 border-light-gray border-opacity-50 py-2 px-3 rounded-md outline-none
            ${errorObject?.confirmPassword ? 'border-red-light' : ''}
            `}
          />
          {errorObject?.confirmPassword && edit && (
            <span className="text-red-light">
              {errorObject?.confirmPassword}
            </span>
          )}
        </>
      )}

      {!edit && (
        <div className="w-full h-[1px] bg-light-gray bg-opacity-60"></div>
      )}
    </div>
  );
};
export default ChangePasswordInput;
