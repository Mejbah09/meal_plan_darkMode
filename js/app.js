var password = document.getElementById('password');
var password_eye = document.getElementById('password_eye')
var mood = document.getElementById('mode');



password_eye.addEventListener('click',function() {
  if( password.type ==='password' ){
    password.type='text'
    password_eye.classList.add('fa-eye')
    password_eye.classList.remove('fa-eye-slash')

  }else{
    password.type='password'
    password_eye.classList.remove('fa-eye')
    password_eye.classList.add('fa-eye-slash')
  }
})

mood.addEventListener('click' ,function(){
    document.body.classList.toggle('dark_mode')
    if(mood.classList.contains('fa-moon')){
        mood.classList.add('fa-sun')
        mood.classList.remove('fa-moon')
    }
    else{
        mood.classList.remove('fa-sun')
        mood.classList.add('fa-moon')
    }
})


document.getElementById('bar').addEventListener('click' ,function(){
    document.getElementById('sidemenu').classList.toggle('active')
})