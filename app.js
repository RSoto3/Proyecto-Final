  var familia1 = ['Adulto1'];
  var familia2 = ['Adulto2'];
  var familia3 = ['Adulto1','Adulto2'];
  var familia4 = ['Adulto1', 'Adulto2', 'Infante1'];
  var familia5 = ['Adulto1', 'Adulto2', 'Infante1', 'Infante2'];
  var familia6 = ['Adulto1', 'Adulto2', 'Infante1', 'Infante2', 'Infante3'];
  var allfamilia = [familia1,familia2,familia3,familia4,familia5,familia6];
  nodes = new vis.DataSet(); 
  edges = new vis.DataSet();
  var network;
  var arrayIdVertices = [];
  var matrizAdy = new Array();
  var auxed = 1;
  var auxn=0,auxe=0;
  var Numnodos = random(12,20);

  function toJSON(obj) {
    return JSON.stringify(obj, null, 4);
  }

  options.nodes= { color:'red'}


  function random(min,max){ //numero random de 5 a 10
    let numero = Math.floor(Math.random() * (max - min + 1) ) + min;
    //console.log(numero);
    return numero;
  }

  function addNode(){
    let aux1 = random(0,5) + 1;
    auxn= auxn+1; 
    nodes.add({
      id: auxn,
      label: "Familia " + auxn +" "+ "Tipo:" + aux1,
      codigo:1
    });
    arrayIdVertices.push(auxn);
  }

  function bool(Nodo1,Nodo2){
    var1=network.getConnectedNodes(Nodo1);
    var2=network.getConnectedNodes(Nodo2);
    for(let i=0;i<var1.length;i=i+1){
      for(let j=0;j<var2.length;j=j+1){
        if(var1[i]===Nodo2){
          //console.log("bool true")
          return true
        }
      }
    }
   // console.log("bool false")
    return false

  }

  function addEdge(Nodoid,prob){
   // console.log("Funcion addedge");

    for(let i=0; i <arrayIdVertices.length ; i=i+1){
    //console.log(i)
    if(Nodoid==arrayIdVertices[i]){
      i++;
    } else
      //console.log(arrayIdVertices.length)
     if(bool(Nodoid,arrayIdVertices[i]) === false){
     // console.log("bool")
      var pchance = Math.random();
           if(pchance>prob){
        edges.add({
          id: auxed ,
          from: Nodoid ,
          to: arrayIdVertices[i],
          label: random(1,5)+ " Km",
        });
        auxed++;
       }
    }
   }
   console.log("Se crean los nodos")
  }
 //codigos
 //Casas=1
 //Colegio=2
 //Luz=3
 //Agua=4
 //Bomberos=5
 //Policia=6
 //Hospital=7
 //Supermercado=8

  function crearservicios(){
      var servicios = ['Colegio', 'Luz', 'Agua', 'Bomberos', 'Policia','Hospital','Supermercado'];
      for(i=0;i<7;i++){
        let j= i+1
        nodes.update({
          id: j ,
          label: servicios[i] +" "+ "Id:"+ j ,
        });

  }
  console.log("Se crean los servicios");
}
///////////////////////////////////////////////////////////////////////////

function shortestPath() {
  console.log("Funcion Camnino mas corto");
  let nodoiaux, nodofaux;
  grafoDijkstra = new Array(nodes.length);
  let dataedge = edges.get();
  let enlaces;

  for (let xzy = 0; xzy < dataedge.length; xzy++) {
    addConexion(dataedge[xzy].from, dataedge[xzy].to, dataedge[xzy].label);
    addConexion(dataedge[xzy].to, dataedge[xzy].from, dataedge[xzy].label);
  }
  let g = new Graph();

  grafoDijkstra.forEach(function (value) {
    enlaces = {};

    value.conexiones.forEach(function (conexion) {
      enlaces[conexion.destino] = conexion.distancia;
    });
    nodoiaux = document.getElementsByName("nodoI")[0].value; //NodoInicial
    nodofaux = document.getElementsByName("nodoF")[0].value; //NodoFinal
    let i = nodoiaux.toString();
    let f = nodofaux.toString();
    g.addVertex(value.origen, enlaces);

    camino = g.shortestPath(i, f).concat(i).reverse();
  });
  console.log(" Función camino más corto entre nodo " + nodoiaux + " y nodo " + nodofaux);
}

