function openModal(){
    document.getElementById('modal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeModal(){
    document.getElementById('modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function openSuccessModal(){
    document.getElementById('overlay').classList.add('active');
    document.getElementById('success-modal').classList.add('active');
}

function closeSuccessModal(){
    document.getElementById('success-modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function checkRadioBtn(i){
    const pledgeDivs = document.querySelectorAll('.enter-pledge-div');
    const modalDivs = document.querySelectorAll('.modal-div');
 
    pledgeDivs[i].classList.remove('inactive');
    pledgeDivs[i].classList.add('active');
    modalDivs[i].classList.add('selected');
    modalDivs[i].classList.remove('unselected');

    pledgeDivs.forEach((div, index)=>{
        if(index===i) return;

        div.classList.add('inactive');
        div.classList.remove('active');
        
    })

    modalDivs.forEach((div, index)=>{
        if(index===i) return;

        div.classList.add('unselected');
        div.classList.remove('selected');
        
    })
}

function toggleBookmark(){
    const bookmarkBg = document.getElementById('bookmark-bg');
    const bookmarkIcon = document.getElementById('bookmark-icon');

    if(bookmarkIcon.getAttribute('fill') !== 'white'){
        bookmarkBg.setAttribute("fill", "hsl(176, 72%, 28%)");
        bookmarkIcon.setAttribute('fill' , 'white');
        return;
    }

    bookmarkIcon.setAttribute('fill', 'rgb(177, 177, 177)');
    bookmarkBg.setAttribute('fill', 'rgb(47, 47, 47)')
    
}

function submitPledge(i){
    const inputs = document.querySelectorAll('.modal-input');
    console.log(inputs);

    switch(i){
        case 0:
            if(inputs[i].value > 0){
                closeModal();
                openSuccessModal();
                return;
            }
            alert('Please enter a valid amount!')
            break;
        case 1:
            if(inputs[i].value >= 25){
                closeModal();
                openSuccessModal();
                return;
            }
            alert('Please pledge 25$ or more!')
            break;
        case 2:
            if(inputs[i].value >=75){
                closeModal();
                openSuccessModal();
                return;
            }
            alert('Please pledge 75$ or more!')
            break;
        case 3:
            if(inputs[i].value >=200 ){
                closeModal();
                openSuccessModal();
                return;
            }
            alert('Please pledge 200$ or more!')
            break;
        default:
            return;            
    }

}
