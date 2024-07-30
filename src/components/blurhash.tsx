import { Blurhash } from "react-blurhash";
import React, { useState, useEffect } from "react";

export default function BlurHash({
  src,
  alt,
  hash,
  className,
}: {
  src: string;
  alt: string;
  hash?: string;
  className?: string;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      <Blurhash
        hash={`${hash}`}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
        className={`${className} !imageLoaded ? "hidden" : "inline transition-all animate-fade-out "`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${
          !imageLoaded ? "hidden" : "inline"
        } h-auto w-full hover:scale-105 delay-50 duration-500 transition-all animate-fade-in`}
      />
    </>
  );
}
