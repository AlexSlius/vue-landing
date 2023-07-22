
export const addClassByScroll = {
    mounted(el, binding) {
        document.addEventListener('scroll', function () {
            if (window.scrollY > 160) {
                el.classList.add('page-on-scroll');
                return;
            }

            el.classList.remove('page-on-scroll');
        });
    }
}