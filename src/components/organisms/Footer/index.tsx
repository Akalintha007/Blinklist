import {Container, Box} from '@mui/material';
import Logo from '../../molecules/Logo';
import Typography from '../../atoms/Typography';
const FooterComponent = (props:any)=>{
    const data = [
        {
            'id':601,
            'heading': 'Editorial',
             'topics': [
                 
                 'Book lists',
                 'What is Notfication?',
                 'What to read next?',
                 'Benefits of reading'
             ]
        },
        {
            'id':602,
            'heading': 'Useful links',
             'topics': [
                 'Pricing',
                 'Blinkist business',
                 'Gift cards',
                 'Blinkist magazine'
             ]
        },
        {
            'id':603,
            'heading': 'Company',
             'topics': [
                 'About',
                 'Carrer',
                 'partners',
                 'Code of Conduct'
             ]
        } 
    ]
    return (
        <Box 
        sx={{
          height:'270px',
          width:'100%', 
          backgroundColor: '#F1F6F4',
          display: 'flex',
          position: 'sticky',
          top: '100vh',
          padding: '24px 0px',
          marginTop: '24px'}} >
          <Container sx={{display: 'flex', justifyContent:'start'}} >
            <Box sx={{marginRight:'150px'}}>
                <Logo height= {32} width={32} url= 'https://i.ibb.co/KVbz1Y1/blinklist-logo.png'  data-testid='logo'/>
                <Typography variant="subtitle1" sx={{ color: '#0365F2'}} style={{ textAlign: "left"}} data-testid='slogan'>
                    Big ideas in small packages<br/>
                    Start learning now
                </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'end',}}>
                {
                    
                    data.map(curr => {
                        return (<Box key={curr.id} sx={{
                            margin: '0px 32px'

                        }} data-testid='topics'>
                            <Typography variant="body1" pb={2} sx={{display:'flex',justifyContent:'start',color:'#03314B'}}>
                                {curr.heading}
                            </Typography>
                            {
                                curr.topics.map(currTopic => {
                                    return <Typography variant="body2" pb={1} sx={{display:'flex',justifyContent:'start',color:'#6D787E'}} key={currTopic}>
                                        {currTopic}
                                    </Typography>
                                })
                            }
                        </Box>)
                    })
                }
            </Box>
        </Container>
        </Box>   
    )
}

export default FooterComponent;