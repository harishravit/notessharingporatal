import Styles from "./Notes.module.css"
import { Icon, Profile } from "components"
const Notes = ({ id = null, title = "", authorName = "", authorPic = "", tags = null, des = "" }) => {
    return (
        <div className={`${Styles.notes}`}>
            <div className={`${Styles.notestop}`}>
                <div className={`${Styles.notestopdetails}`}>
                    <div className={Styles.text}>
                        <span className="title">{title}</span>
                        <span className="des">PUBLISER: {authorName}</span>
                    </div>
                    <Profile icon={false} imgData={authorPic} />
                </div>
                <p>{des}</p>
                <div className={`${Styles.notestags}`}>
                    <ul style={{ listStyle: "none", display: 'flex', columnGap: "4px" }}>
                        {tags.map((tag, index) => (
                            <li key={index} className={`${Styles.notetag}`}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${Styles.bottomicons}`}>
                <Icon tootlipName="Comment" hover={true} iconName="comment" fontsize="20px" />
                <Icon tootlipName="Download" hover={true} iconName="download" fontsize="20px" />
                <Icon tootlipName="Share" hover={true} iconName="share" fontsize="20px" />
                <Icon tootlipName="Save notes" hover={true} iconName="bookmarks" fontsize="20px" />
            </div>
        </div>
    )
}
export default Notes;