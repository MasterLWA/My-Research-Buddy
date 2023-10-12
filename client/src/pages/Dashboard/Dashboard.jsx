import ResearchList from '../../Components/ResearchList';
import SideNav from '../../Components/SideNav';
const Dashboard = () => {
    return (
        <div className={"container-fluid"}>

            <div className={"container content-justify-center"} style={{marginTop: "5%"}}>
                {/*row*/}
                <div className={"row"}> 
                    {/* list of on going researches */}
                    <div className={"col-md-8"}>
                            <ResearchList />
                    </div>

                    {/* Buttons to navigate other functions */}
                    <div className={"col-md-4"}>
                            <SideNav />
                    </div> 
                </div>
            </div>

        </div>



    )
}

export default Dashboard