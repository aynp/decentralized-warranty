import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";

export default function Example() {
  const connect = useMetamask();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Soci
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in here
              </h1>

              <button
                type="submit"
                className="text-lg p-4 shadow-sm text-white border-0 focus:outline-none rounded-md bg-[#000000] hover:bg-[#0a3650] flex items-center justify-center w-full"
              >
                Sign in with Google
              </button>
              <a href="/">
                <button
                  onClick={connect}
                  type="submit"
                  className="text-lg p-4 shadow-sm text-white border-0 focus:outline-none rounded-md bg-[#000000] hover:bg-[#0a3650] flex items-center justify-center w-full"
                >
                  Sign in with Metamusk
                </button>
              </a>
            </div>
            {/* <div>
              {address ? (
                <>
                  <button onClick={() => login()}>Login with Wallet</button>
                  <button onClick={logout}>Logout</button>
                  <pre>User: {JSON.stringify(address || null)}</pre>
                </>
              ) : (
                <button onClick={connect}>Connect Wallet</button>
              )}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
