import { Highlight } from "./ui/highlight-text";
import { MagicButton } from "./ui/magic-button";
import Spacer from "./ui/spacer";

function Hero() {
  return (
    <div className="min-h-[70vh] container relative overflow-hidden flex justify-center items-center ">
      <div className="text-primary z-20 w-1/2 flex flex-col justify-center items-center">
        <h3 className="font-bold text-xl my-4  ">Discover Something Amazing</h3>
        <h1 className="font-extrabold text-5xl my-4 leading-normal text-center">
          Welcome to <br /> <Highlight>CheatSavant</Highlight>
        </h1>
        <p className="my-4 text-center w-3/4">
          Cheat Savant is a business established in 2020. We take pride in
          offering only the best, unique, and undetected products for Rust and
          other games at the lowest prices.
        </p>
        <MagicButton title={"Explore Shop"} url={"/products"} />
        <Spacer />
      </div>
    </div>
  );
}

export default Hero;
