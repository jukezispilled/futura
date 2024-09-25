import React, { useEffect } from 'react';

function SAC() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-container h-min">
      {/* Calendly inline widget begin */}
      <div
        className="calendly-inline-widget mt-[10%] mb-[7%]"
        data-url="https://calendly.com/workwithfutura/30min?primary_color=32d1e6"
        style={{ minWidth: '320px', height: '700px' }}
      />
      {/* Calendly inline widget end */}
    </div>
  );
}

export default SAC;
