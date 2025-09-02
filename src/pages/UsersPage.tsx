import {UsersComponents} from "../components/Users/UsersComponents.tsx";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <PaginationComponent/>
            <UsersComponents/>
        </div>
    );
};