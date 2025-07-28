import './CoursesComponent.css'
import {coursesAndDurationArray} from "../../data/arrays-2.ts";
import type {CourseModel} from "../../models/CourseModel.tsx";
import {CourseComponent} from "../Course-Component/CourseComponent.tsx";


export const CoursesComponent=()=>{
    return (
        <ul>
            {
                coursesAndDurationArray.map((course:CourseModel, index:number) => {
                    return <CourseComponent course={course} key={index}/>;
                })
            }
        </ul>
    );
}