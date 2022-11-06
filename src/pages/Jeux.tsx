import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Col,Row,Container } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../css/Bg.css'
import imageVerre from '../images/verre.png'

function Jeux(){
    interface IJoueur{
        nom:string,
        numero:number,
        shots:number
    }

    var location = useLocation();
    var state = location.state;
    var navigate = useNavigate()
    const [joueurs,setJoueurs] = useState<IJoueur[]>([]);
    const [nbShots,setNbShots] = useState<number>(2)
    const [numeroPerdants,setNumeroPerdants] = useState<number[]>([])
    const [nbPerdantMax,setNbPerdantMax] = useState(1)


    useEffect(()=>{
        if(joueurs.length > 0)
            setNbPerdantMax(Math.ceil(joueurs.length * 0.3))
        
    },[joueurs])

    useEffect(()=>{
        if(numeroPerdants.length === nbPerdantMax){
            navigate('/Fin',{state:{
                joueurs: joueurs,
                syllabesUsed:state.syllabesUsed
            }})
        }
    },[numeroPerdants,nbPerdantMax,joueurs,navigate,state.syllabesUsed])

    useEffect(()=>{
        if(state === null){
            console.log('pas state')
            navigate('/Home')

        }else if(state.joueurs === undefined || state.syllabesUsed===undefined || state.syllabe === undefined){
            console.log('pas joueurs')
            navigate('/Home')
            
        }else{
            setJoueurs(state.joueurs)
        }
    },[state,navigate])

    
    return(
        <div className='page Jeux'>
            <Container>
                <Row>
                    <Col>
                        <div className='pt-3 ps-3 countdown'>                       
                            <CountdownCircleTimer
                                isPlaying
                                duration={30}
                                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                                colorsTime={[ 30,20,10, 0]}
                                onComplete={() => {
                                    setNbShots(nbShots+1)
                                    return { shouldRepeat: true }
                                }}
                                >
                                {({ remainingTime }) => remainingTime}
                            </CountdownCircleTimer>
                        </div>
                    </Col>
                    <Col className='colNbSHots'>
                        <div className='nbShots'>
                            {nbShots}
                            <img src={imageVerre} alt='verre' width='20em'/>
                        </div>
                    </Col>
                    <Col className='colNbSHots'>
                        <div className='nbShots'>
                            Rîmes en : {state.syllabe}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <br/>
                    <div className='phraseExp'>Cliquez sur le joueur lorsqu'il perd :</div>
                </Row>
                <Row md={3}>                   
                    {joueurs.map((joueur:IJoueur) =>{
                        if(joueur.nom !== ''){
                            return(
                                <Col>
                                    <div key={joueur.numero.toString()} className='joueur' 
                                        style={{backgroundColor: joueur.shots !== 0 ? 'red': '#7b7b8b'}}
                                        onClick={()=>{
                                            if(joueur.shots === 0){
                                                joueur.shots = nbShots
                                                setNumeroPerdants(current => [...current,joueur.numero])
                                            }                                   
                                        }}>{joueur.nom}</div>
                                </Col>
                            )
                        }
                        
                    })
                    }                   
                </Row>
            </Container>
        </div>
    )
}

export default Jeux;