import React, { ImgHTMLAttributes, useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  wrapperClass?: string;
  imgClass?: string;
  skeletonClass?: string;
  /** CSS aspect-ratio value, e.g. '16/9' or '1/1' */
  aspectRatio?: string | number;
} & ImgHTMLAttributes<HTMLImageElement>;

const ImageWithSkeleton: React.FC<Props> = ({
  src,
  alt = '',
  wrapperClass = '',
  imgClass = '',
  skeletonClass = 'bg-gray-200 animate-pulse',
  aspectRatio,
  width,
  height,
  loading,
  style,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);

  // Use inline style for aspect-ratio when provided. React expects camelCase `aspectRatio`.
  const wrapperStyle: React.CSSProperties = {};
  if (aspectRatio !== undefined) {
    // If a numeric ratio is provided, convert to string
    wrapperStyle.aspectRatio = typeof aspectRatio === 'number' ? String(aspectRatio) : aspectRatio;
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClass}`} style={wrapperStyle}>
      {!loaded && <div className={`absolute inset-0 ${skeletonClass}`} aria-hidden />}

      <img
        {...rest}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading ?? 'lazy'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        style={style}
        className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 block ${imgClass}`}
      />
    </div>
  );
};

export default ImageWithSkeleton;
