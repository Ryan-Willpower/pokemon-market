import { Dispatch, SetStateAction } from "react"

export interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>
  pageIndex: number
  pageCount: number
}
