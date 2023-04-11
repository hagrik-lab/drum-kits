const kicks = ['crash', 'kick', 'snare','tom'];
const containerEl = document.querySelector('.container');

kicks.forEach((kick)=> {
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText = kick;
    
    btnEl.style.backgroundImage = 'url(images/' + kick + '.jpg)'

    const audioEl = document.createElement('audio');
    audioEl.src = 'sounds/' + kick + '.wav';
    containerEl.appendChild(audioEl);

    containerEl.appendChild(btnEl);

    btnEl.addEventListener('click', (event)=> {
        audioEl.play();
    })
    
   window.addEventListener('keydown', (event) => {
    if(event.key === kick.slice(0,1)) {
        audioEl.play();
        btnEl.style.transform = 'scale(.9)';
        setTimeout(()=>{
            btnEl.style.transform = 'scale(1)';
        }, 100)
    }
    
   })
})

