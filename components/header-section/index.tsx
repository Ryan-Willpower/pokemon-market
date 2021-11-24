import { SearchBar } from "../searchbar"

export function HeaderSection() {
  return (
    <header className="flex justify-between py-8">
      <h1 className="text-2xl font-medium">Pokemon market</h1>
      <div>
        <SearchBar />
        <button>x</button>
      </div>
    </header>
  )
}
