import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button,Col,Container } from 'react-bootstrap';
import '../css/Bg.css'

function Fin(){
    interface IJoueur{
        nom:string,
        numero:number,
        shots:number
    }

    var location = useLocation();
    var state = location.state;
    var navigate = useNavigate()
    const [joueurs,setJoueurs] = useState<IJoueur[]>([]);

    const goJeux = () =>{
        navigate('/Choix',{state:{
            joueurs:joueurs,
            syllabesUsed:state.syllabesUsed
        }})
    }

    useEffect(()=>{
        if(state === null){
            console.log('pas state')
            navigate('/Home')

        }else if(state.joueurs === undefined){
            console.log('pas joueurs')
            navigate('/Home')
            
        }else{
            setJoueurs(state.joueurs)
        }
    },[state,navigate])

    return(
        <div className='page Fin'>
            <Container>
                <Col></Col>
                <Col className='infos'>
                    <div >
                        {joueurs.map((joueur:IJoueur)=>{
                            return(    
                                <div className='infoJoueurs'>{joueur.nom +" dois boire "+joueur.shots+" gorgées"}<br/></div>
                                
                            )
                        })}
                    </div>
                    <div>
                        <Button variant="dark" size="lg" onClick={goJeux}> Rejouer </Button>
                    </div>
                </Col>
                <Col></Col>
            </Container>
        </div>
    )
}

export default Fin;