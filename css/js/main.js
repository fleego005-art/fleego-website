function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("chatMessage");
  const message = input.value.trim();
  if (message === "") return;

  const chatBody = document.getElementById("chatBody");

  // Show user message
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<b>You:</b> ${message}`;
  chatBody.appendChild(userMsg);

  // Simple bot response
  const botMsg = document.createElement("p");
  if (message.toLowerCase().includes("apply")) {
    botMsg.innerHTML = `<b>Bot:</b> You can apply at <a href="mailto:fleego005@gmail.com">fleego005@gmail.com</a>`;
  } else if (message.toLowerCase().includes("contact")) {
    botMsg.innerHTML = `<b>Bot:</b> Contact us on WhatsApp: <a href="https://wa.me/91XXXXXXXXXX" target="_blank">+91 XXXXX XXXXX</a>`;
  } else {
    botMsg.innerHTML = `<b>Bot:</b> Thanks for your message! Our team will reply soon 🚗`;
  }
  chatBody.appendChild(botMsg);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}
