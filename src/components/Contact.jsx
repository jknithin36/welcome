export default function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-white p-6"
    >
      <div className="text-center text-black">
        <h1 className="font-chivo mb-4 text-[60px] uppercase sm:text-[80px] md:text-[100px] lg:text-[120px]">
          JK NITHIN KUMAR
        </h1>
        <h3 className="font-rubik mb-8 text-[40px] uppercase sm:text-[50px] md:text-[60px] lg:text-[70px]">
          WORK WITH ME
        </h3>
        <div className="space-y-4">
          <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            Sassafras, Holly Park, Kent 44240 Ohio
          </p>
          <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            +1 330-281-2484
          </p>
          <div className="inline-block rounded-lg border border-gray-500 px-4 py-2">
            <p className="font-caveat text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
              <a
                href="mailto:insane414425@gmail.com"
                className="text-blue-500 hover:text-blue-700"
              >
                insane414425@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-caveat text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            Designed by Nithin @2024
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://x.com/x414423"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937a9.587 9.587 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.684 9.684 0 01-3.127 1.196 4.92 4.92 0 00-8.385 4.482A13.941 13.941 0 011.675 3.149 4.932 4.932 0 003.18 9.723a4.904 4.904 0 01-2.229-.616v.061a4.923 4.923 0 003.946 4.827 4.934 4.934 0 01-2.224.085 4.927 4.927 0 004.598 3.417A9.867 9.867 0 010 21.539a13.9 13.9 0 007.548 2.209c9.057 0 14.01-7.496 14.01-13.986 0-.215-.005-.428-.015-.641A10.025 10.025 0 0024 4.557a9.72 9.72 0 01-2.357.645z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/j-k-nithin-kumar-4386b4298/"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452H16.85v-5.413c0-1.292-.023-2.953-1.802-2.953-1.804 0-2.079 1.407-2.079 2.864v5.502h-3.6V9h3.45v1.561h.049c.482-.912 1.662-1.872 3.419-1.872 3.658 0 4.333 2.407 4.333 5.543v6.219zM5.337 7.433a2.07 2.07 0 01-2.071-2.07 2.07 2.07 0 114.141 0 2.07 2.07 0 01-2.07 2.07zM7.122 20.452H3.553V9h3.569v11.452zM22.225 0H1.771C.792 0 .004.786.004 1.757v20.49c0 .972.787 1.757 1.767 1.757h20.451c.977 0 1.771-.785 1.771-1.757V1.757C23.995.786 23.202 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
