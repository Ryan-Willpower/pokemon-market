export interface FilterProps {
  name: string
  data: string[]
  position?: FilterDropdownPosition
  onUpdateFilter: (value: string) => void
}
