import React from 'react'
import { Pagination } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const MyPagination = (props) => {
    const { pages, currentPage, page_function, prev_function, next_function } = props;
    var items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => page_function(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div style={{ height: "5vh" }}>
            <Pagination className='pointer'>
                <Pagination.Prev disabled={currentPage === 1 || currentPage === 0} onClick={prev_function} ><FaAngleLeft></FaAngleLeft></Pagination.Prev>
                {items}
                <Pagination.Next disabled={currentPage === pages || pages === 0 || pages === 1} onClick={next_function} ><FaAngleRight></FaAngleRight></Pagination.Next>
            </Pagination>
        </div>
    )
}

export default MyPagination