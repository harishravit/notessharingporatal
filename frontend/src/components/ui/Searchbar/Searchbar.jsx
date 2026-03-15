import styles from "./Searchbar.module.css";
const Searchbar = ({ children }) => {
    return (
        <div className={`search ${styles.search_box}`}>
            {children}
        </div>
    )
}
Searchbar.Icon = ({children}) => {
    return (
      <span  style={{height:"1.2rem",width:"1.2rem",display:"inline-flex",alignItems:"center",justifyContent:"center"}}>{children}</span>
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