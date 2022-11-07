import Image from 'next/image';

import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from '@thirdweb-dev/react';

export default function Example() {
  const connect = useMetamask();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-4 w-full max-w-sm rounded-lg border shadow-md sm:p-6 border-black">
        <h5 className="mb-3 text-base font-semibold md:text-xl text-white text-center">
          Login
        </h5>
        <ul className="my-4 space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-white rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <Image
                alt="Google"
                width={24}
                height={24}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/240px-Google_%22G%22_Logo.svg.png"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Google</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-white rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <Image
                alt="Metamask"
                width={24}
                height={24}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                Recommended
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-white rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <Image
                alt="Solana"
                width={24}
                height={24}
                src="https://3632261023-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-MVOiF6Zqit57q_hxJYp%2Favatar-1615495356537.png?generation=1615495356841399&alt=media"
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Phantom</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                Recommended
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
