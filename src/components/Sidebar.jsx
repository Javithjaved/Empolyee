import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { product_actions } from "../redux/actions/actions.js";
import { useDispatch } from "react-redux";
const SideBar = ({ active, setActive }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className=" list-group sidebar">
                <Link to={"/dashboard"}><p className={`${active === "dashboard" ? " home1   rounded-3  bg-light mt-1 mb-0" : " text-decoration-none   list-group-item-action home  p-3 mb-0 mt-1 mb-0"}  list-group-item-action   p-3`} onClick={() => setActive("dashboard")}><Icon className='icon' icon="lucide:layout-dashboard" />  DashBoard <span className="unicode ">&#10095;</span></p></Link>
                <Link to={"/table-fts-dashborad"}><p className={`${active === "table-fts-dashborad" ? " home1  rounded-3  bg-light mt-1 mb-0" : " text-decoration-none   list-group-item-action home  p-3  p-3 mb-0"} list-group-item list-group-item-action  p-3`} onClick={() => setActive("table-fts-dashborad")}  ><Icon className="icon" icon="carbon:dashboard" /> FTS DashBoard<span className="unicode">&#10095;</span></p></Link>
                <Link to={"/product-list"}><p className={`${active === "product-list" ? " home1  rounded-3  bg-light mt-1 mb-0 " : " text-decoration-none   list-group-item-action home  p-3  p-3 mb-0"} list-group-item list-group-item-action  p-3`} onClick={() => { setActive("product-list"); product_actions(dispatch); }}  ><Icon className="icon" icon="material-symbols:production-quantity-limits" /> Product Shop <span className="unicode">&#10095;</span></p></Link>
            </div>
        </>
    )
}
export default SideBar;