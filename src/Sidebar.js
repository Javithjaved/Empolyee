import { Icon } from '@iconify/react';
const Sidebar = () => {
    return (
        <>
                <div className="row">
                    <div className="col">
                        <div className="sidebar list-group ">
                            <a href="#" className="list-group-item list-group-item-action home mt-3  "><Icon className="icon" icon="ic:baseline-home" /> Home  <span className="unicode">&#10095;</span></a>
                            <a href="#" className="list-group-item list-group-item-action home mt-3"><Icon className="icon" icon="mingcute:user-setting-line" /> Servies <span className="unicode">&#10095;</span></a>
                            <a href="#" className="list-group-item list-group-item-action home mt-3"><Icon className="icon" icon="majesticons:phone-retro-line" /> Contacts <span className="unicode">&#10095;</span></a>
                            <a href="#" className="list-group-item list-group-item-action home mt-3"> <Icon className="icon" icon="material-symbols:person-outline" /> About Us <span className="unicode">&#10095;</span></a>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Sidebar;