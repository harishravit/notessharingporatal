import styles from "./icons.module.css"
const Icons = ({ hover,tootlipName="", iconName = null, width = null, height = null ,fontsize=null}) => {
    const Style = {
        ...(width && { width }),
        ...(height && { height })
    }
    return (
        iconName && (
            <div data-tootlip={tootlipName} style={Style} className={`icon ${hover ? "icon_hover" : ""} ${styles.icon_box}`}>
                <span className="material-symbols-rounded" style={{fontSize:fontsize}}>{iconName}</span>
            </div>
        )
    )
}
export default Icons;