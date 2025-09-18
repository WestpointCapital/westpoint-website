import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("floatingButton", {"calLink":"goauto/30min","config":{"layout":"month_view"},"buttonText":"Free Consulting Call","buttonColor":"#1d71e9"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#329b88"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return null; // This component doesn't render anything visible, it just initializes the Cal.com embed
};

export default CalEmbed;
