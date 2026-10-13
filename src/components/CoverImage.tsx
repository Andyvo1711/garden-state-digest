"use client";

import Image from "next/image";
import { useState } from "react";

type CoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes for the foreground image (e.g. hover zoom). */
  className?: string;
};

/**
 * Cover image that fills its (relatively positioned) parent frame.
 *
 * Landscape photos are cropped to fill the frame as usual. Portrait and
 * square photos (usually people) would be cut across the face or body by
 * `object-cover` in our wide frames, so they are shown whole with
 * `object-contain` on top of a blurred copy of the same photo.
 */
export default function CoverImage({
  src,
  alt,
  sizes,
  priority,
  className = "",
}: CoverImageProps) {
  const [contain, setContain] = useState(false);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    const img = event.currentTarget;
    const frame = img.parentElement;
    if (!frame || !img.naturalWidth || !frame.clientHeight) return;
    const imageRatio = img.naturalWidth / img.naturalHeight;
    const frameRatio = frame.clientWidth / frame.clientHeight;
    setContain(imageRatio < 1.1 && imageRatio < frameRatio * 0.8);
  }

  return (
    <>
      {contain && (
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          className="scale-110 object-cover opacity-70 blur-2xl"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={handleLoad}
        className={`${contain ? "object-contain" : "object-cover"} ${className}`}
      />
    </>
  );
}
