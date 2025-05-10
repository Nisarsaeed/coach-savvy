'use client'
import { useState } from "react";

function ProductFeatures() {
    const [activeTab, setActiveTab] = useState(1);
    const activeCategoryStyles = "!opacity-100 border-b-2";

    const detailsTabs = [
      { id: 1, name: "Description" },
      { id: 2, name: "Requirements" },
      { id: 3, name: "Features" },
    ];
   
    return (
      <div className="container mt-5 ">
        <nav
          className=" border-blue-900  bg-blue-950 !rounded-t-xl shadow-[0_-10px_30px_rgba(102,_23,_203,_0.8)] p-4"
        >
          {detailsTabs?.map((item, i) => {
            return (
              <span
                key={i}
                className={`text-primary ms-4 sm:ms-8 sm:font-medium md:text-lg py-3 px-6 cursor-pointer opacity-60 ${
                  item?.id == activeTab ? activeCategoryStyles : ""}`}
                onClick={(e) => {
                  setActiveTab(item?.id);
                }}
              >
                {item?.name}
              </span>
            );
          })}
        </nav>
          
          <div className=" rounded-b-xl bg-blue-900 p-12 shadow-[0_10px_30px_rgba(102,_23,_203,_0.8)]">
            {activeTab == 1 && (
              <p>
               Enhance your mindset for peak performance during high-pressure matches.
              </p>
            )}
            {activeTab == 2 && (
              <p>
               Willingness to participate with

              Open to mindset coaching
              </p>
            )}
            {activeTab == 3 && (
                <ul>
                  <li className="list-disc">Stress management techniques</li>
                  <li className="list-disc">Focus and concentration drills</li>
                  <li className="list-disc">Building resilience in competitive settings</li>
                </ul>     
            )}
          </div>
      </div>
    );
}

export default ProductFeatures