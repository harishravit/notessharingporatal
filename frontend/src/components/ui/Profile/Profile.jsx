import { Icon } from "components";
const Profile = ({ imgData, icon, width, height }) => {
    const Style = {
        ...(width && { width }),
        ...(height && { height })
    }
    return (
        <div style={Style} className={icon?`profile_wrapper`:`profile_box`}>
            <img src={imgData} alt="man-1.jpeg" />
            {/* <span className={`material-symbols-rounded text-soft ${Styles.arrow_down}`}>keyboard_arrow_down</span> */}
            {icon && <Icon hover={false} iconName="keyboard_arrow_down" />}
        </div>
    )
}
export default Profile;