import styles from "./icons.module.css"
const Icons = ({ iconName }) => {
    return (
        <div className={`icon rad-24 ${styles.icon_box}`}>
            <span className="material-symbols-rounded" >{iconName}</span>
        </div>
    )
}
export default Icons;