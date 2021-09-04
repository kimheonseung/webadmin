import React, { useEffect, useState } from 'react';

function Pagenation({pagingInfo}) {
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(10);
    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(11);
    const [totalPage, setTotalPage] = useState()
 

    return (
        <>

        </>
    )
}

export default Pagenation