function incendio() {
  console.log("Funcion Camnino mas corto");
  let nodoiaux, nodofaux;
  grafoDijkstra = new Array(nodes.length);
  let dataedge = edges.get();
  let enlaces;

  for (let xzy = 0; xzy < dataedge.length; xzy++) {
    addConexion(dataedge[xzy].from, dataedge[xzy].to, dataedge[xzy].label);
    addConexion(dataedge[xzy].to, dataedge[xzy].from, dataedge[xzy].label);
  }
  let g = new Graph();

  grafoDijkstra.forEach(function (value) {
    enlaces = {};

    value.conexiones.forEach(function (conexion) {
      enlaces[conexion.destino] = conexion.distancia;
    });
     nodoiaux = 4   //NodoInicial
     nodofaux = document.getElementsByName("incendio")[0].value; //NodoFinal
    let i = nodoiaux.toString();
    let f = nodofaux.toString();
    g.addVertex(value.origen, enlaces);

    fuego = g.shortestPath(i, f).concat(i).reverse();
  });
  console.log(" Función camino incendio " + nodoiaux + " y nodo " + nodofaux);
}

function resultadocaminofuego() {
  let a=document.getElementsByName("incendio")[0].value
  if(a==1||a==2||a==3||a==4||a==5||a==6||a==7){
    alert("Codigo fuera de las normas");
  }
  else{
  document.getElementById("mostrarcaminoincendio").innerHTML = "";
  document.getElementById("mostrarcaminoincendio").innerHTML = "Nodos del camino más corto: " + fuego;
  }
}

function robo() {
  console.log("Funcion Camnino mas corto");
  let nodoiaux, nodofaux;
  grafoDijkstra = new Array(nodes.length);
  let dataedge = edges.get();
  let enlaces;

  for (let xzy = 0; xzy < dataedge.length; xzy++) {
    addConexion(dataedge[xzy].from, dataedge[xzy].to, dataedge[xzy].label);
    addConexion(dataedge[xzy].to, dataedge[xzy].from, dataedge[xzy].label);
  }
  let g = new Graph();

  grafoDijkstra.forEach(function (value) {
    enlaces = {};

    value.conexiones.forEach(function (conexion) {
      enlaces[conexion.destino] = conexion.distancia;
    });
     nodoiaux = 5   //NodoInicial
     nodofaux = document.getElementsByName("robo")[0].value; //NodoFinal
    let i = nodoiaux.toString();
    let f = nodofaux.toString();
    g.addVertex(value.origen, enlaces);

    atraco = g.shortestPath(i, f).concat(i).reverse();
  });
  console.log(" Función camino más robo " + nodoiaux + " y nodo " + nodofaux);
}

