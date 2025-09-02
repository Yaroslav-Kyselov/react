import {useSearchParams} from "react-router";

export const PaginationComponent = () => {

    const [searchParams, setsearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div>
            <button onClick={() => {

                setsearchParams({page: (--currentPage).toString()});
            }}>prev
            </button>
            <button onClick={() => {

                setsearchParams({page: (++currentPage).toString()});
            }}>next
            </button>
        </div>
    );
};