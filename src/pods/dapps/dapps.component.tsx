import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography } from '@material-ui/core';
import TaxiYa from '../../assets/images/TaxiYa.png';
import { DappCard } from '../components/dappCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 1,
    '@media screen and (max-width: 925px)': {
      justifyContent: 'center',
    }
  },
  media: {
    height: 240,
  },
  title: {
    textAlign: 'center',
    margin: '2rem',
  }
});



export const DappsComponent: React.FC = () => {

  const classes = useStyles();

  return (
    <Container >
    <Typography variant="h3" className={classes.title}>
      Dapps
    </Typography>
    <div className={classes.root}>

        <DappCard
          headerText="Taxi Ya"
          img={TaxiYa}
          route="taxi-ya"
          text="Taxi Ya, su aplicación de movilidad"
          textButton="Ir a Taxi Ya"
          title="Taxi Ya Título"
        />

        <DappCard
          headerText="Texto Cabecera"
          img={TaxiYa}
          route="routes.TaxiYa"
          text="Taxi Ya"
          textButton="Ir a Taxi Ya"
          title="Taxi Ya Título"
        />

      <DappCard
          headerText="Texto Cabecera"
          img={TaxiYa}
          route="routes.TaxiYa"
          text="Taxi Ya"
          textButton="Ir a Taxi Ya"
          title="Taxi Ya Título"
        />

        <DappCard
          headerText="Taxi Ya"
          img={TaxiYa}
          route="taxi-ya"
          text="Taxi Ya, su aplicación de movilidad"
          textButton="Ir a Taxi Ya"
          title="Taxi Ya Título"
        />

        <DappCard
          headerText="Texto Cabecera"
          img={TaxiYa}
          route="routes.TaxiYa"
          text="Taxi Ya"
          textButton="Ir a Taxi Ya"
          title="Taxi Ya Título"
        />

      <DappCard
          headerText="Texto Cabecera"
          img={TaxiYa}
          route="routes.TaxiYa"
          text="Taxi Ya"
          textButton="Ir a Taxi Ya"
          title="Taxi Ya Título"
        />

    </div>
    </Container>
  )
}

