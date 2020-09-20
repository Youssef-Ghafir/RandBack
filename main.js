let btn  = document.getElementById('Randback')
btn.addEventListener('click' ,()=> {
    document.body.style.backgroundColor=Randback()
    btn.style.backgroundColor=Randback()
})
function Randback() {
    return `hsl(${Math.floor(Math.random()*360)},90%,50%)`
}
