//import react bootstrap icons
import * as Icon from 'react-bootstrap-icons';
const SideNav = () => {   
    return(
        <div>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">

                {/* Dashboard */}
              <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
              <Icon.HouseDoorFill /> Dashboard </a>
              
                    {/* AI Assistance */}
                <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                <Icon.CupHotFill /> AI Assistance </a>

                    {/* Todo-list */}
                <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                <Icon.JournalText /> Todo-list </a>

                    {/* Profile */}
                <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                <Icon.Person /> Profile </a>


            </div>
          </div>
        </nav>
        </div>
    )
}

export default SideNav;