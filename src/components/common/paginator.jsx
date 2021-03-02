import React, { useState } from 'react';
import style from './paginator.module.css'

const Paginator = (props) => {
   
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;


    return (

        <div className={style.paginatorContainer}>
            {
                portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>PREV</button>
            }
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p.toString()} className={p === props.currentPage ? style.selected : undefined}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
            {
                portionNumber < portionCount && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>NEXT</button>
            }

        </div>
    );
}

export default Paginator;