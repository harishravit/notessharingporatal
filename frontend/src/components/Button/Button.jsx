import styles from "./Button.module.css"
const Button = ({ children, size="md", RightIcon, LeftIcon }) => {
  const classVariants = {
    lg: "btn_lg",
    md: "btn_md"
  }
  return (
    <button className={`d-flx self-flx-s ${styles[classVariants[size]]}`}>
      {RightIcon && <span><RightIcon/> </span>}
      {children}
      {LeftIcon && <span><LeftIcon/></span>}

    </button>
  )
}
export default Button;