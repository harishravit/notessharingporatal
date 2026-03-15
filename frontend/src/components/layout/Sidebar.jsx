import { Button } from "components"
const Sidebar = () => {
    return (
        <aside className="Sidebar">
            <div className="main_side">
                <span className="text-soft" >Main</span>
                <div style={{ display:"flex",flexDirection:"column",rowGap: "8px" }}>
                    <Button Route={true} IconName="download" Label="Download" VarientName="primary" size="lg" />
                    <Button Route={true} IconName="delete" Label="Trash notes" VarientName="ghost" size="lg" />
                    <Button IconName="group_add" Label="Join group" VarientName="ghost" size="lg" />
                    <Button IconName="add_notes" Label="Create notes" VarientName="ghost" size="lg" />
                    <Button Route={true} IconName="bookmark_check" Label="Save notes" VarientName="ghost" size="lg" />
                </div>
            </div>
        </aside>
    )
}
export default Sidebar;