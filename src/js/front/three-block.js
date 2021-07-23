myMain = () =>{
    let pic = document.getElementById('myParallax');
    console.log("THERE" ,pic)

    window.addEventListener('scroll',()=>{
        parallaxFunc();
    })

    let parallaxFunc = (speed = 0.15) =>{
        pic.style.marginTop = window.scrollY * speed;
    }
}

exports.default = myMain;