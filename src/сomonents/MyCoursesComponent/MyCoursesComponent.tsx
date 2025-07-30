import {coursesArray} from "../../data/arrays-2.ts";
import {CourseComponent} from "../CourseComponent/CourseComponent.tsx";

export const MyCoursesComponent = () => {
    return (
        <div>
            {
                coursesArray.map((value, index:number) => <CourseComponent key={index} item={value}>

                </CourseComponent>)
            }

        </div>

    )
}