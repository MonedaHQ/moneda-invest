import { useRouter } from 'next/router';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import styles from './styles/pagination.module.css';
import { useState } from 'react';
import { PAGE_SIZE } from '@/utils/config';

function Pagination({ count }) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const currentPage = !router.query.page ? 1 : +router.query.page;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    router.push(
      `/investor-relations/reports?${new URLSearchParams({
        page: String(next),
      }).toString()}`
    );
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    router.push(
      `/investor-relations/reports?${new URLSearchParams({
        page: String(prev),
      }).toString()}`
    );
  }

  if (pageCount <= 1) return null;
  return (
    <div className={styles.pagContainer}>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>
      <div className={styles.btnWrapper}>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`${styles.button} ${
            currentPage === 1 ? styles.inactive : styles.active
          }`}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`${styles.button} ${
            currentPage === pageCount ? styles.inactive : styles.active
          } transition-all`}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
