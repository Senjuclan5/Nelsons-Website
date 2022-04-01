import carouselImages from '../JSON/carouselImages.js';

function createCarouselItems(){

    var carouselList = carouselImages.map((carouselItem)=>{
        var imageElement = `
        <div class = "carouselItem">
            <img class = "carouselImg" src=`+ carouselItem.location +` alt=`+ carouselItem.decription +`>
            <p class = "carouselname">`+ carouselItem.name +`</p>
        </div>
        `
        return imageElement

    })

    return carouselList.join("")
}


export default createCarouselItems;

