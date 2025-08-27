import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import type { AppDispatch, RootState } from '../app/store'
import { useEffect } from 'react'
import { singleStudentById } from '../features/student/studentSlice'

const StudentDetail = () => {

  const { singleStudent, error, loading } = useSelector(
    (state: RootState) => state.students
  )
  
  const dispatch = useDispatch<AppDispatch>()
  let params= useParams()
  console.log(params)


  useEffect(() => {
    if(params.id){

      dispatch(singleStudentById(Number(params.id)))
    }
  }, [params.id,dispatch])
  /*const student = {
    id: '1',
    name: 'Alice Johnson',
    age: 21,
    major: 'Computer Science',
    courses: [
      { courseName: 'Algorithms', grade: 'A' },
      { courseName: 'Data Structures', grade: 'B+' },
    ],
  }*/

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-white mb-10 rounded-xl border border-gray-300">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Student Details
      </h1>

      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold text-gray-900">ID:</span> {" "}{singleStudent.id}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Name:</span>{' '}
          {}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Age:</span>{' '}
          {}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Major:</span>{' '}
          {}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Courses
      </h2>
      <ul className="space-y-2">
        {/*{singleStudent.courses.map((course, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 border rounded-lg p-3"
          >
            <span className="text-gray-700">{course.courseName}</span>
            <span className="font-semibold text-indigo-600">
              {course.grade}
            </span>
          </li>
        ))}*/}
      </ul>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default StudentDetail