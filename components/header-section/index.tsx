import { useContext } from "react"
import { CartContext } from "../../utils/cart"
import { SearchBar } from "../searchbar"
import { ShoppingCartButton } from "../shopping-cart-button"

export function HeaderSection() {
  const { setOpenCartStatus } = useContext(CartContext)

  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between my-2 gap-4">
      <h1 className="order-1 text-2xl font-medium flex items-center md:flex-grow md:w-full">
        Pokemon market
      </h1>
      <SearchBar className="order-3 md:order-2 flex-grow md:flex-grow-0 md:flex-shrink w-full md:w-6/12 flex items-center" />
      <div className="order-2 md:order-3 flex items-center justify-end">
        <ShoppingCartButton onClick={() => setOpenCartStatus(true)} />
      </div>
    </header>
  )
}
