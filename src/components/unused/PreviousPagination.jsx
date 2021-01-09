import MyPetsList from "./MyPetsList";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from "react";
import { getInfo, getOwnedPets, getSavedPets, petPagination, petSavedPagination } from '../../lib/api'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";
import MySavePetsPagination from "../pagination/MySavePetsPagination";
import MyOwnedPetsPagination from "../pagination/MyOwnedPetsPagination";

function MyPetsPage(props) {
    //pagination
    const itemLimit = 3;
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    console.log(page,pagination,hasMore);
    useEffect(() => {
        //pagination
        petPagination(page, itemLimit)
            .then(response => {
                setPagination(response.data.results);
                if (!response.data.next) setHasMore(false);
                setPage(prev => prev + 1);
            });

    }, []);

    //pagination
    function fetchData() {
        console.log("fetching")
        petPagination(page, itemLimit)
            .then(response => {
                if (response.data.results.length === 0) setHasMore(false);
                setPagination(prev => [...prev, ...response.data.results]);
                setPage(prev => prev + 1);
            });

    }

    function onSavedPets(e) {
        // setPagination([]);
        // getSavedPets(props.match.params.id)
        //     .then(data => {
        //         setPagination(data.data);
        //     });

        petSavedPagination(props.match.params.id, 1, itemLimit)
            .then(response => {
                // console.log(response);
                setPagination(response.data.results);

            })
    }

    function onMyPets(e) {
        getOwnedPets(props.match.params.id)
            .then(data => {
                setPagination(data.data);
            });
    }

    return (
        // <>
        //     <div>

        //         <Button
        //             variant="contained"
        //             color="primary"
        //             onClick={onSavedPets}
        //         >
        //             Saved Pets
        //         </Button>
        //         <Button
        //             variant="contained"
        //             color="primary"
        //             onClick={onMyPets}
        //         >
        //             My Pets
        //         </Button>
        //     </div>
        //     <InfiniteScroll
        //         dataLength={pagination.length} //This is important field to render the next data
        //         next={fetchData}
        //         hasMore={hasMore}
        //         loader={<h4>Loading...</h4>}
        //     // endMessage={
        //     //     <p style={{ textAlign: 'center' }}>
        //     //         <b>Yay! You have seen it all</b>
        //     //     </p>
        //     // }
        //     // // below props only if you need pull down functionality
        //     // refreshFunction={this.refresh}
        //     // pullDownToRefresh
        //     // pullDownToRefreshThreshold={50}
        //     // pullDownToRefreshContent={
        //     //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        //     // }
        //     // releaseToRefreshContent={
        //     //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        //     // }
        //     >


        //         <MyPetsList pets={pagination} />
        //     </InfiniteScroll>
        // </>

        // <MySavePetsPagination/>
        <MyOwnedPetsPagination/>

    )
}

export default withRouter(MyPetsPage);