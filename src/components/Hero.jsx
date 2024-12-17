import { Highlight } from "./ui/highlight-text";
import { MagicButton } from "./ui/magic-button";

function Hero() {
  return (
    <div className="min-h-screen container relative flex justify-center items-center">
      <div className=" text-primary z-20 w-1/2 flex flex-col justify-center items-center relative">
        <h3 className="font-bold text-xl mb-3">Discover Something Amazing</h3>
        <h1 className="font-extrabold text-5xl mb-4 leading-normal text-center">
          Welcome to <br /> <Highlight>CheatSavant</Highlight>
        </h1>
        <p className="my-4 text-center w-3/4">
          Cheat Savant is a business established in 2020. We take pride in
          offering only the best, unique, and undetected products for Rust and
          other games at the lowest prices.
        </p>
        <MagicButton title={"Explore Shop"} url={"/products"} />
      </div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}

export default Hero;
