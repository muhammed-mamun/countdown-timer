import Calculate from "./Calculate";
import { FaGithub } from "react-icons/fa";
function App() {
  const targetDate = "2024-06-10";
  return (
    <>
      <div className="font-grotesk max-w-6xl mx-auto font-poppins my-auto h-screen bg-blackPrimary items-center grid grid-cols-1 justify-center gap-0">
        <div className="mx-auto">
          <h1 className=" text-white font-bold text-6xl">
            Let's Code_Your Career
          </h1>
          <p className="text-[rgba(217,217,217,0.57)]">
            Join us to become part of our community
          </p>

          <div className="mx-auto pt-8">
            <Calculate targetDate={targetDate}></Calculate>
          </div>

          <div className="flex pt-20 mx-20 gap-2 justify-center">
            <a
              href="https://countdown-timer-mamun.vercel.app/"
              target="_blank"
              className="tooltip"
              data-tip="Project live link"
            >
              <button className="btn  btn-outline">Varcel</button>
            </a>

            <a
              href="https://programming-hero.com/"
              target="_blank"
              className="tooltip"
              data-tip="Programming Hero Official Website"
            >
              <p className="btn  btn-outline">Programming Hero</p>
            </a>
            <a
              href="https://github.com/muhammed-mamun/countdown-timer"
              target="_blank"
              className="tooltip"
              data-tip="Project repository"
            >
              <button className="btn  btn-outline">Github</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
