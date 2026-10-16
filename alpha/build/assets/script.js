console.log('loaded!');

let starClicked = 'noneClicked';
const ratingStars = document.querySelectorAll('.star');

const star1 = document.querySelector('#s1');
const star2 = document.querySelector('#s2');
const star3 = document.querySelector('#s3');
const star4 = document.querySelector('#s4');
const star5 = document.querySelector('#s5');

const star1Filled = document.querySelector('#s1-f');
const star2Filled = document.querySelector('#s2-f');
const star3Filled = document.querySelector('#s3-f');
const star4Filled = document.querySelector('#s4-f');
const star5Filled = document.querySelector('#s5-f');

//click
ratingStars.forEach(function (ratingStar) {
    ratingStar.addEventListener('click', function (event) {
    const starId = ratingStar.id;
    starClicked = 'oneClicked';
    console.log(starId + ' clicked');
    colorChange(); 
    
    //fill first star always
    star1Filled.style.display = 'block';
    star1.style.display = 'none';
    });
});

//hover
ratingStars.forEach(function (ratingStar) {
    ratingStar.addEventListener('mouseover', function (event) {
    const starId = ratingStar.id;
    const hoveredStarId = ratingStar.id;
    console.log(hoveredStarId);
    leftRightHover(hoveredStarId);
    });
    if (starClicked === 'oneClicked') {
        document.querySelector('.star:hover').style.fill = '#ff2449';
    }
});

ratingStars.forEach(function (ratingStar) {
    ratingStar.addEventListener('mouseoout', function (event) {
    const starId = ratingStar.id;
    const unHoveredStarId = ratingStar.id;
    console.log(unHoveredStarId);
    leftRightHover(unHoveredStarId);
    });
});

//change color pallette?
function colorChange() {
    if (starClicked === 'noneClicked') {
        console.log('1 set starClicked to ' + starClicked);
    } else if (starClicked === 'oneClicked') {
        console.log('2 set starClicked to ' + starClicked);
    } else {
        console.log('Something broke in colorChange.')
    }
}

function leftRightHover(hoveredStarId) {
    if (hoveredStarId == 's1' || hoveredStarId == 's1-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none'; 
        //man
        star2Filled.style.display = 'none';
        star2.style.display = 'block';
        star3Filled.style.display = 'none';
        star3.style.display = 'block';  
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';        
    } else if (hoveredStarId == 's2' || hoveredStarId == 's2-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';
        //man
        star3Filled.style.display = 'none';
        star3.style.display = 'block';  
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';          
    } else if (hoveredStarId === 's3' || hoveredStarId === 's2-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';   
        star3Filled.style.display = 'block';
        star3.style.display = 'none';        
        //a
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';   
    } else if (hoveredStarId === 's4' || hoveredStarId === 's2-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';   
        star3Filled.style.display = 'block';
        star3.style.display = 'none';
        star4Filled.style.display = 'block';
        star4.style.display = 'none';        
        //
        star5Filled.style.display = 'none';
        star5.style.display = 'block';   
    } else if (hoveredStarId === 's5' || hoveredStarId === 's2-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';   
        star3Filled.style.display = 'block';
        star3.style.display = 'none';
        star4Filled.style.display = 'block';
        star4.style.display = 'none'; 
        star5Filled.style.display = 'block';
        star5.style.display = 'none';        
    } else {
        console.log('lrh broke');
    }
}

function leftRightUnHover(unHoveredStarId) {
    if (unHoveredStarId == 's1' || unHoveredStarId == 's1-f') {     
    } else if (unHoveredStarId == 's2' || unHoveredStarId == 's2-f') {
    } else if (unHoveredStarId === 's3' || unHoveredStarId === 's2-f') {  
    } else if (unHoveredStarId === 's4' || unHoveredStarId === 's2-f') { 
    } else if (unHoveredStarId === 's5' || unHoveredStarId === 's2-f') {
    } else {
        console.log('lruh broke');
    }
}


