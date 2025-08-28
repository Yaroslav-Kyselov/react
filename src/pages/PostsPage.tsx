import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/posts/jsonplaceholder'}>jsonPOSTS</Link></li>
                <li><Link to={'/posts/dummyjson'}>dummyPOSTS</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default PostsPage;