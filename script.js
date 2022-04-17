
const accordionItem = document.querySelectorAll('.accordion_item');

const header = document.querySelector('.header_inner');
const about = document.getElementById('about');
const links = document.querySelector('.navigation');

let firstImg = document.getElementById('firstimg');
let secondImg = document.getElementById('secondimg');
let thirdImg = document.getElementById('thirdimg');
const carusel = document.getElementById('carusel');


links.addEventListener('click', function(event){
    if(event.target.closest('.nav_link')){
        let activeLink = event.target.closest('.nav_link');
        if( activeLink == links[0]){
            window.scrollTo({
                top:1,
                behavior: "smooth"
            })
        } if( activeLink == links.children[1]){
            window.scrollTo({
                top: 952,
                behavior: "smooth"
            })
        } if( activeLink == links.children[2]){
            window.scrollTo({
                top:2251,
                behavior: "smooth"
            })
        } if( activeLink == links.children[3]){
            window.scrollTo({
                top:2952,
                behavior: "smooth"
            })
        } if( activeLink == links.children[4]){
            window.scrollTo({
                top:5952,
                behavior: "smooth"
            })
        }
    }
})

window.addEventListener('scroll', function(){
    let posScroll = window.scrollY;
        if(posScroll > 350){
            startCount();
        }
        if(posScroll > -1){
            links.children[0].classList.add('active')
            links.children[1].classList.remove('active')
        } if (posScroll > 901){
            links.children[0].classList.remove('active')
            links.children[1].classList.add('active')
        } if(posScroll < 2199){
            links.children[2].classList.remove('active')
        } if( posScroll > 2200){
            links.children[1].classList.remove('active')
            links.children[2].classList.add('active')
        } if(posScroll < 2899){
            links.children[3].classList.remove('active')
        } if(posScroll > 2900){
            links.children[2].classList.remove('active')
            links.children[3].classList.add('active')
        } if(posScroll > 3900){
            links.children[3].classList.remove('active')
        }   
});



for(let apart of accordionItem){
    apart.addEventListener('click', function(){
        apart.children[1].classList.toggle('active');
        let active = document.querySelector('.accordion_body.active');
        if(apart.children[1] == active){
            apart.children[0].children[0].style.transform = `rotate(${45}deg)`;
        } else if (apart.children[1] !== active){
            apart.children[0].children[0].style.transform = `rotate(${0}deg)`;
        }
    })
}

let stats = document.querySelector('.stat_box');
let startNum 
let counter = 0;

stats.children[0].children[0].innerHTML
function first(){
startNum = stats.children[0].children[0].children[0].innerHTML;
sNum = Number(startNum);

function count(sNum, step){
    let resoult = Math.round(sNum + step);
    return resoult;
}
let showResoult = count(sNum, 25)
stats.children[0].children[0].style.marginTop = '30px';
stats.children[0].children[0].style.marginBottom = '30px';
stats.children[0].children[0].children[0].innerHTML = showResoult;

};
 function second(){
startNum = stats.children[2].children[0].children[0].innerHTML;
sNum = Number(startNum);

function count(sNum, step){
    let resoult = Math.round(sNum + step);
    return resoult;
}
let showResoult = count(sNum, 17)
stats.children[0].children[0].style.marginTop = '30px';
stats.children[0].children[0].style.marginBottom = '30px';
stats.children[1].children[0].children[0].innerHTML = showResoult;
}

 function third(){
startNum = stats.children[2].children[0].children[0].innerHTML;
sNum = Number(startNum);

function count(sNum, step){
    let resoult = Math.round(sNum + step);
    return resoult;
}
let showResoult = count(sNum, 2)
stats.children[0].children[0].style.marginTop = '30px';
stats.children[0].children[0].style.marginBottom = '30px';
stats.children[2].children[0].children[0].innerHTML = showResoult;
}

function forth(){
startNum = stats.children[3].children[0].children[0].innerHTML;
sNum = Number(startNum);

function count(sNum, step){
    let resoult = Math.round(sNum + step);
    return resoult;
}
let showResoult = count(sNum, 50)
stats.children[0].children[0].style.marginTop = '30px';
stats.children[0].children[0].style.marginBottom = '30px';
stats.children[3].children[0].children[0].innerHTML = showResoult;
}


function startCount(){
    setInterval(function(){
        if ( counter <= 10){
            counter++;
            first();
        } if (counter === 10){
            clearInterval;
        };
    }, 100)
    setInterval(function(){
        if ( counter <= 10){
            second();
        } if (counter === 10){
            clearInterval;
        };
    }, 100)
    setInterval(function(){
        if ( counter <= 10){
            third();
        } if (counter === 10){
            clearInterval;
        };
    }, 100)
    setInterval(function(){
        if ( counter <= 10){
            forth();
        } if (counter === 10){
            clearInterval;
        };
    }, 100)
};


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