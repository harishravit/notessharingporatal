import styles from "./Searchbar.module.css";
const Searchbar = ({ children }) => {
    return (
        <div className={`d-flx x-center y-gap-8 rad-24 ${styles.search_box}`}>
            {children}
        </div>
    )
}
Searchbar.Icon = ({children}) => {
    return (
      <span  style={{height:"24px",display:"inline-block"}}>{children}</span>
    )
}
Searchbar.Input=({placeholder="Type here..."})=>{
    return(
        <input
        className={`${styles.search_input}`}
        placeholder={placeholder}
        />
    )
}
export default Searchbar;