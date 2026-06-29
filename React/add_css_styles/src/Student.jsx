import PropTypes from 'prop-types'

const studentPropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

function Student({ name = "Guest", age = 0, isStudent = false }) {
    PropTypes.checkPropTypes(studentPropTypes, { name, age, isStudent }, 'prop', 'Student')

    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.propTypes = studentPropTypes

export default Student