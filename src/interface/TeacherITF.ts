import {StudentITF} from "./StudentITF"
export interface TeacherITF {
    name: String,
    age?: number,
    class: string
    students: StudentITF,
}