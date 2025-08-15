import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/comments/jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'/comments/dummyjson'}>dummyjson</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;