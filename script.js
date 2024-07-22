/* Password Show-Hide */
var click = 0;
function showHide() {
    if (click == 1){
        document.getElementById('password').type='password';            
        document.getElementById('eyeclose').src='images/close-eye.png';            
        click = 0;
    }
    else {
        document.getElementById('password').type='text';
        document.getElementById('eyeclose').src='images/open-eye.png';  
        click = 1;
    }
}

/* User Validate */
const users = [
    { username: 'Admin01', password: 'admin01' },
    { username: 'Admin02', password: 'admin02' },
    { username: 'Admin03', password: 'admin03' }
];

function login(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userValidate = users.find(user => user.username === username && user.password === password);

    if(userValidate) {
        alert('Hello ' + username + ', Welcome to the System !');
        location.reload();
    }
    else {
        document.getElementById('loginResult').textContent = 'Invalid email or password.';
        document.getElementById('loginResult').style.color = 'red';
    }

    return false;

}