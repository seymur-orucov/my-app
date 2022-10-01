import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, changePage, page }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((p, i) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={page === p ? "page__current post__item" : "post__item"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
