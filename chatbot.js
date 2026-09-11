// =================================
// JOASYNC AI ASSISTANT - STAGE 1
// =================================

const chatButton = document.querySelector(".joasync-chat-button");
const chatbox = document.querySelector(".joasync-chatbox");
const closeButton = document.querySelector(".joasync-close");

const messagesContainer = document.querySelector(".joasync-chat-messages");

const userInput = document.querySelector(".joasync-user-input");
const sendButton = document.querySelector(".joasync-send");

const quickButtons = document.querySelectorAll(".joasync-quick-btn");


// OPEN CHAT

chatButton.addEventListener("click", () => {

  chatbox.classList.add("active");

});
// CLOSE CHAT
closeButton.addEventListener("click", () => {

  chatbox.classList.remove("active");

});
// ADD MESSAGE

function addMessage(message, sender) {

  const messageElement = document.createElement("div");

  messageElement.classList.add(
    "joasync-message",
    sender === "user"
      ? "joasync-user"
      : "joasync-bot"
  );

  messageElement.textContent = message;

  messagesContainer.appendChild(messageElement);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight;

}


// BOT RESPONSE

function getBotResponse(message) {

  const text = message.toLowerCase();


  // WEBSITE

  if (
    text.includes("website") ||
    text.includes("web development") ||
    text.includes("web")
  ) {

    return `Great! Joasync Solutions provides professional responsive website development.

We can help with:

• Business Websites
• Portfolio Websites
• E-commerce Websites
• Web Applications
• Frontend Development
• Backend Development
• Full-Stack Web Development

Tell me more about the type of website you need.`;
  }


  // SOFTWARE

  if (
    text.includes("software") ||
    text.includes("application") ||
    text.includes("app")
  ) {

    return `Joasync Solutions also provides software development services.

Please tell me:

What type of software or application would you like to build?`;
  }


  // REPAIR

  if (
    text.includes("repair") ||
    text.includes("laptop") ||
    text.includes("desktop") ||
    text.includes("computer")
  ) {

    return `Joasync provides Laptop & Desktop Sales and Repairs.

Please briefly describe the issue with your computer, and we will help guide you.`;
  }


  // TRAINING

  if (
    text.includes("training") ||
    text.includes("learn") ||
    text.includes("course") ||
    text.includes("coding")
  ) {

    return `Great choice!

Joasync provides Web Development training including:

• Frontend Development
• Backend Development
• Full-Stack Web Development

What would you like to learn?`;
  }


  // PRICE

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("how much")
  ) {
    return `The cost depends on the specific service and project requirements.

Tell me what service you need, and we can better understand your requirements before providing a quote.`;
  }


  // CONTACT

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("whatsapp")
  ) {

    return `You can contact Joasync Solutions directly through the contact section on this website.

You can also tell me what service you need, and I will guide you.`;
  }


  // GREETING

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {

    return `Hello! 👋

Welcome to Joasync Solutions.
How can I help you today?`;
  }


  // DEFAULT

  return `Thanks for your message!

Joasync Solutions provides:

💻 Website Development
⚙️ Software Development
🔧 Laptop & Desktop Sales and Repairs
🎓 Web Development Training
🖥️ IT Solutions

Which service are you interested in?`;

}


// SEND MESSAGE

function sendMessage() {

  const message = userInput.value.trim();


  if (message === "") return;


  // USER MESSAGE

  addMessage(message, "user");


  userInput.value = "";


  // BOT RESPONSE

  setTimeout(() => {

    const response =
      getBotResponse(message);

    addMessage(response, "bot");

  }, 500);

}


// SEND BUTTON

sendButton.addEventListener(
  "click",
  sendMessage
);


// ENTER KEY

userInput.addEventListener(
  "keypress",
  (event) => {

    if (event.key === "Enter") {
      sendMessage();
    }
  }
);
// QUICK REPLIES

quickButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const message =
        button.textContent;

      addMessage(message, "user");


      setTimeout(() => {

        const response =
          getBotResponse(message);

        addMessage(response, "bot");

      }, 500);

    }
  );

});