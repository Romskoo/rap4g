import { useLocation, useNavigate } from 'react-router-dom';
import {  useEffect } from 'react';
import { Button,Col,Row,Container } from 'react-bootstrap';
import QRCode from "react-qr-code";
import '../css/Bg.css'

function QRCodePage(){
    var location = useLocation();
    var state = location.state;
    var navigate = useNavigate()
    const instru = "https://youtu.be/Czc03MYZm8s"

    useEffect(()=>{
        if(state === null){
            navigate('/Home')

        }else if(state.joueurs === undefined || state.syllabesUsed===undefined){
            navigate('/Home')           
        }
    },[state,navigate])

    const goJeux = () =>{
        navigate('/Jeux',{state:{
            joueurs:state.joueurs,
            syllabesUsed:state.syllabesUsed
        }})
    }

    return(
        <div className='page'>
            <Container>
                <br/>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className='phraseQRCode'>Scannez le QRCode pour accéder à une instru :</div>
                        <br/>
                        <div className='divQRCode'>
                            <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "70%", width: "70%" }}
                            value={instru}
                            viewBox={`0 0 256 256`}
                            />
                        </div>
                        <br/>
                        <div className="d-grid gap-2">
                            < Button variant='dark' size="lg" onClick={goJeux}>Continuer</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default QRCodePage