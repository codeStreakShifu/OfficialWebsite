import { useEffect } from 'react';

const ZadarmaWidget = () => {
  useEffect(() => {
    // Load Zadarma scripts
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const libScript = loadScript('https://my.zadarma.com/webphoneWebRTCWidget/v9/js/loader-phone-lib.js?sub_v=1');
    const fnScript = loadScript('https://my.zadarma.com/webphoneWebRTCWidget/v9/js/loader-phone-fn.js?sub_v=1');

    // Initialize widget after scripts are loaded
    fnScript.onload = () => {
      if (window.zadarmaWidgetFn) {
        window.zadarmaWidgetFn(
          'c9575a32ef3efa40e2e8', // Replace with your actual key
          '#291696', // Replace with your actual SIP
          'square',   // square or rounded
          'en',       // language
          true,       // enable/disable
          { right: '10px', top: '5px' } // position
        );
      }
    };

    // Cleanup on unmount
    return () => {
      document.body.removeChild(libScript);
      document.body.removeChild(fnScript);
    };
  }, []);

  return null;
};

export default ZadarmaWidget;