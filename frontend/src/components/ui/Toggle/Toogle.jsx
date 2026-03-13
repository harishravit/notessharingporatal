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
        <div onClick={()=>setTheme(theme==="light"?"dark":"light")} className={`d-flx rad-24 tooglebox ${styles.toggle}`}>
            <Icon iconName={theme==="light"?"dark_mode":"clear_day"}/>
        </div>
    )
}
export default Toggle;