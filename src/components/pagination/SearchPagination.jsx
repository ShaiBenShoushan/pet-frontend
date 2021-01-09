import MyPetsList from "../pet/MyPetsList";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from "react";
import { searchPagination } from '../../lib/api'
import { withRouter } from 'react-router-dom';


function SearchPagination(props) {
    console.log(props);
    const itemLimit = 3;
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        searchPagination(props.location.search, page, itemLimit)
            .then(response => {
                setPagination(response.data.results);
                if (!response.data.next) setHasMore(false);
                setPage(prev => prev + 1);
            });

    }, []);

    function fetchData() {
        searchPagination(props.location.search, page, itemLimit)
            .then(response => {
                if (response.data.results.length === 0) setHasMore(false);
                setPagination(prev => [...prev, ...response.data.results]);
                setPage(prev => prev + 1);
            });

    }


    return (
        <InfiniteScroll
            dataLength={pagination.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >


            <MyPetsList pets={pagination} />
        </InfiniteScroll>

    )
}

export default withRouter(SearchPagination);