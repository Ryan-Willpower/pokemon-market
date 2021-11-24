import { SearchBar } from "../searchbar"
import { ShoppingCartButton } from "../shopping-cart-button"

export function HeaderSection() {
  return (
    <header className="flex items-center justify-between py-8">
      <h1 className="text-2xl font-medium">Pokemon market</h1>
      <div className="flex items-center gap-4">
        <SearchBar />
        <ShoppingCartButton />
      </div>
    </header>
  )
}
