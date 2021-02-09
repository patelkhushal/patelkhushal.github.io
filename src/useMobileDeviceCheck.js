import React, { useState, useEffect} from 'react'

// Hook to detect mobile devices
export default function useMobileDeviceCheck() {
    const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Detect if current device is mobile
      setIsMobileDevice(!!navigator.maxTouchPoints);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial device type
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return isMobileDevice;
}
