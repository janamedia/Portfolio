



//get word feature block

const moveWords = () => {

    let wordLine = document.getElementById('word-line');

    let words = document.querySelector('.be-block');
    
    // if (window.innerWidth < 720){
    //     console.log('never mind');
    //     return;
    // }

    anime({
        targets: '.be-block',
        keyframes: [
          {translateX: 50, easing: 'easeOutElastic(1, .8)'},
          {translateX: 0, easing: 'easeOutElastic(1, .8)', delay: 300}
        ],
        
        delay: anime.stagger(100)
    })

} 

 

let moveWordsMobile = () => {

    if (window.innerWidth > 720){
        console.log('never mind');
        return;
    }

    anime({
        target: '.be-block-mobile',
        keyframes: [
            { rotateX: 90}
        ]
    })

}

window.addEventListener("load", moveWords);



