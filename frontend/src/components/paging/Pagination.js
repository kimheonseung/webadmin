import React from 'react';
import PagingNextArrow from './PagingNextArrow';
import PagingNumber from './PagingNumber';
import PagingPrevArrow from './PagingPrevArrow';

function Pagination({
    prev,
    next,
    page,
    start,
    end,
    prevPage,
    nextPage,
    totalPage,
    pageList,
    handleClick,}) { 

    return (
        <>
            <ul className="pagination pagination-sm">
                <PagingPrevArrow start={start} prev={prev} prevPage={prevPage} />
                {
                    pageList?.map((number, idx) => {
                        return <PagingNumber key={idx} page={page} number={number} handleClick={handleClick} />
                    })
                }
                <PagingNextArrow next={next} nextPage={nextPage} end={end} totalPage={totalPage} />
            </ul>
        </>
    )
}

export default Pagination;

