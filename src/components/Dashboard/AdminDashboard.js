import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'
import Appointments from './Appointments'
import { faHospitalUser, faCalendarCheck, faBackward, faTh, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SplitPane from 'react-split-pane';
import { userContext } from '../../context/UserContext';
import { Button } from 'react-bootstrap';
import Patients from './Patients';


const AdminDashboard = () => {
     const {signOUtUser} = useContext(userContext)
        const styles = {
            background: '#000',
            width: '2px',
            cursor: 'col-resize',
            margin: '0 5px',
            height: '200%',
        };

    return (
        <Router>
            <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={100}
            resizerStyle={styles}
            >
            <menu className="dashboard__menu">
                <div><Link className="Link-common" to="/dashboard"><FontAwesomeIcon icon={faTh}/>Dashboard</Link></div>
                <div><Link className="Link-common" to="/dashboard/appointment"><FontAwesomeIcon icon={faCalendarCheck}/>Appointment</Link></div>
                <div><Link className="Link-common" to="/dashboard/patients"><FontAwesomeIcon icon={faHospitalUser}/>Patients</Link></div>
                <div className="dashboard-logout"><Button className="btn-danger" onClick={signOUtUser}><FontAwesomeIcon icon={faSignOutAlt}/>Log Out</Button></div>

                <div className="dashboard-back-to-home"><a className="btn-dark" href="/"><FontAwesomeIcon icon={faBackward}/>Home</a></div>
            </menu>
            <div>
                <Route exact path="/dashboard" component={Home} />
                <Route path="/dashboard/appointment" component={Appointments} />
                <Route path="/dashboard/patients" component={Patients} />
            </div>
            </SplitPane>
        </Router>
    );
};

export default AdminDashboard;