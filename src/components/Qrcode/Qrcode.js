import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import Footer from "../footer/footer";
import Header from "../header/header";

function QrCodeGenerator() { 
    // const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const classes = useStyles();


    const generateQrCode = async () => {
                            // localStorage.getItem('access_token');
    // setText('https://web.facebook.com/aghyadalbalkhi/');
        // var text_id = 'https://web.facebook.com/aghyadalbalkhi/';
        var text_id = localStorage.getItem('user_id');

    try {
        const response = await QRCode.toDataURL(`{
            "id": 9,
            "full_name": "rand alslaq",
            "userinfo": 25,
            "birthday": "2021-02-06",
            "city": "irbid1",
            "email": "randw@gmail.com",
            "aboutme": "Rannnnnd1",
            "major": "IT"
        }`);
        setImageUrl(response);
    }catch (error) {
        console.log(error);
    }
}
    return (
        <>
        <Header />
    <Container className={classes.conatiner}>
            <Card>
                <h2 className={classes.title}> E-B Card QR Code Generator </h2>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Button className={classes.btn} variant="contained" 
                                color="primary" onClick={() => generateQrCode()}>Generate</Button>
                            <br/>
                            <br/>
                            <br/>
                            {imageUrl ? (
                                <a href={imageUrl} download>
                                    <img src={imageUrl} alt="img"/>
                                </a>) : null}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
    </Container>
    <Footer />
    </>
    );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:  'center',
        background: '#3f51b5',
        color: '#fff',
        padding: 20
    },
    btn : {
        marginTop: 10,
        marginBottom: 20
    }
}));
export default QrCodeGenerator;
