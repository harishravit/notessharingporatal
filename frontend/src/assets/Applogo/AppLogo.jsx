import styles from "./AppLogo.module.css"
const AppLogo = () => {
    return (
        <div className="Logo-wrapper d-flx x-center y-gap-8 logo">
            <span className={`${styles.logo_wrapper}`}>
                <span className="material-symbols-rounded">account_box</span>
            </span>
            <span className={`${styles.logo_text}`}>EduWallet</span>
        </div>
    )
}
export default AppLogo