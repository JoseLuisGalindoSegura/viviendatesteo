//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
function showModalStudy(){
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
function showModal(){
    document.getElementById('modalDefault').classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal(){
    document.getElementById('modalDefault').classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
function showKangaroo(){
    document.getElementById('contCanguro').classList.add('contCanguroMain--iscanguroShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo(){
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
function chengeAddress(){
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
}


//-------------------- Mostrar datos ocultos confirmación y resultados
function seeMoreDetails(){
    document.getElementById('result__ConfirToggleOpen').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

function seeLessDetails(){
    document.getElementById('result__ConfirToggleClose').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}

function changeUpdateAddress(){
    if(document.getElementById('changeAddressUpdate').style.display == 'none'){
        document.getElementById('changeAddressUpdate').style.display = 'block';
        document.getElementById('adressDefaultView').style.display = 'none';
        document.getElementById('iconPencil').style.display = 'none';

    }
}

//funcion de pop up 
document.getElementById("numberPag").innerHTML = "1/3";
function changeBox(){
    document.getElementById("numberPag").innerHTML = "2/3";
    document.getElementById('contentOne').classList.remove ('activeModal');
    document.getElementById('contentTwo').classList.add ('activeModal');
    document.getElementById('contentTwo').classList.remove ('nullModal');
    document.getElementById('contentOne').classList.add ('nullModal');
    document.getElementById('bottonOne').style.display='none';
    document.getElementById('bottonTwo').style.display='inline-block';
    
}

function changeBoxTwo(){
    document.getElementById("numberPag").innerHTML = "3/3";
    document.getElementById('contentTwo').classList.remove ('activeModal');
    document.getElementById('contentThree').classList.add ('activeModal');
    document.getElementById('contentThree').classList.remove ('nullModal');
    document.getElementById('contentTwo').classList.add ('nullModal');
    document.getElementById('bottonTwo').style.display='none';
    document.getElementById('bottonThree').style.display='inline-block';

}

//funcion de Trancking Radio
function changeTrancking(){
        document.getElementById('tranckingOne').classList.remove ('dataNav__step--active');
        document.getElementById('tranckingTwo').classList.add ('dataNav__step--active');
}

function changeTranckingTwo(){
    document.getElementById('tranckingTwo').classList.remove ('dataNav__step--active');
    document.getElementById('tranckingThree').classList.add ('dataNav__step--active');
    
}

//funcion de popUps de tracking 59
function changeStateActive(id){
    document.getElementById('popupPartOne').classList.toggle('activePopup', id === 1)
    document.getElementById('popupPartTwo').classList.toggle('activePopup', id === 2)
    document.getElementById('popupPartThree').classList.toggle('activePopup', id === 3)
    scrollBody("quitar");
}

function changeStateDesactive(){
    document.getElementById('popupPartOne').classList.remove('activePopup')
    document.getElementById('popupPartTwo').classList.remove('activePopup')
    document.getElementById('popupPartThree').classList.remove('activePopup')
    scrollBody("poner");
}

//Funcion body overflow

function scrollBody(accion){
    var bodyPopUp = document.getElementById("bodyPopUp");
    if(accion == "quitar"){
        bodyPopUp.classList.add("overFlowHY");
    }
    if(accion == "poner"){
        bodyPopUp.classList.remove("overFlowHY");
    }
}

//funcion de la seleccion de ciudades
function selectionCity(number){
    for(let i = 1; i <= 20; i++){
        document.getElementById('option'+i).classList.remove('activeInfoCity')   
        document.getElementById('select'+i).classList.remove('activeSelect')   
        document.getElementById('select'+i).classList.add('desactiveSelect')   
        document.getElementById('imageChange'+i).innerHTML = '<img src="../images/Trazado 3057.svg" alt=""/>'  
    }
    document.getElementById('option'+number).classList.add('activeInfoCity')  
    document.getElementById('select'+number).classList.remove('desactiveSelect') 
    document.getElementById('select'+number).classList.add('activeSelect')
    document.getElementById('imageChange'+number).innerHTML = '<img src="../images/Trazado 3058.svg" alt=""/>'  

}
