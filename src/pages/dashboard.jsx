import Header from '../components/header';
import '../style/dashboard.scss';
import { Fragment, useEffect, useState } from 'react';
import HorizontalNavBar from '../components/horizontalNavBar';
import userInformations from '../databaseTools/userInformations';
// import userAverageSessions from '../databaseTools/userAverageSessions';
// import userActivity from '../databaseTools/userActivity';
// import userPerformance from '../databaseTools/userPerformance';

function Dashboard() {
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    userInformations(18).then((response) => {
      setFirstName(response.data.userInfos.firstName)
    });
  }, []);
  
  return(
    <Fragment>
      <HorizontalNavBar></HorizontalNavBar>
      <Header name={firstName}></Header>
    </Fragment>
    );
  }
  
  export default Dashboard;