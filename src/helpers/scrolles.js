export const scrollingByHasTag = (hashTag) => {
    let headerHeight = document.querySelector('header').offsetHeight;
    let target = document.querySelector(hashTag);
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerHeight;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}