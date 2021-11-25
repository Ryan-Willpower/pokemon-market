/* eslint-disable @next/next/no-img-element */
import { ImageProps } from "next/image"

const mock = ({ src, alt, width, height, ...props }: ImageProps) => {
  return (
    <img
      src={src as string}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}

export default mock
