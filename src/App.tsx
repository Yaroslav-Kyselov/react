import './App.css'
import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import {UsersComponent} from "./components/some/UsersComponent.tsx";

function App() {

    return (
        <div>
            <PaginationComponent/>


            <UsersComponent/>
        </div>
    );
}

export default App
