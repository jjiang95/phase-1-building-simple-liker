// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('footer span');
hearts.forEach(heart => {
  heart.addEventListener("click", function () {
    mimicServerCall()
   .then(() => {
     if (heart.className === "like-glyph") {
        heart.className = "activated-heart";
       heart.textContent = FULL_HEART;
     } else if (heart.className === "activated-heart") {
       heart.className = "like-glyph";
       heart.textContent = EMPTY_HEART;
     }

  })
  .catch(() => {
    const error = document.getElementById("modal");
    error.classList.remove("hidden");
    setTimeout(() => error.classList.add("hidden"), 3000);
  })

  })})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

