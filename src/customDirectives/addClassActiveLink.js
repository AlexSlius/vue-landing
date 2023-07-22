export const addClassActiveLink = {
    mounted(el) {
        let wHashStart = window.location.hash;
        let elLi = el.querySelectorAll('li');

        // the first drawing
        elLi.forEach(element => {
            element.classList.remove("active");

            let elA = element.querySelector('a');
            let getAttr = elA.getAttribute('href');

            if (getAttr == wHashStart) {
                element.classList.add("active");
            }
        });

        document.addEventListener('scroll', function () {
            let ofTop = window.scrollY;
            let wH = window.innerHeight;
            let endRegionScreen = ofTop + wH;

            elLi.forEach(element => {
                let elA = element.querySelector('a');
                let getHasTag = elA.getAttribute('href');
                let elByHasTag = document.querySelector(getHasTag);

                if (elByHasTag) {
                    let box = elByHasTag.getBoundingClientRect();
                    let posTop = box.top + window.pageYOffset;
                    let posBot = box.bottom + window.pageYOffset;
                    let posCenterCoordinates = (posTop + posBot) / 2;

                    if ((endRegionScreen >= posCenterCoordinates) && (ofTop < posCenterCoordinates)) {
                        element.classList.add('active');
                        return;
                    }

                    element.classList.remove('active');
                }
            });
        });
    }
}