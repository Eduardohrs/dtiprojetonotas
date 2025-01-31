
import {useNavigate} from "react-router"

function Start() {
  const navigate = useNavigate();
  return (
    <button onClick={()=>navigate("/start")} style={{height:50,width:200,backgroundColor:'greenyellow',fontSize:18,fontWeight:'bold',translate: "5%"}}>
      
      Iniciar
    </button>
  );
}
function Logo(){
  return(
    <img
    src="https://cdn-icons-png.flaticon.com/512/6309/6309839.png"
    alt=""
    style={{width:200,height:200}}
    />
  )
}


export default function HomePage(){
  return(
    <div>
     
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        
        paddingTop: "1%",
        fontSize: 50,
        fontWeight: "bold"
        
      }}> Grade Tracker</h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        
        paddingTop: "2%",
        paddingBottom: "2%"
      }}>
      
      <Logo />


      </div>
      
      
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        
        fontSize: 25,
        fontWeight: "normal"
      }}>Seja bem vindo ao Grade Tracker
      </h1>
      


      <div style={{
        display: 'flex',
        justifyContent: 'center',
       
        paddingTop: "2%",
      
      }}>
        
        <Start />
    
      </div>

    </div>
  );
}
