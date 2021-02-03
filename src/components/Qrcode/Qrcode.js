import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';


function QrCodeGenerator() { 
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const classes = useStyles();


    const generateQrCode = async () => {
    // setText('https://web.facebook.com/aghyadalbalkhi/');
        var text_id = 'https://web.facebook.com/aghyadalbalkhi/';
    try {
        const response = await QRCode.toDataURL(text_id);
        setImageUrl(response);
    }catch (error) {
        console.log(error);
    }
}
    return (
    <Container className={classes.conatiner}>
            <Card>
                <h2 className={classes.title}>Generate Code with React js</h2>
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
