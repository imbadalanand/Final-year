import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

const Pagination = () => {
    const {page, setPage} = useState();
    return (
        <div>
            {/* <div className="pagination_btn">
                <button onClick={() => getPrevPage(page)}>Prev</button>
                <p>
                    {page} of {setPage}
                </p>
                <button onClick={() => getNextPage(setPage)}>Next</button>
            </div> */}
        </div>
    )
}

export default Pagination
