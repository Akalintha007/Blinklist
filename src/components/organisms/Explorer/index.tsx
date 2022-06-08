import {Container} from '@mui/material';
import Typography from '../../atoms/Typography';
import NavIcon from '../../molecules/NavIcon';
import theme from '../../../Themes/main';
import { makeStyles as makeStyle } from '@mui/styles';
import { makeStyles } from '@mui/styles';

import { NavLink } from 'react-router-dom';
import {Theme }from '@mui/system'
// import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import EntrepreneurshipSvgIcon  from '../../atoms/icons-svg/EntrepreneurshipSvgIcon';
import CorporateCultureSvgIcon from '../../atoms/icons-svg/CorporateCultureSvgIcon';
import PoliticsSvgIcon from '../../atoms/icons-svg/PoliticsSvgIcon';
import MarketingSales from '../../atoms/icons-svg/MarketingSales';
import ScienceSvgIcon from '../../atoms/icons-svg/ScienceSvgIcon';
import HealthNutritionSvgIcon from '../../atoms/icons-svg/HealthNutrition';
import PersonalDevelopmentSvgIcon from '../../atoms/icons-svg/PersonalDevelopment';
import EconomicsSvgIcon from '../../atoms/icons-svg/Economics';
import HistorySvgIcon from '../../atoms/icons-svg/History';
import CommunicationSkillsSvgIcon from '../../atoms/icons-svg/CommunicationSkills';
import MotivationInspirationSvgIcon from '../../atoms/icons-svg/MotivationInspiration';
import MoneyInvestmentSvgIcon from '../../atoms/icons-svg/MoneyInvestment';
import PsychologySvgIcon from '../../atoms/icons-svg/Psychology';
import ProductivitySvgIcon from '../../atoms/icons-svg/Productivity';
import SexRelationsSvgIcon from '../../atoms/icons-svg/SexRelations';
import NatureEnvironmentSvgIcon from '../../atoms/icons-svg/NatureEnvironment';
import CareerSuccessSvgIcon from '../../atoms/icons-svg/CareerSuccess';
import EducationSvgIcon from '../../atoms/icons-svg/Education';


const useStyles = makeStyles((themes: Theme)=>({
    // [themes.breakpoints.down('sm')]: {
        
    // },
    topic: {
        fontSize: '16px',
        width: '100vw',
    },
}));


const useStyle= makeStyle({
    root: {
        backgroundColor: theme.palette.backgroundcolor.main,
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        top: '-10px', 
        left: '0px', 
        right: '0px',
        zIndex : '1000',
        paddingLeft: theme.spacing(2)
    },
    container1: {
        display: 'flex',
        justifyItems: 'space-between', 
        alignItems: 'center', 
        height: '80px', 
        borderBottom: '1px solid lightGrey', 
        padding: '0px'
        
    },
    topicText: {
        
        fontWeight: 700
    },
    navs: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    nav:{
        width: '33.3%',
        color: theme.palette.textcolor.light
    }
})

const ExploreComponent = ()=>{
    const classes = useStyle();
    const allClass = useStyles();
    
    const data =[

        {
            'id':1,
            'leftIcon': <EntrepreneurshipSvgIcon />,
            'label': 'Entrepreneurship'
        },
        {
            'id':2,
            'leftIcon': <PoliticsSvgIcon />,
            'label': 'Politics'
        },
        {
            'id':3,
            'leftIcon': <MarketingSales />,
            'label': 'Marketing & Sales'
        },
        {
            'id':4,
            'leftIcon': <ScienceSvgIcon />,
            'label': 'Science'
        },
        {
            'id':5,
            'leftIcon': <HealthNutritionSvgIcon />,
            'label': 'Health & Nutrition'
        },
        {
            'id':6,
            'leftIcon': <PersonalDevelopmentSvgIcon />,
            'label': 'Personal Development'
        },
        {
            'id':7,
            'leftIcon': <EconomicsSvgIcon />,
            'label': 'Economics'
        },
        {
            'id':8,
            'leftIcon': <HistorySvgIcon />,
            'label': 'History'
        },
        {
            'id':9,
            'leftIcon': <CommunicationSkillsSvgIcon />,
            'label': 'Communication Skills'
        },
        {
            'id':10,
            'leftIcon': <CorporateCultureSvgIcon />,
            'label': 'Corporate Culture'
        },
       
        {
            'id':12,
            'leftIcon': <MotivationInspirationSvgIcon />,
            'label': 'Motivation & Inspiration'
        },
        {
            'id':13,
            'leftIcon': <MoneyInvestmentSvgIcon />,
            'label': 'Money & Investments'
        },
        {
            'id':14,
            'leftIcon': <PsychologySvgIcon/>,
            'label': 'Psycology'
        },
        {
            'id':15,
            'leftIcon': <ProductivitySvgIcon />,
            'label': 'Productivity'
        },
        {
            'id':16,
            'leftIcon': <SexRelationsSvgIcon />,
            'label': 'Sex & Relationships'
        },
        {
            'id':17,
            'leftIcon': <NatureEnvironmentSvgIcon />,
            'label': 'Nature & Environment'
        },
        {
            'id':18,
            'leftIcon': <CareerSuccessSvgIcon />,
            'label': 'Career & Success'
        },
        {
            'id':11,
            'leftIcon': <EducationSvgIcon />,
            'label': 'Education'
        }
    ]

    return (
        <Grid className={classes.root} sx={{width:'1440px',height:'398px'}}>
        <Container className={`${classes.container1} ${allClass.topic}`}>
            <Typography  variant1='ESubtitle3' sx={{color: '#116BE9'}} mr={12} className={`${classes.topicText} ${allClass.topic}`}>
                Explore by category
            </Typography>
                <Typography variant1='ESubtitle3' mr={12}  className={`${classes.topicText} ${allClass.topic}`}>
                    See recently added titles
                </Typography>
                <Typography className={`${classes.topicText} ${allClass.topic}`} variant1='ESubtitle3' mr={12}>
                    See popular titles
                </Typography>
        </Container>
        <Container className={classes.navs}>
            {data.map((currData)=>{
                return <Grid item className={classes.nav} key={currData.id}>
                        
                            <NavLink to='/EntrepreneurPage' style={{textDecoration: 'none',color:'#6D787E' }} >
                            <NavIcon {...currData}   data-testid='nav-icon' />
                            </NavLink>
                        
                    </Grid>
            })}
        </Container>
    </Grid>
    )
}
export default ExploreComponent