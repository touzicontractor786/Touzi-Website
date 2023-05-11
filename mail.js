
//initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3smKQgj9SAR9Q9b4Nh4pUU26eoQ7Kk6E",
  authDomain: "portfolio-106e5.firebaseapp.com",
  databaseURL: "https://portfolio-106e5-default-rtdb.firebaseio.com",
  projectId: "portfolio-106e5",
  storageBucket: "portfolio-106e5.appspot.com",
  messagingSenderId: "977842486384",
  appId: "1:977842486384:web:538123598c376df492c8b5",
  measurementId: "G-75J6YWC13E"
};

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};