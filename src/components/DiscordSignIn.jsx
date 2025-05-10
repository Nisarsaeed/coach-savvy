
import { handleSignIn } from "@/lib/serverActions";
import { FaDiscord } from "react-icons/fa";

export const DiscordSignIn =  ()=> {
  return (
    <>
        <button
          onClick={handleSignIn}
          className="py-2 px-4 bg-[#4856ee] rounded-md text-md flex w-full justify-center hover:bg-[#3c48c4]"
        >
          <FaDiscord className="me-2" size={25} />
          Continue with Discord
        </button>
    </>
  );
}
