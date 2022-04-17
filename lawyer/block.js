
let firstImg = document.getElementById('firstimg');
let secondImg = document.getElementById('secondimg');
let thirdImg = document.getElementById('thirdimg');
const carusel = document.getElementById('carusel');

console.log(firstImg.src);
console.log(secondImg.src);
console.log(thirdImg.src);

carusel.addEventListener('mouseover', function(event){
    if ( event.target.closest('.img_box')){
        let imgShow =  event.target.closest('.img_box');
        if ( imgShow == carusel.children[0]){
            changeFirst();
        }
        if (imgShow == carusel.children[1]){
            changeSecond();
        }
        if ( imgShow == carusel.children[2]){
            changeThird();
        }
    }
})


function changeFirst(){
    firstImg.src = "file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427614.jpg"
    secondImg.src ="file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427620.jpg"
    thirdImg.src = "file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427616.jpg"
}

function changeSecond(){
    firstImg.src = "file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427620.jpg"
    secondImg.src ="file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427616.jpg"
    thirdImg.src = "file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427614.jpg"
}

function changeThird(){
    firstImg.src = "file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427616.jpg"
    secondImg.src ="file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427614.jpg"
    thirdImg.src = "file:///C:/Users/User/Desktop/www/lawyer/images/about/pexels-august-de-richelieu-4427620.jpg"
}