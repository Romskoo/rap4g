
import { useLocation,useNavigate } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import {Form, Button,Col,Row,Container } from 'react-bootstrap';
import '../css/Bg.css'



function Home(){
    interface IJoueur{
        nom:string,
        numero:number,
        points:number
    }

    let navigate = useNavigate();
    const [joueurs, setJoueurs] = useState<IJoueur[]>([{nom:'',numero:0,points:0}]);

    const goChoice = () =>{
        if(joueurs.length > 1){
            console.log(joueurs)
            navigate('/Choix',{
                state:{
                    joueurs:joueurs
                }
            })
        }       
    }
    return(
        <div className='page'>
            <Container >
                <br/>
                <Row >
                    <Col ></Col>
                    <Col>
                            {joueurs.map((joueur:IJoueur)=>{
                                return(
                                    <div key={joueur.numero.toString()}>
                                        <Form.Control size="lg" type="text" placeholder={'Joueur '+joueur.numero} onChange={(e:any)=>{
                                                joueur.nom = e.target.value
                                                if(joueur.numero === joueurs.length-1){
                                                    setJoueurs( current => [...current,{nom:'',numero:joueurs.length,points:0}])
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