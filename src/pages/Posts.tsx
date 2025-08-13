import {Link, Outlet} from "react-router-dom";

const Posts = () => {
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

export default Posts;