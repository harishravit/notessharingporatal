import { useEffect, useState } from "react"
import styles from "./Toggle.module.css"
import {Icon} from "components"

const Toggle = () => {
    const[theme,setTheme]=useState('light');
    useEffect(()=>{
        document.documentElement.classList.remove("light","dark");
        document.documentElement.classList.add(theme)
    },[theme])
    return (
        <div  onClick={()=>setTheme(theme==="light"?"dark":"light")} className={`tooglebox ${styles.toggle} icon_hover`}>
            <Icon hover={false} iconName={theme==="light"?"dark_mode":"clear_day"}/>
        </div>
    )
}
export default Toggle;