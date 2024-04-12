import moment from "moment";
import Calculate from "./Calculate";

function App() {
  const targetDate = "2024-06-10";
  return (
    <div className="font-grotesk max-w-6xl mx-auto font-poppins my-auto h-screen bg-blackPrimary items-center grid grid-cols-1 justify-center gap-0">
      <div className="mx-auto">
        <div className="flex"></div>
        <h1 className=" text-white font-bold text-6xl">
          Let's Code_Your Career
        </h1>
        <p className="text-[rgba(217,217,217,0.57)]">
          Join us to become part of our community
        </p>

        <div className="mx-auto pt-8">
          <Calculate targetDate={targetDate}></Calculate>
        </div>
      </div>
    </div>
  );
}

export default App;
