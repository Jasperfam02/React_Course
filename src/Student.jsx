
import styles from './student/student.module.css'
function Student(props){

    return(
        <div className={styles.container}>
            <p>Name:{props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Student