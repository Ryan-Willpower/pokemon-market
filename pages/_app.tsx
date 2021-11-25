import "../styles/globals.scss"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { CartContextWrapper } from "../utils/cart"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextWrapper>
      <Component {...pageProps} />
    </CartContextWrapper>
  )
}

export default MyApp
