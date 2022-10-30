
import { useLocation,useNavigate } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';

function Home(){
    interface IJoueur{
        nom:string,
        numero:number,
        points:number
    }

    const [joueurs, setJoueurs] = useState<IJoueur[]>([{nom:'',numero:1,points:0}]);

    const changeNom = (e:string)=>{

    }
    return(
        <div>
            {joueurs.map((joueur:IJoueur)=>{
                return(
                    <div>
                        <input type='text' placeholder={'joueur'+joueur.numero} onChange={(e:any)=>{joueur.nom = e}}></input>
                    </div>
                );
            })

            }
        </div>
    );
}
export default Home;