import "./Pagination.css";

function Pagination({ list, setPagination, paginationNum }) {
  let lengthPagination = Math.ceil(list.length / 9);

  return (
    <div className="pagination">
      <ul>
        {Array.from({ length: lengthPagination }, (_, index) => index).map(
          (pageIndex, index) =>
            paginationNum === pageIndex + 1 ? (
              <li
                className="border-gold"
                key={pageIndex}
                onClick={(e) => setPagination(e.target)}
              >
                {pageIndex + 1}
              </li>
            ) : (
              <li key={pageIndex} onClick={(e) => setPagination(e.target)}>
                {pageIndex + 1}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Pagination;
