import * as Icon from 'react-bootstrap-icons';
import ResearchList from '../../Components/ResearchList';
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
                    <div className={"col-md-4 border border-dark rounded content-justify-center text-center"}>
                            <p>this is navigation to other functions</p>
                    </div> 
                </div>
            </div>

        </div>



    )
}

export default Dashboard