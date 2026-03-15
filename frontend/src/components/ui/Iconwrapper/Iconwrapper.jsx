import {Icon,Toggletheme} from "components";
import styles from "./Iconwrapper.module.css";
const Iconwrapper = () => {
    return (
        <div className={`tooglebox ${styles.icon_wrapper}`}>
            <Toggletheme />
            <Icon hover={true}iconName="notifications" />
        </div>)
}
export default Iconwrapper;