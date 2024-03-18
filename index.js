const currentUser = 'Caren';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const message = 'Welcome to Flatbook';
const newMessage = message.toUpperCase();
const excitedWelcomeMessage = `${newMessage}, ${currentUser.toUpperCase()}!`
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
console.log(excitedWelcomeMessage, welcomeMessage, shortGreeting);