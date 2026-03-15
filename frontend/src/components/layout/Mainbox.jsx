import {Link, Route, Routes} from "react-router-dom"
import {Icon,Button} from "components"
import Noteswrapper from "./Noteswrapper"
const Mainbox = () => {
    return (
        <div>
            <section className="main_wrapper">
                <div style={{width:"auto%",display:"flex",justifyContent:'space-between',alignItems:"center"}} className="bread_cumb">
                    <ul style={{display:"inline-flex",columnGap:"4px"}}>
                        <li className="isActivate"><Link to="/notes">Notes</Link></li>
                    </ul>
                    <Button Label="Filter" IconName="filter_list" size="lg"/>
                </div>
                <Noteswrapper/>
            </section>
        </div>
    )
}
export default Mainbox;