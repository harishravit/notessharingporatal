import { AppLogo } from "assets";
import { Searchbar } from "components";

const Header = () => {
    return (
        <header className="d-flx po:rel wd:full y-gap-auto header">
            <AppLogo />
            <Searchbar>
                <Searchbar.Icon>
                <span className="material-symbols-rounded text-soft">search</span>
                </Searchbar.Icon>
                <Searchbar.Input Placeholder="Search here.."/>
            </Searchbar>
        </header>
    )
}
export default Header;