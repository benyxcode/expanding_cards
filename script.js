const panels = document.querySelectorAll('.panel') /* selects all the panels */

/* add an eventlister to listen to clicks then add a function of active*/
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() /* remove active panels when others are clicked-with a function at the bottom*/
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
/* */
