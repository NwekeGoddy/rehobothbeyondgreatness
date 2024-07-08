import Image from "next/image";
import { FaFileAlt, FaGlobe } from "react-icons/fa"; // Assuming you're using react-icons
import Header from "./components/header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="w-11/12 flex gap-4 flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2  mt-auto">
          <Image
            src={"/images/pastor.png"}
            width={352}
            height={352}
            alt="Pastor"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 my-8">
          <h1 className="text-center md:text-left mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#fd8003] from-[#4a2f15]">
              Rehoboth 24:
            </span>{" "}
            <br /> Beyond Greatness
          </h1>
          <h1 className="text-center md:text-left tracking-normal mb-4 text-3xl font-extrabold leading-none  text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            The Next{" "}
            <mark className="px-2 text-white bg-[#fe9d3c] rounded dark:bg-[#fd8003]/90">
              Colourful
            </mark>{" "}
            Thing{" "}
          </h1>

          <div className="w-full flex justify-left gap-8 mt-8">
            <Link href="/ministers">
              <div className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 md:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-xs md:text-sm">
                  <FaFileAlt className="mr-2 w-5 h-5" />
                  Ministers Online Registration Form
                </span>
              </div>{" "}
            </Link>

            <Link href="/foreign-delegates">
              <div className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 md:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-xs md:text-sm">
                  <FaGlobe className="mr-2 w-5 h-5" />
                  Foreign Delegates Registration Form
                </span>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
