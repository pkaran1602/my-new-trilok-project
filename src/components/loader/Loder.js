import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loder = () => {
    return (
        <div style={{ height: "70vh", display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#43B6F3"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loder