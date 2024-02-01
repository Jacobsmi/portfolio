import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <div className="h-screen w-full flex bg-slate-800 p-20">
        <div className="w-1/2 flex flex-col justify-between">
          <div></div>
          <div className="text-slate-50">
            <div className="text-3xl lg:text-6xl xl:text-7xl font-bold">
              Hi, I&apos;m Michael.
            </div>
            <div className="mt-10 text-md lg:text-lg xl:text-2xl">
              Software Engineer, bad gamer, and even worse golfer. I love
              bringing functionality to the web, making it look beautiful, and I
              love moving fast.
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              href={"https://www.linkedin.com/in/michael-jacobs1/"}
              className="flex items-center text-white hover:underline"
            >
              <FiLinkedin className="mr-2" />
              LinkedIn
              <FiArrowUpRight className="ml-0.5" />
            </Link>
            <Link
              href={"https://github.com/Jacobsmi"}
              className="flex items-center text-white hover:underline"
            >
              <FiGithub className="mr-2" />
              GitHub
              <FiArrowUpRight className="ml-0.5" />
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
