import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button,Col,Row,Container } from 'react-bootstrap';
import { Wheel } from 'react-custom-roulette'
import 'react-roulette-pro/dist/index.css';
import '../css/Bg.css'

function Choix(){
    interface style{
        display:string;
    }

    interface IJoueur{
        nom:string,
        numero:number,
        shots:number
    }

    let location = useLocation();
    let state:any = location.state;
    let navigate =  useNavigate();

    const syllabes = [{option:'RA'},{option:'IR'},{option:'TO'},{option:'LU'},{option:'LA'},{option:'PLA'},{option:'CHI'},{option:'Ré'},{option:'UR'},{option:'ITE'},{option:'CHE'},{option:'EUR'},{option:'RO'},{option:'NI'},{option:'VU'},{option:'IS'},{option:'Lé'},{option:'PI'},{option:'INE'},{option:'MA'},{option:'NO'},{option:'FI'},{option:'SA'}]
    const [syllabesLeft,setSyllabesLeft] = useState(syllabes)
    const [syllabesUsed,setSyllabesUsed] = useState(state.syllabesUsed)
    const [canSpin, setCanSpin] = useState(false);
    const [canPlay, setCanPlay] = useState(true);
    const [start, setStart] = useState(false);
    const [choice, setChoice] = useState(0);
    const [syllabeChoice,setSyllabeChoice] = useState<string>('');
    const [styleDivResultat,setStyleDivResultat] = useState<style>({display:"none"})

    function randomChoice (){
        var random = Math.round(1 + Math.random() * (syllabesLeft.length ))
        setChoice(random)
        setSyllabeChoice(syllabesLeft[random].option)
    }

    const clickLancer = () =>{
        setStart(true)
        setCanPlay(true)
        setStyleDivResultat({display:"none"})
        randomChoice()
    }

    const clickJouer = () =>{
        navigate('/QRCode',{state:{
            joueurs: state.joueurs,
            syllabesUsed:syllabesUsed,
            syllabe:syllabeChoice
        }})
    }
    
    function retirerSyllabe(s:any){
        setSyllabesUsed(syllabesUsed.concat([s]))
    }
    useEffect(()=>{console.log(syllabesLeft)},[syllabesLeft])

    const wheelStopped = () =>{
        setStyleDivResultat({display:"flex"})
        setCanSpin(false)
        setStart(false)
        retirerSyllabe(syllabesLeft[choice])
        setCanPlay(false)
    }
    
    useEffect(()=>{      
        setSyllabesLeft(syllabes.filter(s => !syllabesUsed.find((ss:any) => ss.option ===s.option)))
    },[syllabesUsed])

    useEffect(()=>{
        if(state === null){
            navigate('/Home')

        }else if(state.joueurs === undefined || state.syllabesUsed===undefined){
            navigate('/Home')           
        }
        else{
            state.joueurs.forEach((joueur:IJoueur) => {
                joueur.shots = 0
            })
        }
    },[state,navigate])

    
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
                        <div style={styleDivResultat} className='Syll text-wrap'>
                             {syllabeChoice}
                        </div>                        
                        <br />
                        <div className="d-grid gap-2">
                            < Button variant='dark' size="lg" disabled={canSpin}  onClick={clickLancer}>Lancer</Button>
                        </div>
                        <br/>
                        <div className="d-grid gap-2">
                            < Button variant='dark' size="lg" disabled={canPlay}  onClick={clickJouer}>Jouer</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Choix
