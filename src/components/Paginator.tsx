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

            <div className="inline-flex rounded-md shadow-sm mt-4">
                <a href="#" onClick={previous} aria-current="page" className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Previous
                </a>
                
                <a href="#" onClick={next} className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Next
                </a>
            </div>

            {/* <ul className="pagination mt-6">
                <li className="page-item">
                    <a href="#" onClick={previous} className="page-link text-blue-700 border p-2 rounded  bg-gray-100 w-24">Previous</a>

                    <a href="#" onClick={next} className="page-link text-blue-700 mx-4  border p-2 rounded bg-gray-100 w-32">
                            Next
                    </a>
                </li>
            </ul> */}
        </nav>
    );
}

export default Paginator