import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RetroGrid({ className, children }) {
  return (
    <div
      className={cn(
        "absolute h-full w-full overflow-hidden opacity-100 [perspective:300px] bg-center",
        className
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(25deg)] -mt-[400px] bg-center">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:500vh] [inset:0%_0px] [margin-left:-100%] [transform-origin:100%_0_0] [width:1200vw]",
            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",
            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
          )}
        />
      </div>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black bg-center" />
      {/* Children */}
      <div className="absolute inset-0 flex items-center justify-center bg-center">
        {children}
      </div>
    </div>
  );
}