import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function PagingPrevArrow({start, prev, prevPage}) {

    return (
        <>
            {
                start > 1 ?
                    <li className="page-item">
                        <a className="page-link" data-page={''+1}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </a>
                    </li>
                :
                    <li className="page-item disabled">
                        <a className="page-link" data-page={''+1}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </a>
                    </li>
            }
            {
                prev ?
                    <li className="page-item">
                        <a className="page-link" data-page={''+prevPage}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </a>
                    </li>
                :
                    <li className="page-item disabled">
                        <a className="page-link" data-page={''+prevPage}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </a>
                    </li>
            }
        </>
    )
}

export default PagingPrevArrow;