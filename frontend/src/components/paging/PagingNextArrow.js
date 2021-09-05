import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function PagingNextArrow({next, nextPage, end, totalPage}) {

    return (
        <>
            {
                next ?
                    <li className="page-item">
                        <a className="page-link" data-page={''+nextPage}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                    </li>
                :
                    <li className="page-item disabled">
                        <a className="page-link" data-page={''+1}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                    </li>
            }
            {
                totalPage > end ?
                    <li className="page-item">
                        <a className="page-link" data-page={''+totalPage}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </a>
                    </li>
                :
                    <li className="page-item disabled">
                        <a className="page-link" data-page={''+totalPage}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </a>
                    </li>
            }
        </>
    )
}

export default PagingNextArrow;