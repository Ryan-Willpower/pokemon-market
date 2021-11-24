export function HeaderSection() {
  return (
    <header className="flex justify-between py-8">
      <h1 className="text-2xl font-medium">Pokemon market</h1>
      <div>
        <input placeholder="Search by Name" />
        <button>x</button>
      </div>
    </header>
  )
}
