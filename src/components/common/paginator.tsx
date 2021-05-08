import React, { useState, FC } from 'react';
import style from './paginator.module.css'

type PropsType = {
    totalItemsCount: number | null
    pageSize: number | null
    portionSize: number | null
    currentPage: number | null
    onPageChanged: (pageNumber: number) => void
}

const Paginator: FC<PropsType> = (props) => {

    let totalItemsCountChecked = props.totalItemsCount === null ? 100 : props.totalItemsCount
    let pageSizeChecked = props.pageSize === null ? 10 : props.pageSize
    let portionSizeChecked = props.portionSize === null ? 10 : props.portionSize

    let pagesCount = Math.ceil(totalItemsCountChecked / pageSizeChecked);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSizeChecked);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSizeChecked + 1;
    let rightPortionPageNumber = portionNumber * pageSizeChecked;


    return (

        <div className={style.paginatorContainer}>
            {
                portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p.toString()} className={p === props.currentPage ? style.selected : undefined}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            {
                portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }

        </div>
    );
}

export default Paginator;