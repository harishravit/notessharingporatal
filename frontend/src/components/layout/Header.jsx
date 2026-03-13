import { AppLogo } from "assets";
import { Searchbar, Icon, Toggletheme } from "components";
const Header = () => {
    return (
        <header className="d-grd wd:full y-gap-24 x-gap-8 header">
            <AppLogo />
            <Searchbar>
                <Searchbar.Icon>
                    <span className="material-symbols-rounded text-soft" style={{ height: "1.2rem", width: "1.2rem", fontSize: "1.2rem" }}>search</span>
                </Searchbar.Icon>
                <Searchbar.Input Placeholder="Search here.." />
            </Searchbar>
            <div className="d-flx wd:full y-gap-12">
                <Toggletheme />
                <Icon iconName="notifications" />
            </div>
        </header>
    )
}
export default Header;