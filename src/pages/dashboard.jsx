import Header from '../components/header';
import '../style/dashboard.scss';
import '../style/global_style.scss';
import { Fragment, useEffect, useState } from 'react';
import HorizontalNavBar from '../components/horizontalNavBar';
import VerticalNavBar from '../components/verticalNavBar';
import userInformations from '../databaseTools/userInformations';
import BarChartContainer from '../components/barChart';
import Card from '../components/card';
import AreaChartContainer from '../components/areaChart';
import RadarChartContainer from '../components/radarChart'
import PieChartContainer from '../components/pieChart';
import userAverageSessions from '../databaseTools/userAverageSessions';
import userActivity from '../databaseTools/userActivity';
import userPerformance from '../databaseTools/userPerformance';

function Dashboard() {
  const [firstName, setFirstName] = useState("");
  const [activitiesSessions, setActivitiesSessions] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [activitiesPerformances, setActivitiesPerformances] = useState([]);
  const [score, setScore] = useState([]);
  const [keyData, setKeyData] = useState({});
  const [requestCheck, setRequestCheck] = useState(true);

  useEffect(() => {
    userInformations(process.env.REACT_APP_USER_ID)
    .then((response) => {
      setFirstName(response.data.userInfos.firstName);
    })
    .catch((error) => {
      setRequestCheck(false);
      return;
    });

    userActivity(process.env.REACT_APP_USER_ID)
    .then((response) => {
      const sessionsResults = response.data.sessions;
      sessionsResults.forEach(session => {
        session.day = session.day.split('-')[2];
      })
      setActivitiesSessions(sessionsResults);
    })
    .catch((error) => {
      setRequestCheck(false);
      return;
    });

    userAverageSessions(process.env.REACT_APP_USER_ID)
    .then((response) => {
      const daysTxt = {'1': 'L', '2': 'M', '3': 'M', '4': 'J', '5': 'V', '6': 'S', '7': 'D'};
      const sessions = response.data.sessions;
      sessions.forEach(session => {
        session.day = daysTxt[session.day];
      })
      setAverageSessions(sessions);
    })
    .catch((error) => {
      setRequestCheck(false);
      return;
    });

    userPerformance(process.env.REACT_APP_USER_ID)
    .then((response) => {
      const kindActivity = response.data.kind;
      const activities = response.data.data;
      activities.forEach(activity => {
        activity.kind = kindActivity[activity.kind];
      })
      setActivitiesPerformances(activities);
    })
    .catch((error) => {
      setRequestCheck(false);
      return;
    });

    userInformations(process.env.REACT_APP_USER_ID)
    .then((response) => {
      const sc = response.data.todayScore*100;
      setScore([{todayScore: sc, fill: '#FF0000'}, {todayScore: 100 - sc, fill: 'white'}]);
    })
    .catch((error) => {
      setRequestCheck(false);
      return;
    });

    userInformations(process.env.REACT_APP_USER_ID)
    .then((response) => {
      setKeyData({
        'Calories': {
          dataCount: response.data.keyData.calorieCount,
          srcImg: 'flame.png',
          backgroundColor: '#FF000050'
        },
        'Proteines': {
          dataCount: response.data.keyData.proteinCount,
          srcImg: 'chicken.png',
          backgroundColor: '#4AB8FF50'
        },
        'Glucides': {
          dataCount: response.data.keyData.carbohydrateCount,
          srcImg: 'apple.png',
          backgroundColor: '#FDCC0C50'
        },
        'Lipides': {
          dataCount: response.data.keyData.lipidCount,
          srcImg: 'burger.png',
          backgroundColor: '#FD518150'
        },
      });
    })
    .catch((error) => {
      setRequestCheck(false);
      return;
    });
  }, []);

  if(requestCheck) {
    return (
      <Fragment>
        <HorizontalNavBar></HorizontalNavBar>
        <VerticalNavBar></VerticalNavBar>
        <main>
          <Header name={firstName}></Header>
          <div className='grid-dashboard'>
            <BarChartContainer name={"Activité quotidienne"} data={activitiesSessions}></BarChartContainer>
            <section className='key-data'>
              {Object.keys(keyData).map((keyDataName) => {
                return <Card key={keyDataName} name={keyDataName} data={keyData[keyDataName].dataCount} imgName={keyData[keyDataName].srcImg} backgroundColor={keyData[keyDataName].backgroundColor}></Card>
              })}
            </section>
            <AreaChartContainer name="Durée moyenne des sessions" data={averageSessions}></AreaChartContainer>
            <RadarChartContainer data={activitiesPerformances}></RadarChartContainer>
            <PieChartContainer name="Score" data={score}></PieChartContainer>
          </div>
        </main>
      </Fragment>
    )
  } else {
    return (
      <h2 className='error-data'>Impossible de charger les données</h2>
    )
  }
  }
  
  export default Dashboard;