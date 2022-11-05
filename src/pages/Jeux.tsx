import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Col,Row,Container } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../css/Bg.css'

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

    const afficheShots = () =>{
        return(
            <div className='shots'>{nbShots}</div>
        )
    }

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

        }else if(state.joueurs === undefined || state.syllabesUsed===undefined){
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
                                {afficheShots}
                        </CountdownCircleTimer>
                    </div>
                </Row>
                <Row>
                    <div className='phraseExp'>Cliquez sur le joueur lorsqu'il perd :</div>
                </Row>
                <Row md={3}>                   
                    {joueurs.map((joueur:IJoueur) =>{
                        return(
                            <Col>
                                <div key={joueur.numero.toString()} className='joueur' onClick={()=>{
                                    joueur.shots = nbShots
                                    setNumeroPerdants(current => [...current,joueur.numero])
                                    }}>{joueur.nom}</div>
                            </Col>
                        )
                    })
                    }                   
                </Row>
            </Container>
        </div>
    )
}

export default Jeux;