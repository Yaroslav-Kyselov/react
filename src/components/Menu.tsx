import {Link} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Login'}>Login</Link></li>
                <li><Link to={'/auth/resources'}>Auth Resources</Link></li>
            </ul>
            <hr/>
        </div>
    );
};