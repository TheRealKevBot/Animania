const login = document.getElementById("login")
const loginForm = document.getElementById("login-form")
const error = document.getElementsByClassName("error-container") 

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            login.addEventListener("click", (event) => {
                event.preventDefault()
                const username = loginForm.user_name.value
                const password = loginForm.passphrase.value
                
                if (username == user.user_name && password == user.passphrase) {
                    alert("Welcome Back, you are now logged in!")
                    location.reload("http://localhost:3001/")
                } 
                else {
                    alert("You have entered an invalid username and/or password! Please try again")
                }
            })
        })
    })

