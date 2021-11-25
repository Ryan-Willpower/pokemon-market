import { PaginationProps } from "./type"

export function Pagination({ setPage, pageCount, pageIndex }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-3 my-5">
      {pageIndex > 1 && (
        <button
          className="rounded border border-white-transparent-dark p-2"
          onClick={() => setPage(pageIndex - 1 > 1 ? pageIndex - 1 : 1)}
        >
          Previous
        </button>
      )}

      <span>page: {pageIndex}</span>

      {pageIndex < pageCount && (
        <button
          className="rounded border border-white-transparent-dark p-2"
          onClick={() =>
            setPage(pageIndex + 1 <= pageCount ? pageIndex + 1 : pageCount)
          }
        >
          Next
        </button>
      )}
    </div>
  )
}
