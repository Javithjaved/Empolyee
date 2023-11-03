import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
const Sidebar = () => {
        const Navigate=useNavigate(); 
    return (
        <>
                <div className="row p-0">
                    <div className="col">
                        <div className="sidebar list-group ">
                            <a href="" className="list-group-item list-group-item-action home hover-bg-red p-3  "><Icon className="icon" icon="ic:baseline-home" /> Home  <span className="unicode">&#10095;</span></a>
                            <a href="" className="list-group-item list-group-item-action home p-3" onClick={()=>Navigate("/DashBoard")}><Icon className='icon' icon="lucide:layout-dashboard" />  Dashboard <span className="unicode">&#10095;</span></a>
                            <a href="" className="list-group-item list-group-item-action home p-3"><Icon className="icon" icon="mingcute:user-setting-line" /> Service <span className="unicode">&#10095;</span></a>
                            <a href="" className="list-group-item list-group-item-action home p-3"><Icon className="icon" icon="majesticons:phone-retro-line" /> Contacts <span className="unicode">&#10095;</span></a>
                            <a href="" className="list-group-item list-group-item-action home p-3"> <Icon className="icon" icon="material-symbols:person-outline" /> About Us <span className="unicode">&#10095;</span></a>                           
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Sidebar;