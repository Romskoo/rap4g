import { useLocation,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button,Col,Row,Container } from 'react-bootstrap';
import { Wheel } from 'react-custom-roulette'
import 'react-roulette-pro/dist/index.css';
import '../css/Bg.css'

function Choix(){
    interface style{
        display:string;
    }

    let navigate = useNavigate();
    let location = useLocation();
    let state:any = location.state;

    const syllabes = [{option:'RA'},{option:'IR'},{option:'TO'},{option:'LU'},{option:'LA'},{option:'PLA'},{option:'CHI'},{option:'Ré'},{option:'UR'}]
    
    const [canSpin, setCanSpin] = useState(false);
    const [start, setStart] = useState(false);
    const [choice, setChoice] = useState(0);
    const [styleDivResultat,setStyleDivResultat] = useState<style>({display:"none"})

    function randomChoice (){
        var random = Math.round(1 + Math.random() * (syllabes.length ))
        console.log(random)
         setChoice(random)
    }

    const clickLancer = () =>{
        randomChoice()
        setStart(true)
    }

    const wheelStopped = () =>{
        setStyleDivResultat({display:"block"})
        setCanSpin(true)
    }

    const afficheDivLogin = () =>{
        if(styleDivResultat.display === "none")
            setStyleDivResultat({display:"block"})
        else
            setStyleDivResultat({display:"none"})
    }

    useEffect(()=>{
        console.log(location)
        if(state === null){
            console.log('pas state')

        }else if(state.joueurs === undefined){
            console.log('pas joueurs')
            
        }
    },[])

    
    return(
        <div className='page'>
            <Container>
                <br/>
                <Row>
                    <Col></Col>
                    <Col>
                        <Wheel
                            data={syllabes}
                            prizeNumber={choice}
                            mustStartSpinning={start}
                            backgroundColors={['#3e3e3e', '#df3428']}
                            textColors={['#ffffff']}
                            onStopSpinning={wheelStopped}
                        />
                        <br/>
                        < label style={styleDivResultat}> {syllabes[choice].option}</label>
                        <br />
                        <div className="d-grid gap-2">
                            < Button variant='dark' size="lg" disabled={canSpin}  onClick={clickLancer}>Lancer</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Choix