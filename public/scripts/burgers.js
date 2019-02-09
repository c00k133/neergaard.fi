'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const getSelectors = selector => document.querySelectorAll(selector)
    const arraySlice = sliceable => Array.prototype.slice.call(sliceable, 0)

    // Enable burger for navigation bar with correct links
    const burgers = arraySlice(getSelectors('.burger'))
    if (burgers.length > 0) {
        burgers.forEach((element) => {
            element.addEventListener('click', () => {
                const target = document.getElementById(element.dataset.target)
                element.classList.toggle('is-active')
                target.classList.toggle('is-active')
            })
        })
    }
})
