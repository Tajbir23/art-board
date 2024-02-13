
const board = document.getElementById('board');
const removeBtn = document.getElementById('remove-btn')


function createDot(e){
    const left = e.clientX;
    const top = e.clientY

    const dot = document.createElement('div');
    board.appendChild(dot);

    dot.style.top = `${top}px`;
    dot.style.left = `${left}px`;
    dot.classList.add('dot')
}


board.addEventListener('mousedown', function(e){
    window.addEventListener('mousemove', createDot)
});


board.addEventListener('mouseup', function(){
    window.removeEventListener('mousemove', createDot)
})


removeBtn.addEventListener('click', function(){
    board.innerHTML = ''
})