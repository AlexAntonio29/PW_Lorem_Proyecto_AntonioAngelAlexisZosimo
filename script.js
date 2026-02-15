


/*
1. Capturar eventos del botón **Generate Lorem Ipsum**
2. Leer:
   - Cantidad ingresada
   - Tipo seleccionado (párrafos o palabras)
3. Generar texto Lorem Ipsum dinámicamente
4. Mostrar el texto generado dentro del `<textarea>`
5. Validar:
   - Que el número sea mayor a 0
   - Que exista una opción seleccionada

---

##  Funcionalidades Mínimas Esperadas

-  El botón genera texto
-  El texto aparece en pantalla
-  Se puede elegir entre párrafos o palabras

-  La interfaz es clara y ordenada
-  El código está correctamente indentado
*/




//declaracion de variables

const validarActions=()=>{


}

const activateTimer=()=>{
    
    setTimeout(()=>{
        console.log("Activando Timer");
        message.textContent="";
    },2000);

}


const getResourcePage=()=>{
//aqui los datos se actualizan por defecto cuando se recarga la pagina
if(r1.checked===true)r2.checked=false;
else if(r2===true) r1.checked=false;

words=Math.floor(Math.random() * (110 - 70 + 1)) + 70;
txt.textContent="paragrhaps"


    if(switchManager.checked){

        body.classList.add("darkmode")
        
    }else{
        body.classList.remove("darkmode")
    }


}

const getRadio=(e)=>{

    const target=e.target;

    console.log(target.name);

    if(target.name==="rword") {
        r1.checked=false;
        txt.textContent="words";

    }
    else if(target.name==="rpar"){ 
        r2.checked=false;

        txt.textContent="paragrhaps"
    }
    
}

const generadorPalabra=()=>{

    let select=Math.floor(Math.random() * (textComplete.length - 1 + 1)) + 1;;

    let n=0;
    let word="";
    let selectWord=false;

    for(let i=0;i<textComplete.length;i++){
        word=word+textComplete[i];
        if(select===i)selectWord=true
        if(textComplete[i]===" ") {
            if(selectWord) return word
            n++; 
            word='';
        }

    }

}




const cargarFormulario=(e)=>{

    let textoEditor="";

    e.preventDefault();
    
    


    console.log(parseInt(number.value));
    if((parseInt(number.value))){
        words=parseInt(number.value);
      if(txt.textContent==="words"){
        if(words>100){
        paragrhaps=parseInt(parseInt(number.value))/100;
        words=parseInt(number.value)/paragrhaps;
    }else paragrhaps=1;
       

    
        
      }else{
        paragrhaps=parseInt(number.value);
         words=(Math.floor(Math.random() * (110 - 70 + 1)) + 70);
      }

    


        //console.log("palabra: "+generadorPalabra());
      for(let i=0;i<paragrhaps;i++){

                for(let j=0;j<words;j++)
                textoEditor+=generadorPalabra();
            textoEditor=textoEditor+"\n\n";
      }


        console.log(textoEditor);

        textArea.value=textoEditor;

        resultados.textContent="words: "+(words*paragrhaps)+" paragrhaps: "+paragrhaps;

        message.textContent="successful";
        activateTimer();
    
    }
    else{
        alert("Agrega un numero!!");
    }

    //console.log("cantidad palabras: "+ cantidadPalabras());

    //console.log(textComplete);





    
}


const getSwitch=(e)=>{
    const target=e.target;
    console.log(target.checked);
    if(target.checked){

        body.classList.add("darkmode")
        
    }else{
        body.classList.remove("darkmode")
    }

  
}

const copyPortpaper=()=>{

    if(textArea.value.trim().length !== 0){

        navigator.clipboard.writeText(textArea.value);
        
        message.textContent="Contenedor Copiado";
        activateTimer();

    }else{
        message.textContent="Contenedor vacío";
        activateTimer();
    }
}



let words;
let paragrhaps;

let resultados=document.getElementById("resultados");
let message=document.getElementById("message");

const r1=document.getElementById("rParagraphs");
const r2=document.getElementById("rWord");

const txt=document.getElementById("text");

const input=document.getElementById("inputNumber");


const textArea=document.getElementById("textArea");

const formulario=document.getElementById("formulario");

const text1=document.getElementById("text1");
const text2=document.getElementById("text2");
const text3=document.getElementById("text3");
const text4=document.getElementById("text4");
const text5=document.getElementById("text5");
const text6=document.getElementById("text6");

const textComplete=text1.textContent+" "+
                   text2.textContent+" "+
                   text3.textContent+" "+
                   text4.textContent+" "+
                   text5.textContent+" "+
                   text6.textContent;

const number=document.getElementById("inputNumber");

const switchManager=document.getElementById("switch");

const body=document.getElementById("body");

const copyText=document.getElementById("copy");


//funciones
getResourcePage();

r1.addEventListener('change',getRadio);
r2.addEventListener('change',getRadio);

switchManager.addEventListener("change", getSwitch)
formulario.addEventListener('submit',cargarFormulario);

copyText.addEventListener('click',copyPortpaper);




