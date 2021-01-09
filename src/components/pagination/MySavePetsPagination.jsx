import MyPetsList from "../pet/MyPetsList";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from "react";
import { petSavedPagination } from '../../lib/api'
import { withRouter } from 'react-router-dom';


function MySavedPetsPagination(props) {
    const itemLimit = 3;
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        petSavedPagination(props.match.params.id, page, itemLimit)
            .then(response => {
                setPagination(response.data.results);
                if (!response.data.next) setHasMore(false);
                setPage(prev => prev + 1);
            });

    }, [props.match.params.id, page]);

    function fetchData() {
        petSavedPagination(props.match.params.id, page, itemLimit)
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

export default withRouter(MySavedPetsPagination);