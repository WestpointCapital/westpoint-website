import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("floatingButton", {"calLink":"goauto/30min","config":{"layout":"month_view"},"buttonText":"Free Consulting Call","buttonColor":"#1d71e9"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#329b88"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();

    // Add custom CSS to hide button completely on mobile - wait for button to load
    const addMobileStyles = () => {
      const style = document.createElement('style');
      style.id = 'cal-mobile-style';
      style.textContent = `
        @media (max-width: 768px) {
          /* Hide any Cal.com floating button on mobile */
          button[data-cal-namespace="30min"],
          button.fixed.rounded-full[style*="background-color: rgb(29, 113, 233)"],
          .z-\\[999999999999\\].fixed.rounded-full {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        }
      `;
      
      if (!document.getElementById('cal-mobile-style')) {
        document.head.appendChild(style);
      }
    };
    
    // Apply styles immediately
    addMobileStyles();
    
    // Also apply after a delay to catch dynamically loaded button
    setTimeout(addMobileStyles, 1000);
    setTimeout(addMobileStyles, 2000);

    return () => {
      const existingStyle = document.getElementById('cal-mobile-style');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible, it just initializes the Cal.com embed
};

export default CalEmbed;
