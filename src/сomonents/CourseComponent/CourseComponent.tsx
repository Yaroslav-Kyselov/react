import type {ICourses} from "../../models/ICourses.tsx";

interface CourseComponentProps {
    item: ICourses
    children: React.ReactNode
}

export const CourseComponent = ({item}: CourseComponentProps, index: number) => {
    return (
        <div key={index} className='my-2 border-4'>
            <h2>{item.title}</h2>
            <p>Duration: {item.monthDuration} months</p>
            <p>Hours: {item.hourDuration}</p>
            <h3 className='my-10'>Modules:</h3>
            <ul>
                {item.modules.map((module, idx) => (
                    <li key={idx}>{module}</li>
                ))}
            </ul>
        </div>
    )


}