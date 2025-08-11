import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/a'}>home a</Link></li>
                <li><Link to={'/b'}>home b</Link></li>
            </ul>
        </div>
    );
};

export default Menu;