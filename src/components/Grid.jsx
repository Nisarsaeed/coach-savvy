import Image from "next/image";
import { FaDiscord, FaSmile, FaTasks, FaBriefcase } from "react-icons/fa";

const Grid = () => {
  const gridStatsData = [
    {
      id: "1",
      heading: "10",
      subheading: "Years of Experience",
      icon: FaBriefcase,
    },
    {
      id: "2",
      heading: "500+",
      subheading: "Satisfied Customers Worldwide",
      icon: FaSmile,
    },
    {
      id: "3",
      heading: "700+",
      subheading: "Projects Completed",
      icon: FaTasks,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container h-[60vh] relative cursor-pointer">
      <div className="bg-accentBlue text-primary py-10 rounded-3xl shadow-lg col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 flex flex-col sm:flex-row justify-evenly items-center z-20">
        {gridStatsData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className="p-8 rounded-xl shadow-md flex flex-col justify-evenly items-center"
              key={item.id}
            >
              <Icon size={20} className="" />
              <h2 className="text-2xl font-bold mt-3">{item?.heading}</h2>
              <p className="text-xs mt-2 uppercase">{item?.subheading}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-accentBlue text-primary p-6 rounded-3xl shadow-lg col-span-1 row-span-2 relative cursor-pointer">
        <a href="https://discord.com/invite/WJSMyW4Ghn" target="_blanck">
          <div className="p-10 flex items-center justify-center shadow-2xl bg-accentBlue rounded-xl ">
            <FaDiscord
              size={70}
              className="rounded-full border border-primary p-4 text-[#5562EA] hover:bg-transparent bg-primary hover:text-primary"
            />
          </div>
          <div className="absolute bottom-5">
            <p className="text-sm mb-2 text-[#b8b8b8]">Need Something?</p>
            <h2 className="text-2xl font-semibold">Contact Me</h2>
          </div>
        </a>
      </div>
      <div className="bg-accentBlue text-primary p-8 rounded-3xl shadow-lg cursor-pointer">
        <h2 className="text-2xl font-bold">Expert Coaches</h2>
        <p className="text-sm mt-4 opacity-80">
          Our team of seasoned gaming coaches possesses extensive experience and is dedicated to helping players master their skills and reach their full potential.
        </p>
      </div>  
      <div className="bg-accentBlue text-primary rounded-3xl shadow-lg col-span-1 sm:col-span-2 cursor-pointer">
        <div
          className="h-full w-full flex items-center justify-center"
        >
          <h2 className="text-2xl font-bold tracking-wider uppercase ">
            Want to Discuss about something?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Grid;
