import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/posts/jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'/posts/dummyjson'}>dummyjson</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default PostsPage;