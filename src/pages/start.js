import { useState } from "react";





var studentlist=[];
  
export default function TerminalModePage(){
  const [inputText, setInputText] = useState("");
  const [outputLista, setOutputLista] = useState("");
  const [outputInfo, setOutputInfo] = useState("");
  const validate = () =>{
    var studentcard=inputText.split(" ")
    var i=0;
    var errorlist=[];

    
    i=0
    while(i<studentlist.length){
      if(studentcard[0] === studentlist[i][0]){
        errorlist.push("Nome ja esta em uso");
      }
      i++;
    }
    if(!(parseFloat(studentcard[6])>=0)||!(parseFloat(studentcard[6])<=100)){
      errorlist.push("Frequencia Invalida, insira um valor de 0% a 100%");
    }
    
    if(studentcard.length===7){
      if(studentcard[6].slice(-1)!=="%"){
        errorlist.push("Frequencia Invalida, insira um valor de 0% a 100%");
      }
    }
    i=1
    while(i<6){
      if(!(studentcard[i]>=0) ||!(studentcard[i]<=10)){
        errorlist.push("Nota na disciplina "+i+" invalida, insira um numero de 0 a 10");
      }
      i++;
    }
    if(!(studentcard.length===7)){
      errorlist=[]
      errorlist.push("Por favor, insira os valores no formato mostrado ao lado e com apenas um espaço os separando");
      
    }

    if(errorlist.length>0){
      setOutputLista(errorlist.join("\n"));
      setOutputInfo("")
    }
    else{
      addgrade();
    }
  }
  const addgrade = () => {
    
    var studentcard=inputText.split(" ");
    studentlist.push(studentcard);
    var j=0;
    var i=0;
    var nalunos= studentlist.length;
    var mediasturma=[0,0,0,0,0];
    var listadealunos=[];
    var mediageralturma=0;
    var mediasalunos=[];
    var alunosacimadamedia=[];
    var alunosinfrequentes=[];

    //calculador de media da turma por disciplina
    while(j<5){
      i=0;
      while (i<nalunos){
        mediasturma[j]= mediasturma[j]+studentlist[i][j+1]/nalunos;
        
        //constroi string lista de alunos
        listadealunos[i]=studentlist[i].join(" ");

        //constroi array do tamanho da lista de alunos para calcular media por aluno mais a frente
        mediasalunos[i]=0;

        i++;
      }
      mediageralturma=mediageralturma+mediasturma[j]/5
      mediasturma[j]=mediasturma[j].toFixed(1);
      j++;
    }

    //calcula media por aluno e determina alunos acima da media
    i=0
    while(i<nalunos){
      j=0;
      while (j<5){
        mediasalunos[i]= mediasalunos[i]+studentlist[i][j+1]/5;
        j++;
      }
      if(mediasalunos[i]>mediageralturma){
        alunosacimadamedia.push(studentlist[i][0])
      }
      
      //determina alunos infrequentes
      if(parseFloat(studentlist[i][6])<75){
        alunosinfrequentes.push(studentlist[i][0]);
      }
      i++;
    }
    
    setOutputLista(
    "Lista de Alunos\n\n"+listadealunos.join("\n")
  );
    setOutputInfo(
    "\n\nMedia da turma por disciplina\nD1  D2  D3  D4  D5\n"+mediasturma.join(" ")+
    "\n\nAlunos acima da media da turma:\n"+alunosacimadamedia.join("\n")+
    "\n\nAlunos com frequencia abaixo da permitida:\n"+ alunosinfrequentes.join("\n")
    );
  };
    return(
      
      <div>
        

      {/*Logo*/} 
        <h1 style={{
        
          display: 'flex',
          justifyContent: 'center',
          paddingTop: "1%",
          fontSize: 50,
          fontWeight: "bold"
        }}> Grade Tracker</h1> 
        <div style={{
          
          display: 'flex',
          justifyContent: 'right',
          translate: "-34% -130%"
        }}>
        <img src="https://cdn-icons-png.flaticon.com/512/6309/6309839.png" 
          alt="" 
          style={{width:80,height:80}}/>
        </div>
      
      {/*Input Terminal*/}
        <div style={{
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: "45vh",
          paddingTop: "8vh"
          }}>
          <textarea   onChange={(e) => setInputText(e.target.value)} placeholder={"Insira as notas aqui, para adicionar ao sistema, aperte o botão abaixo"}
          style={{width: "80vh", fontSize:25,overflow:"scroll",Height:"25%",maxHeight:"25%",minHeight:"25%",maxWidth:"50%",minWidth:"50%"}}>
            
          </textarea>
          </div>
        
      {/*Submit Button*/}
        <div style={{
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingTop: "5vh"
          }}>
          <button onClick={validate} style={{height:"5vh", width:"20vh"}}>
            Adicionar Nota
          </button>
          </div>


       {/*Lista Terminal*/}
       <div style={{
          position: "absolute",
          top:"50%",
          left:"50%",
          translate:"-100% -70%"
          }}>
        <textarea value={outputLista} justifyContent="center" readOnly style={{maxHeight:"40vh",minHeight:"40vh",maxWidth:"70vh",minWidth:"70vh"}}>
          
        </textarea> 
        </div>

        {/*Info Terminal*/}
       <div style={{
          position: "absolute",
          top:"50%",
          left:"50%",
          translate:"0% -70%"
          }}>
        <textarea value={outputInfo} placeholder="Insira as notas no formato <nome> <nota disciplina 1> <nota disciplina 2> <nota disciplina 3> <nota disciplina 4> <nota disciplina 5> <frequencia> Exemplo: Joao 10 10 10 10 10 100%" justifyContent="center" readOnly style={{maxHeight:"40vh",minHeight:"40vh",maxWidth:"70vh",minWidth:"70vh"}}>
          
        </textarea> 
        </div>
      </div>

     
    );
  }
  