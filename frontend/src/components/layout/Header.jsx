import { AppLogo } from "assets";
import { Searchbar, Iconwrapper,Profile } from "components";
const Header = () => {
    return (
        <header className="header">
            <AppLogo />
            <Searchbar>
                <Searchbar.Icon>
                    <span className="material-symbols-rounded text-soft" style={{ height: "1.2rem", width: "1.2rem", fontSize: "1.2rem" }}>search</span>
                </Searchbar.Icon>
                <Searchbar.Input Placeholder="Search here.." />
            </Searchbar>
            <Iconwrapper/>
            <Profile icon={true} imgData="./src/assets/Images/man-1.jpeg"/>
        </header>
    )
}
export default Header;