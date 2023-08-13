import * as Icon from 'react-bootstrap-icons';
const Dashboard = () => {
    return (
        <div className={"container-fluid"}>

            <div className={"container border border-dark rounded content-justify-center"} style={{marginTop: "5%"}}>
                {/*row*/}
                <div className={"row"}> 
                    {/* list of on going researches */}
                    <div className={"col-md-8 border border-dark rounded content-justify-center"}>
                            <p>This is list of reseaches</p>
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