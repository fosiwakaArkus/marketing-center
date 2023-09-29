import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import './options.css';
import Link from '@mui/material/Link';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Options() {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-around"
                        spacing={2}
                        item
                    >

                        <Grid item xs={12} md={4}>
                            <Item elevation={0} >
                                <img src='images/marketing.svg' className='optionImage' />
                                <div className=''>
                                    <p className='title'>Automated
                                        Marketing Packages</p>
                                    <p className='subTitle'>
                                        Pre-created marketing packages
                                        for your newly listed properties.
                                    </p>
                                </div>
                                <Link href="/" underline="none" color={'#699abd'} fontWeight={'bold'}> Learn About AMPs  </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item elevation={0}>
                                <img src='images/neighborhoods.svg' className='optionImage' />
                                <p className='title'>Farm New
                                    Neighborhoods</p>
                                <p className='subTitle'>
                                    Purchase mailing lists & send
                                    materials directly to prospects.
                                </p>
                                <Link href="/" underline="none" color={'#699abd'} fontWeight={'bold'}> Your List is Waiting  </Link>
                            </Item>
                        </Grid>
                        <Grid className='contai' item xs={12} md={4}>
                            <Item elevation={0}>
                                <img src='images/facebook.svg' className='optionImage' />
                                <p className='title'>Walled Garden
                                    Facebook Ads </p>
                                <p className='subTitle'>
                                    Facebook marketing without
                                    time-consuming guesswork.
                                </p>
                                <Link href="/" underline="none" color={'#699abd'} fontWeight={'bold'}>Get Started Now </Link>
                            </Item>
                        </Grid>
                        {/* <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container> */}
                        {/* <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                sx={{ height: 100, width: 100 }}
                                image="/images/facebook.svg"
                                title="facebook"
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card> */}
                        {/* <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Options