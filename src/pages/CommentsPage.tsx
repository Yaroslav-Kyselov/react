import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/comments/jsonplaceholder'}>jsonComments</Link></li>
                <li><Link to={'/comments/dummyjson'}>dummyComments</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;