import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  containerClassName?: string;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
  containerClassName = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      const offset = scrolled * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div className={`overflow-hidden rounded-xl ${containerClassName}`}>
      <div ref={ref} className="will-change-transform h-[130%] -mt-[15%]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover ${className}`}
        />
      </div>
    </div>
  );
}

interface ConstrainedImageProps {
  src: string;
  alt: string;
  maxHeight?: string;
  maxWidth?: string;
  className?: string;
}

export function ConstrainedImage({
  src,
  alt,
  maxHeight = "320px",
  maxWidth = "100%",
  className = "",
}: ConstrainedImageProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-auto h-auto object-contain rounded-xl"
        style={{ maxHeight, maxWidth }}
      />
    </div>
  );
}

export default ParallaxImage;
