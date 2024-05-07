
const btnregister = document.getElementById('btnregister');
const btnlogin = document.getElementById('btnlogin');

btnregister.addEventListener("click", function () {
    const emailregister = document.getElementById('emailregister').value;
    const passwordregister = document.getElementById('passwordregister').value;
    localStorage.setItem('Email', emailregister);
    localStorage.setItem('Password', passwordregister);
    alert('Account Created Successfully');
});


btnlogin.addEventListener( "click" ,function (){
    const emaillogin = document.getElementById('emaillogin').value;
    const passwordlogin = document.getElementById('passwordlogin').value;
    if(
    localStorage.getItem( 'Email' ) === emaillogin && localStorage.getItem( 'Password' ) === passwordlogin) 
    {alert ('Login Successful')}
     else{alert('Wrong Email or Password')};
    
    // if (localStorage.getItem('Email') === null || localStorage.getItem('Password') == null)  
    //     return alert('Please create an account first!');  
        
    // else if (emaillogin !== localStorage.getItem('Email') && passwordlogin !== localStorage.getItem('Password')) 
    

});

