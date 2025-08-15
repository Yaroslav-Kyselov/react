import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users/jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'/users/dummyjson'}>dummyjson</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default UsersPage;