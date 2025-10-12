import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#329b88"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <button 
      data-cal-namespace="30min"
      data-cal-link="goauto/30min"
      data-cal-config='{"layout":"month_view"}'
      className="z-[999999999999] fixed md:bottom-6 bottom-4 md:right-10 right-4 flex h-16 origin-center transform cursor-pointer items-center rounded-full py-4 px-6 text-base outline-none drop-shadow-md transition focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95"
      style={{backgroundColor: 'rgb(29, 113, 233)', color: 'rgb(255, 255, 255)'}}
    >
      <div id="button-icon" className="mr-3 flex items-center justify-center">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div id="button" className="font-semibold leading-5 antialiased">Free Consulting Call</div>
    </button>
  );
};

export default CalEmbed;
