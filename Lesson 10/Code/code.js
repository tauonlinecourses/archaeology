const the_animation = document.getElementsByClassName('have-scroll-animation');

document.addEventListener("DOMContentLoaded", function() {
    loudAllImages();
    start();
});

function start() {
    for (i = 0; i < the_animation.length; i++) {
        el = the_animation[i];
        observer.observe(el)
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-enter-animation');
        }
        else if (chackAnimationCondition(entry.target, false)) {
            entry.target.classList.remove('active-enter-animation');
        }
    })
});

function chackAnimationCondition(object, isAddingAnimation) {
    canChangeAnimation = true;
    if (isAddingAnimation) {

    }
    else {
        canChangeAnimation = !object.classList.contains("loop-Once-animation");
    }
    return canChangeAnimation;

}

function loudAllImages(){
    const imagePromises = Array.from(document.images).map(img => {
        if (!img.complete) {
            return new Promise(resolve => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', resolve);
            });
        } else {
            return Promise.resolve();
        }
    });
    
    // Wait for all image Promises to resolve
    Promise.all(imagePromises).then(() => {
        console.log("stopLoading");
        document.getElementById("loadingScreen").remove();
        // Your additional code here
    });
}
