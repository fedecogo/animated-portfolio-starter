import "./sidebar.scss"
import ToggleBTN from "./links/Links"
import Links from "./links/Links"

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="bg">
                <Links/>
            </div>
            <ToggleBTN/>
            
        </div>
    )
}

export default Sidebar