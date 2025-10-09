import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("floatingButton", {"calLink":"goauto/30min","config":{"layout":"month_view"},"buttonText":"Free Consulting Call","buttonColor":"#1d71e9"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#329b88"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();

    // Add custom CSS to hide button text on mobile
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        button[data-cal-namespace="30min"] #button {
          display: none !important;
        }
        button[data-cal-namespace="30min"] #button-icon {
          margin-right: 0 !important;
        }
        button[data-cal-namespace="30min"] {
          width: 4rem !important;
          height: 4rem !important;
          padding: 0.75rem !important;
          justify-content: center !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything visible, it just initializes the Cal.com embed
};

export default CalEmbed;
