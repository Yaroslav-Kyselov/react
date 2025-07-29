import {coursesArray} from "../../data/arrays-2.ts";
import './MyCourses.css'

export const MyCoursesComponent = () => {
    return (
        <div>

            {
                coursesArray.map((course, index) => (
                    <div key={index} className='my-2 border-4'>
                        <h2>{course.title}</h2>
                        <p>Duration: {course.monthDuration} months</p>
                        <p>Hours: {course.hourDuration}</p>
                        <h3 className='my-10'>Modules:</h3>
                        <ul >
                            {course.modules.map((module, idx) => (
                                <li key={idx}>{module}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}