function resultadocaminorobo() {
  let a=document.getElementsByName("robo")[0].value
  if(a==1||a==2||a==3||a==4||a==5||a==6||a==7){
    alert("Codigo fuera de las normas");
  }
  else{
    document.getElementById("mostrarcaminorobo").innerHTML = "";
  document.getElementById("mostrarcaminorobo").innerHTML = "Nodos del camino más corto: " + atraco;
  }
  
}
//////////////////////////
function emergencia() {
  console.log("Funcion Camnino mas corto");
  let nodoiaux, nodofaux;
  grafoDijkstra = new Array(nodes.length);
  let dataedge = edges.get();
  let enlaces;

  for (let xzy = 0; xzy < dataedge.length; xzy++) {
    addConexion(dataedge[xzy].from, dataedge[xzy].to, dataedge[xzy].label);
    addConexion(dataedge[xzy].to, dataedge[xzy].from, dataedge[xzy].label);
  }
  let g = new Graph();

  grafoDijkstra.forEach(function (value) {
    enlaces = {};

    value.conexiones.forEach(function (conexion) {
      enlaces[conexion.destino] = conexion.distancia;
    });
     nodoiaux = 6   //NodoInicial
     nodofaux = document.getElementsByName("emergencia")[0].value; //NodoFinal
    let i = nodoiaux.toString();
    let f = nodofaux.toString();
    g.addVertex(value.origen, enlaces);

    ambulancia = g.shortestPath(i, f).concat(i).reverse();
  });
  console.log(" Función camino emergencia " + nodoiaux + " y nodo " + nodofaux);
}

function resultadocaminoemergencia() {
  let a=document.getElementsByName("emergencia")[0].value
  if(a==1||a==2||a==3||a==4||a==5||a==6||a==7){
    alert("Codigo fuera de las normas");
  }
  else{
    document.getElementById("mostrarcaminoemergencia").innerHTML = "";
  document.getElementById("mostrarcaminoemergencia").innerHTML = "Nodos del camino más corto: " + ambulancia;
  }
  
}
/////////////////
function addConexion(nodoInicial, nodoFinal, valorDistancia) {
  valorDistancia = parseInt(valorDistancia, 10);

  var buscarNodo = grafoDijkstra.filter(item => item.origen === nodoInicial);
  if (buscarNodo.length === 0) {
    var conexion = [];
    conexion.push({
      destino: nodoFinal,
      distancia: valorDistancia
    });
    grafoDijkstra.push({
      origen: nodoInicial,
      conexiones: conexion
    });
  } else {
    buscarNodo[0].conexiones.push({
      destino: nodoFinal,
      distancia: valorDistancia
    });
  }

}
function resultadocaminomascorto() {
  document.getElementById("mostrarcaminomascorto").innerHTML = "";

  document.getElementById("mostrarcaminomascorto").innerHTML = "Nodos del camino más corto: " + camino;
}
    
  

/////////////////////////////////////////////////////////////






function createnetwork(){
  if(arrayIdVertices.length==0){
    for(let i=0; i < Numnodos ;i=i+1){
      // console.log(i);
       addNode();
     }
     console.log("Se crean los nodos")
     cantAris = (arrayIdVertices.length*(arrayIdVertices.length-1))/2;
     for(let j=1; j <= arrayIdVertices.length; j=j+1){
       addEdge(j,0.85);
     }
     crearservicios()
     console.log(arrayIdVertices);
     crearmatrizady();
  }
}

  function destroy() {
    location.reload();
  }

  function crearmatrizady(){
    var contador = 0;
    var largoId =nodes.length;
    var matrizAdy = new Array();
    var idConectados = new Array();
    
    for(let i=0; i<largoId; i++){
      matrizAdy[i] = new Array();
    }//matriz creada
    for(let i=0;i< largoId; i++){
      for(let j=0; j < largoId; j++){
          matrizAdy[i][j]=0; // iniciar toda la matriz en 0
      }}
      while(contador < largoId){ 
        idConectados = network.getConnectedNodes(arrayIdVertices[contador]); //en id conectados dejar los nodos que estan conectados con ese vertice
  
        if(idConectados != null ){
            for(let i = 0 ; i < idConectados.length; i++){
                for(let j = 0; j <largoId; j++){
                    if(idConectados[i]==arrayIdVertices[j]){
                         matrizAdy[contador][j] = 1;
                    }
                }
            }
        }
        contador++;
     }
    
  
     console.log(matrizAdy);
  
  }



  function draw() {
    // se crea un arreglo con los nodos
    nodes = new vis.DataSet();
    
    // se crea el network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {};
    network = new vis.Network(container, data, options);
  }
  

