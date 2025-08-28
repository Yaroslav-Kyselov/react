import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users/jsonplaceholder'}>jsonUSERS</Link></li>
                <li><Link to={'/users/dummyjson'}>dummyUSERS</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};

export default UsersPage;