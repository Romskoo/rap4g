
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Form, Button,Col,Row,Container } from 'react-bootstrap';
import '../css/Bg.css'



function Home(){
    interface IJoueur{
        nom:string,
        numero:number,
        shots:number
    }

    let navigate = useNavigate();
    const [joueurs, setJoueurs] = useState<IJoueur[]>([{nom:'',numero:0,shots:0}]);

    const goChoice = () =>{
        if(joueurs.length > 1){
            console.log(joueurs)
            navigate('/Choix',{
                state:{
                    joueurs:joueurs,
                    syllabesUsed:[]
                }
            })
        }       
    }
    return(
        <div className='page'>
            <Container >
                <br/>
                <Row >
                    <Col >
                        <div className='logo'>
                            <span className='rap' style={{color:'white'}}>Rap</span><span className='4g' style={{color:'red',fontWeight:'bold'}}>4G</span>
                        </div>
                    </Col>
                    <Col>
                            {joueurs.map((joueur:IJoueur)=>{
                                return(
                                    <div key={joueur.numero.toString()}>
                                        <Form.Control size="lg" type="text" placeholder={'Joueur '+joueur.numero} onChange={(e:any)=>{
                                                joueur.nom = e.target.value
                                                if(joueur.numero === joueurs.length-1){
                                                    setJoueurs( current => [...current,{nom:'',numero:joueurs.length,shots:0}])
                                                }                           
                                            }} />
                                        <br/>
                                    </div>
                                );
                            })

                            }
                        <div className="d-grid gap-2">
                            <Button variant="dark" size="lg" onClick={goChoice}> Commencer </Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Home;