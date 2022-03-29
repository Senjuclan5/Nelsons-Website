var initialState = {
    activeSelection: 0,
}

var hiddenRadio = Object.entries(document.getElementById('hiddenRadio').children)

var sliderImagesContainer = Object.entries(document.getElementById('sliderImagesContainer').children)

var sliderControl = Object.entries(document.getElementById('sliderControl').children)

var masterControl = {
    1:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    },
    2:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    },
    3:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    },
    4:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    },
    5:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    },
    6:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    },
    7:{
        radio: "",
        sliderImage: "",
        sliderControl: "",    
    }
}

var currentSelectedIndex = 1;



hiddenRadio.forEach((element, index) => {
    masterControl[index+1].radio = element[1]  
    return masterControl
    });

sliderImagesContainer.forEach((element, index) => {
    masterControl[index+1].sliderImage = element[1] 
    return masterControl
    });

sliderControl.forEach((element, index) => {
    masterControl[index+1].sliderControl = element[1] 
    return masterControl
    });


    

function clearSettings(){
    Object.keys(masterControl).forEach((i)=>{
        masterControl[i].radio.checked = false;
        masterControl[i].sliderImage.removeAttribute("id");
        masterControl[i].sliderControl.removeAttribute("id")
    })
}

function runControl (radioButtonIndex){
    let previousIndex = currentSelectedIndex;
    let indexNum = radioButtonIndex.slice(3)
    
    console.log(indexNum, masterControl[indexNum].sliderImage.style, previousIndex, masterControl[previousIndex].sliderImage.style) 
    //add javascript animation code
  
    
    clearSettings();

    //add javascript animation code
    currentSelectedIndex = indexNum;
    masterControl[indexNum].radio.checked = true
    masterControl[indexNum].sliderImage.setAttribute("id","activeImage");
    masterControl[indexNum].sliderControl.id = "activeDot"
}

var elementSelectorKeys = Object.keys(document.getElementsByClassName("hiddenControl"))
var elementSelected = document.getElementsByClassName("hiddenControl")

elementSelectorKeys.forEach((key)=>{
    elementSelected[key].addEventListener('click', (e)=>{
        runControl (e.target.id)
}, false);
})

