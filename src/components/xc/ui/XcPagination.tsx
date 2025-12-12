import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { IXcComponent } from "@/types/xc/xc-ui";
import { useEffect, useState } from "react";
import * as R from "ramda";

interface XcPaginationProps extends Omit<IXcComponent, "width"> {
  totalElements: number;
  page: number;
  size: number;
  visiblePageCount: number;
  onPageChange: (page: number) => void;
}

const XcPagination = ({
  className = "",
  totalElements,
  page,
  size,
  visiblePageCount,
  height,
  onPageChange
}: XcPaginationProps) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalElements / size));
  const [startPage, setStartPage] = useState(Math.floor((page - 1) / visiblePageCount) * visiblePageCount + 1);
  const [endPage, setEndPage] = useState(Math.min(startPage + visiblePageCount - 1, totalPages));
  const [pages, setPages] = useState<number[]>(R.range(startPage, endPage + 1));

  const [hasPrevSection, setHasPrevSection] = useState(startPage > 1);
  const [hasNextSection, setHasNextSection] = useState(endPage < totalPages);

  useEffect(() => {
    setTotalPages(Math.ceil(totalElements / size));
  }, [totalElements]);

  useEffect(() => {
    setStartPage(Math.floor((page - 1) / visiblePageCount) * visiblePageCount + 1);
  }, [page]);

  useEffect(() => {
    setEndPage(Math.min(startPage + visiblePageCount - 1, totalPages));
  }, [startPage, totalPages]);

  useEffect(() => {
    setPages(R.range(startPage, endPage + 1));
    setHasPrevSection(startPage > 1);
    setHasNextSection(endPage < totalPages);
  }, [startPage, endPage]);

  return (
    <>
      {totalElements > size && (
        <Pagination
          className={cn("xc-pagination", className)}
          style={{ height }}
        >
          <PaginationContent className="xc-pagination-content">

            <PaginationItem>
              <PaginationLink
                className={cn("xc-pagination-prev first", { "xc-disabled": !hasPrevSection })}
                onClick={() => onPageChange(Math.max(1, startPage - visiblePageCount))}
              >
                <i />
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                className={cn("xc-pagination-prev", { "xc-disabled": page === 1 })}
                onClick={() => page > 1 && onPageChange(page - 1)}
              >
                <i />
              </PaginationLink>
            </PaginationItem>

            {pages.map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  isActive={p === page}
                  className={cn(
                    "xc-pagination-number",
                    { "xc-pagination-number-active": p === page }
                  )}
                  onClick={() => onPageChange(p)}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationLink
                className={cn("xc-pagination-next", { "xc-disabled": page === totalPages })}
                onClick={() => page < totalPages && onPageChange(page + 1)}
              >
                <i />
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                className={cn("xc-pagination-next last", { "xc-disabled": !hasNextSection })}
                onClick={() => onPageChange(Math.min(totalPages, endPage + 1))}
              >
                <i />
              </PaginationLink>
            </PaginationItem>

          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default XcPagination;
