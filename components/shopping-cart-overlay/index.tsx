import { useContext } from "react"

import { CartContext } from "../../utils/cart"
import { CartItem } from "../cart-item"
import { ShoppingCartButton } from "../shopping-cart-button"

export function ShoppingCartOverlay() {
  const { cart, isOpenCart, amount, setOpenCartStatus, setCart, setAmount } =
    useContext(CartContext)

  const handleClearAllCart = () => {
    setCart([])
    setAmount({})
  }

  return (
    <>
      {/* Overlay background that make shopping cart seperate with main page */}
      <div
        className={`fixed z-20 h-full overflow-x-hidden origin-top-right top-0 right-0 bg-black opacity-50 ${
          isOpenCart ? "w-full" : "w-0"
        }`}
        onClick={() => setOpenCartStatus(false)}
      />

      {/* shopping cart section */}
      <div
        className={`fixed z-30 h-full overflow-x-hidden origin-top-right top-0 right-0 font-poppins ${
          isOpenCart ? "w-full sm:w-96" : "w-0"
        }`}
      >
        <div className="w-full h-screen px-4 py-2 flex flex-col bg-ebony-clay">
          <header>
            <div className="flex justify-between items-center mb-8 mt-1">
              <div>
                <h1 className="font-medium text-2xl">Cart</h1>
                <button
                  className="underline text-tower-gray text-sm"
                  onClick={handleClearAllCart}
                >
                  Clear all
                </button>
              </div>
              <ShoppingCartButton
                openCart
                onClick={() => setOpenCartStatus(false)}
              />
            </div>

            <div className="flex gap-2 items-center border-b border-white-transparent">
              <p className="w-2/12 sm:w-3/12">Item</p>
              <span className="w-full"></span>
              <p className="w-2/12 sm:w-3/12 text-center">Price</p>
            </div>
          </header>

          <main className="mt-4 flex-grow h-full overflow-y-scroll">
            {cart.length > 0 ? (
              cart.map(item => <CartItem key={item.id} item={item} />)
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                cart is empty
              </div>
            )}
          </main>

          <footer className="flex flex-col gap-4 border-t border-white-transparent pt-4">
            <div className="flex justify-between">
              <div className="text-sm text-tower-gray">Total card amount</div>
              <div>
                {Object.values(amount).reduce(
                  (prev, current) => prev + current.total,
                  0
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-sm text-tower-gray">Total price</div>
              <div>
                ${" "}
                {Object.values(amount).reduce(
                  (prev, current) =>
                    prev + Number((current.price * current.total).toFixed(2)),
                  0
                )}
              </div>
            </div>

            <button className="w-full py-3 rounded-lg bg-burnt-sienna shadow-burnt-sienna-button text-sm">
              Continue to Payment
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
