import {Icon} from "components";
import Styles from "./Nodatadisplay.module.css"
const NoDataDisplay = ({msg,des}) => {
    return (
        <div className={Styles.displaybox}>
            <Icon  height="120px" fontsize="8rem" hover={false} iconName="no_sim" />
            <div className={`${Styles.content}`}>
            <h4>No Notes yet</h4>
            <p>Join any community to get notes</p>
            </div>
        </div>
    )
}
export default NoDataDisplay;