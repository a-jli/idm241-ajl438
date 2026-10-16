let starClicked = false;
const ratingStars = document.querySelectorAll('.star');
let starId = '';

const hoveredStar = document.querySelector('.star:hover');

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


function changeColor () {
    if (starClicked == false) {
        star1Filled.style.fill = '#646464';
        star2Filled.style.fill = '#646464';
        star3Filled.style.fill = '#646464';
        star4Filled.style.fill = '#646464';
        star5Filled.style.fill = '#646464';
    } else if (starClicked == true) {
        star1Filled.style.fill = '#ff2449';
        star2Filled.style.fill = '#ff2449';
        star3Filled.style.fill = '#ff2449';
        star4Filled.style.fill = '#ff2449';
        star5Filled.style.fill = '#ff2449';        
    } else {
        console.log('changecolor broke');
    };
}

//click
ratingStars.forEach(function (ratingStar) {
    ratingStar.addEventListener('click', function (event) {
    starId = ratingStar.id;
    starClicked = true;
    //fill first star always
    star1Filled.style.display = 'block';
    star1.style.display = 'none';
    changeColor();
    return starId;
    });
});

//hover
ratingStars.forEach(function (ratingStar) {
    ratingStar.addEventListener('mouseover', function (event) {
    const hoveredStarId = ratingStar.id;
    leftRightHover(hoveredStarId);
    changeColor();
    });
});

ratingStars.forEach(function (ratingStar) {
    ratingStar.addEventListener('mouseout', function (event) {
    leftRightUnHover(starId);
    changeColor();
    });
});

function leftRightHover(hoveredStarId) {
    if (hoveredStarId === 's1' || hoveredStarId === 's1-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none'; 
        //
        star2Filled.style.display = 'none';
        star2.style.display = 'block';
        star3Filled.style.display = 'none';
        star3.style.display = 'block';  
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';        
    } else if (hoveredStarId === 's2' || hoveredStarId === 's2-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';
        //
        star3Filled.style.display = 'none';
        star3.style.display = 'block';  
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';          
    } else if (hoveredStarId === 's3' || hoveredStarId === 's3-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';   
        star3Filled.style.display = 'block';
        star3.style.display = 'none';        
        //
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';   
    } else if (hoveredStarId === 's4' || hoveredStarId === 's4-f') {
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
    } else if (hoveredStarId === 's5' || hoveredStarId === 's5-f') {
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

function leftRightUnHover(starId) {
    if (starId === 's2' || starId === 's2-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';
        //
        star3Filled.style.display = 'none';
        star3.style.display = 'block';  
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';   
    } else if (starId === 's3' || starId === 's3-f') {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'block';
        star2.style.display = 'none';   
        star3Filled.style.display = 'block';
        star3.style.display = 'none';   
        //
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block'; 
    } else if (starId === 's4' || starId === 's4-f') {
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
    
    } else if (starId === 's5' || starId === 's5-f') {
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
    } else if (starClicked === true) {
        star1Filled.style.display = 'block';
        star1.style.display = 'none';
        star2Filled.style.display = 'none';
        star2.style.display = 'block';   
        star3Filled.style.display = 'none';
        star3.style.display = 'block';
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';
    } else {
        star1Filled.style.display = 'none';
        star1.style.display = 'block';
        star2Filled.style.display = 'none';
        star2.style.display = 'block';   
        star3Filled.style.display = 'none';
        star3.style.display = 'block';
        star4Filled.style.display = 'none';
        star4.style.display = 'block'; 
        star5Filled.style.display = 'none';
        star5.style.display = 'block';
    }
}
