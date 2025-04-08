const outputDiv = document.getElementById('assistant-output');
const micButton = document.getElementById('mic-button');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

micButton.addEventListener('click', () => {
  recognition.start();
  outputDiv.textContent = 'Listening...';
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  outputDiv.textContent = 'You said: ' + transcript;
  // Process the transcript as needed
};

recognition.onerror = (event) => {
  outputDiv.textContent = 'Error occurred: ' + event.error;
};