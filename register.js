const registerForm = document.getElementById('register-form');


async function register(e){
    e.preventDefault();

    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    localStorage.setItem('user', JSON.stringify({ email, password }));
    

     try{
       
     if(!email || !password){
        window.alert('Email and password required')

    } else if(!email.includes('@')){
       window.alert('Not a valid email')

    } else{
        window.alert(`User ${email} created`);
        window.location.href = 'login.html'
    }

    } catch(error){
        console.error(error)
    }
}



registerForm.addEventListener('submit', register)