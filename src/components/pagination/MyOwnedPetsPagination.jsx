import MyPetsList from "../pet/MyPetsList";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from "react";
import { petOwnedPagination } from '../../lib/api'
import { withRouter } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";


function MyOwnedPetsPagination(props) {
    const itemLimit = 3;
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        petOwnedPagination(props.match.params.id, page, itemLimit)
            .then(response => {
                setPagination(response.data.results);
                if (!response.data.next) setHasMore(false);
                setPage(prev => prev + 1);
            });

    }, []);

    function fetchData() {
        petOwnedPagination(props.match.params.id, page, itemLimit)
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
            loader={<CircularProgress color="secondary"/>}
        >
        

            <MyPetsList pets={pagination} />
        </InfiniteScroll>

    )
}

export default withRouter(MyOwnedPetsPagination);