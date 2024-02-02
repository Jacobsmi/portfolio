import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-slate-800 h-screen w-full p-8 md:p-12 flex flex-col justify-between">
          <div></div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-stone-200">
              Hi, I&apos;m Michael.
            </div>
            <div className="text-stone-200 sm:text-lg lg:text-xl mt-4">
              Software Engineer, web-enthusiast, golfer, and much more. I love
              bringing functionality to the web, making it look beautiful, and I
              love moving fast.
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={"https://github.com/Jacobsmi"}
              className="flex items-center text-stone-200 hover:underline"
            >
              <FiGithub className="mr-2" /> Github
              <FiArrowUpRight />
            </Link>
            <Link
              href={"https://github.com/Jacobsmi"}
              className="flex items-center text-stone-200 hover:underline"
            >
              <FiLinkedin className="mr-2" /> LinkedIn
              <FiArrowUpRight />
            </Link>
            <div></div>
          </div>
        </div>
        <div className="bg-slate-800 h-screen w-full"></div>
      </div>
    </div>
  );
}
