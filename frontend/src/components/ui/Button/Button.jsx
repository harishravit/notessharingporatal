import {Link} from "react-router-dom"
import Styles from "./Button.module.css"
const Button = ({ IconName = null, Label = "Button", VarientName = "primary", size = "sm", Route = false }) => {
    const iconSize = {
        Size: {
            sm: { fontSize: "12px", lineHeight: "1" },
            md: { fontSize: "14px", lineHeight: "1" },
            lg: { fontSize: "16px", lineHeight: "1" },
            xl: { fontSize: "18px", lineHeight: "1" },
        }
    }
    const BtnVarients = {
        varient: {
            primary: "btn_pri",
            secondry: "btn_sec",
            outline: "btn_out",
            ghost: "btn_gho"
        },
        Size: {
            sm: "btn_sm",
            md: "btn_md",
            lg: "btn_lg",
            xl: "btn_xl"
        }
    }
    const cssClass = `btn ${Styles[BtnVarients.varient[VarientName]]} ${Styles[BtnVarients.Size[size]]}`;

    return (
        Route ? (
            <Link style={{textDecoration:"none"}} className={`${cssClass} icon_tab`} to={`/${Label}`}>
                {IconName && <span className="material-symbols-rounded " style={iconSize.Size[size]} >{IconName}</span>}
                <span className={`btn_text texthide ${Styles.texthide}`}>{Label}</span>
            </Link >
        ) : (
            < button className={`${cssClass} icon_tab`}>
                {IconName && <span className="material-symbols-rounded" style={iconSize.Size[size]} >{IconName}</span>}
                <span className={`btn_text texthide ${Styles.texthide}`}>{Label}</span>
            </button >
        )
    )
}
export default Button;