import {useEffect} from "react";
import {useSearchParams} from "react-router";


export const SomeComponent = () => {

    const [query,setQuery]= useSearchParams()
    useEffect(() => {
         const pg = query.get('pg');
            fetch('https://reqres.in/api/users?page='+pg)
                .then(value => value.json())
                .then(values => {
                    console.log(values);
                })

    }, [query]);


    return (
        <div>
            some content
        </div>
    );
};