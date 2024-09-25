import React from 'react';

// Utility function to concatenate class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AnimatedGradientText({ children, className }) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className
      )}
    >
      <div
        className="absolute inset-0 block h-full w-full animate-gradient rainbow-gradient-bg bg-[length:var(--bg-size)_100%] p-[2px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
      />
      <span className="relative z-10 text-3xl bg-black text-white">
        {children}
      </span>
    </div>
  );
}