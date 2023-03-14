// login function
const loginButton = document.getElementById('login');
const loginPage = document.getElementById('login-page');
const close = document.getElementById('close');

loginButton.addEventListener('click', () => {
    loginPage.classList.toggle('hidden');
    loginPage.classList.toggle('visible');
    //   ?'0' : '-300px': This is a ternary operator, which is a shorthand way of writing an if statement.It works like this: if the condition in the parentheses is true, then the expression before the colon(: ) is returned; otherwise, the expression after the colon is returned.In this case, if the loginPage element has the visible class, then the expression '0' is returned, which sets the right property to 0. If the loginPage element does not have the visible class, then the expression '-300px' is returned, which sets the right property to - 300px.
    // We set right to -300px, which positions the element offscreen to the right. 
    loginPage.style.right = loginPage.classList.contains('visible') ? '0' : '-300px';
});

close.addEventListener('click', () => {
    loginPage.classList.remove('visible');
    loginPage.classList.add('hidden');
    loginPage.style.right = '-300px';
});

//   signup function
const signupButton = document.getElementById('signup');
const signupPage = document.getElementById('signup-page');
const close2 = document.getElementById('close2');

signupButton.addEventListener('click', () => {
    signupPage.classList.toggle('hidden');
    signupPage.classList.toggle('visible');
    signupPage.style.right = signupPage.classList.contains('visible') ? '0' : '-300px';
});

close2.addEventListener('click', () => {
    signupPage.classList.remove('visible');
    signupPage.classList.add('hidden');
    signupPage.style.right = '-300px';
});