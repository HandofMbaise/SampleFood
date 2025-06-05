const loginForm = document.getElementById('login-form');


async function login(e){
    e.preventDefault();
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    const newemail = document.getElementById('Email').value;
    const newpassword = document.getElementById('Password').value;
    
    localStorage.setItem('token', JSON.stringify({ newemail, newpassword }))
    const user = JSON.parse(localStorage.getItem('user'))

     try{
       
     if(email && user.email !== email && user.password !== password){
        window.alert('User not found')

    } else if(!email || !password){
       window.alert('Email and password required')

    } else if(!email.includes('@')){
        window.alert('Not a valid email again')

    } else{
        window.alert(`welcome ${user.email}`);
        window.location.href = 'home.html'
    }
    

    } catch(error){
        console.error(error)
    }
}



loginForm.addEventListener('submit', login)