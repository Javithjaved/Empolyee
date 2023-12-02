import { Link} from "react-router-dom";
import { Icon } from '@iconify/react';
const SideBar = ({active,setActive}) => {
    return (
        <>
            <div className=" list-group sidebar">
                <Link to={"/dashboard"}><p className={`${active === "dashboard"?" home1   rounded-3  bg-light mt-1":" text-decoration-none   list-group-item-action home  p-3 mt-1"}  list-group-item-action   p-3`} onClick={()=>setActive("dashboard")}><Icon className='icon' icon="lucide:layout-dashboard" />  Dashboard <span className="unicode ">&#10095;</span></p></Link>
                <Link to={"/employee"}><p className={`${active === "employee"?" home1  rounded-3  bg-light mt-1":" text-decoration-none   list-group-item-action home  p-3  p-3"} list-group-item-action   p-3`} onClick={()=>setActive("employee")} ><Icon className="icon" icon="mingcute:user-4-fill" /> User Profile  <span className="unicode">&#10095;</span></p></Link>
                <Link to={"/fts-new-user"}><p className={`${active === "fts-new-user"?" home1  rounded-3  bg-light mt-1":" text-decoration-none   list-group-item-action home  p-3  p-3"} list-group-item-action   p-3`} onClick={()=>setActive("fts-new-user")} ><Icon className="icon" icon="solar:user-bold-duotone" /> FTS New User <span className="unicode">&#10095;</span></p></Link>
                <Link to={"/table-fts-dashborad"}><p className={`${active === "table-fts-dashborad"?" home1  rounded-3  bg-light mt-1":" text-decoration-none   list-group-item-action home  p-3  p-3"} list-group-item list-group-item-action  p-3`} onClick={()=>setActive("table-fts-dashborad")}  ><Icon className="icon" icon="carbon:dashboard" /> FTS User Register <span className="unicode">&#10095;</span></p></Link>
            </div>
        </>
    )
}
export default SideBar;