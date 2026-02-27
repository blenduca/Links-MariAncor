import React, { useRef, useState, useEffect } from 'react';

interface ScaledWrapperProps {
  designWidth: number;
  designHeight: number;
  children: React.ReactNode;
  className?: string;
}

export function ScaledWrapper({ designWidth, designHeight, children, className = '' }: ScaledWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        setScale(parentWidth / designWidth);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [designWidth]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: `${designWidth} / ${designHeight}` }}
    >
      <div 
        className="absolute top-0 left-0 origin-top-left will-change-transform"
        style={{ 
          width: designWidth, 
          height: designHeight, 
          transform: `scale(${scale})` 
        }}
      >
        {children}
      </div>
    </div>
  );
}
