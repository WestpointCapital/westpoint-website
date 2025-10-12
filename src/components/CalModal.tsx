import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalModal = ({ isOpen, onClose }: CalModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Load Cal.com script and initialize with unique namespace
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        Cal("init", "modal-consultation", {origin:"https://app.cal.com"});
        
        Cal.ns["modal-consultation"]("inline", {
          elementOrSelector:"#my-cal-inline-modal",
          config: {"layout":"month_view"},
          calLink: "goauto/30min",
        });
        
        Cal.ns["modal-consultation"]("ui", {
          "cssVarsPerTheme":{
            "light":{"cal-brand":"#329b88"},
            "dark":{"cal-brand":"#fafafa"}
          },
          "hideEventTypeDetails":false,
          "layout":"month_view"
        });
      `;
      
      document.head.appendChild(script);
      
      return () => {
        // Cleanup script when modal closes
        document.head.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[95%] max-w-4xl h-[90%] max-h-[800px] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Schedule a Free Consulting Call</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        {/* Cal.com Embed */}
        <div className="h-full p-6">
          <div 
            style={{width:'100%',height:'100%',overflow:'scroll'}} 
            id="my-cal-inline-modal"
          />
        </div>
      </div>
    </div>
  );
};

export default CalModal;
