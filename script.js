console.log("hello");

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',(e)=> {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + "px";
})