const setUpScrooling = () => {
    const container = [...document.querySelectorAll(".movie-container")]
    const nextBtn = [...document.querySelectorAll(".next-btn")]
    const prevBtn = [...document.querySelectorAll(".pre-btn")]


    container.forEach((item, i) => {
        let containerDemensions = item.getBoundingClientRect()
        let containerWidth = containerDemensions.width

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth
        })

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        })
    })
}