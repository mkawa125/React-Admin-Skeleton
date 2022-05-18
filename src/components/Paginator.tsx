import React from "react";

const Paginator = (props: {page:number, lastPage:number, pageChanged: (page: number) => void}) => {
    

    const next = () => {
        if (props.page < props.lastPage) {
            props.pageChanged(props.page + 1);
        }
    }

    const previous = () => {
        if (props.page >= 1) {
            props.pageChanged(props.page - 1)
        }
    }

    return (
        <nav>
            <ul className="pagination mt-6">
                <li className="page-item">
                    <a href="#" onClick={previous} className="page-link text-blue-600">Previous</a>

                    <a href="#" onClick={next} className="page-link text-blue-600 mx-4">
                            Next
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Paginator