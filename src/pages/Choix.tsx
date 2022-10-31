import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button,Col,Row,Container } from 'react-bootstrap';
import { Wheel } from 'react-custom-roulette'
import 'react-roulette-pro/dist/index.css';
import '../css/Bg.css'

function Choix(){
    interface style{
        display:string;
    }

    let location = useLocation();
    let state:any = location.state;

    const syllabes = [{option:'RA'},{option:'IR'},{option:'TO'},{option:'LU'},{option:'LA'},{option:'PLA'},{option:'CHI'},{option:'Ré'},{option:'UR'},{option:'ITE'},{option:'CHE'},{option:'EUR'},{option:'RO'},{option:'NI'},{option:'VU'},{option:'IS'},{option:'Lé'},{option:'PI'},{option:'INE'},{option:'MA'},{option:'NO'},{option:'FI'},{option:'SA'}]
    const syllabesUsed = []
    const [syllabesLeft,setSyllabesLeft] = useState(syllabes)

    const [canSpin, setCanSpin] = useState(false);
    const [start, setStart] = useState(false);
    const [choice, setChoice] = useState(0);
    const [styleDivResultat,setStyleDivResultat] = useState<style>({display:"none"})

    function randomChoice (){
        var random = Math.round(1 + Math.random() * (syllabesLeft.length ))
        console.log(random)
         setChoice(random)
    }

    const clickLancer = () =>{
        setStart(true)
        setStyleDivResultat({display:"none"})
        randomChoice()
    }
    
    function retirerSyllabe(s:string){
        setSyllabesLeft((current)=>{current.filter((syllabe)=>syllabe.option === s)})
    }

    const wheelStopped = () =>{
        setStyleDivResultat({display:"block"})
        setCanSpin(false)
        setStart(false)
        retirerSyllabe(syllabesLeft[choice].option)
    }

    useEffect(()=>{
        if(state === null){
            console.log('pas state')

        }else if(state.joueurs === undefined){
            console.log('pas joueurs')
            
        }
    },[state])

    
    return(
        <div className='page'>
            <Container>
                <br/>
                <Row>
                    <Col></Col>
                    <Col>
                        <Wheel
                            data={syllabesLeft}
                            prizeNumber={choice}
                            mustStartSpinning={start}
                            backgroundColors={['#3e3e3e', '#df3428']}
                            textColors={['#ffffff']}
                            onStopSpinning={wheelStopped}
                        />
                        <br/>
                        <div style={styleDivResultat} className='Syll'>
                            < label> {syllabes[choice].option}</label>
                        </div>                        
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
