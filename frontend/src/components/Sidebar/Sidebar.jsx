import {Button} from "components"
import styles from "./Sidebar.module.css"
import {Search,Bell} from "assets"
const Sidebar=()=>{
    return(
        <div className={`d-flx ${styles.sidebar}`}>
            <Button size="lg" RightIcon={Search} LeftIcon={Bell}>Downlaod</Button>
        </div>
    )
}
export default Sidebar;