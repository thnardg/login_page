const signUp = document.getElementById('signUp'),
      signIn = document.getElementById('signIn'),
      loginUp = document.getElementById('loginUp'),
      loginIn = document.getElementById('loginIn')

signUp.addEventListener('click', ()=>{
    //Remove classes
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    //Add classes
    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', ()=>{
    //Remove classes
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    //Add classes
    loginIn.classList.add('block')
    loginUp.classList.add('none')
})