let message = document.getElementById("message");

let messageOnline = () => {
  message.textContent = "Internet Connection Available";
  message.style.cssText = "background-color: #d1e5f0; color: #689f38"; // Changed background color to #d1e5f0
};

let messageOffline = () => {
  message.textContent = "No Internet Connection";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
