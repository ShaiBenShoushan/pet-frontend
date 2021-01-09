import { Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

function User(props) {
    const { email, _id } = props.data;
    return (
        <li>
            <h4>email: {email}</h4>
            <Button variant="contained" color="primary">
                <Link to={`${props.location.pathname}/${_id}`}>
                    See More
                </Link>
            </Button>
        </li>
    )
}

export default withRouter(User);