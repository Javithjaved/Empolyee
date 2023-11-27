import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
const SideBar = () => {
    const Navigate = useNavigate();
    return (
        <>
            <div className=" list-group sidebar">
                <p className="list-group-item list-group-item-action home  p-3 " onClick={() => Navigate("/dashboard")}><Icon className='icon' icon="lucide:layout-dashboard" />  Dashboard <span className="unicode">&#10095;</span></p>
                <p className="list-group-item list-group-item-action home  p-3   " onClick={() => Navigate("/employee")}><Icon className="icon" icon="mingcute:user-4-fill" /> User Profile  <span className="unicode">&#10095;</span></p>
                <p className="list-group-item list-group-item-action home p-3 " onClick={() => Navigate("/fts-new-user/:id")}><Icon className="icon" icon="solar:user-bold-duotone" /> FTS New User <span className="unicode">&#10095;</span></p>
                <p className="list-group-item list-group-item-action home p-3 " onClick={() => Navigate("/table-fts-dashborad")}><Icon className="icon" icon="carbon:dashboard" /> FTS User Register <span className="unicode">&#10095;</span></p>
            </div>
        </>
    )
}
export default SideBar;