
window.onload = function () {
    var messagesContainer = document.getElementById('chat-messages');
    var inputField = document.getElementById('message-input');
    var buttonSend = document.getElementById('send-button');
    var buttonRecord = document.getElementById('record-button');
    var buttonStop = document.getElementById('stop-record-button');
    var buttonPlay = document.getElementById('play-button');
    var indicatorRecording = document.getElementById('recording-indicator');
    var recorder;
    var chunks = [];

    buttonSend.onclick = function () {
        processSendingMessage(inputField.value.trim());
    };

    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            processSendingMessage(inputField.value.trim());
        }
    });

    buttonRecord.onclick = function () {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (audioStream) {
                recorder = new MediaRecorder(audioStream);
                recorder.start();
                chunks = [];

                recorder.ondataavailable = function (event) {
                    chunks.push(event.data);
                };

                recorder.onstop = function () {
                    var blobAudio = new Blob(chunks, { type: 'audio/wav' });
                    var urlAudio = URL.createObjectURL(blobAudio);
                    var playbackAudio = new Audio(urlAudio);
                    playbackAudio.controls = true;
                    messagesContainer.appendChild(playbackAudio);

                    buttonPlay.disabled = false;
                    buttonStop.disabled = true;
                    buttonRecord.disabled = false;
                    indicatorRecording.textContent = '';
                };

                buttonStop.disabled = false;
                buttonRecord.disabled = true;
                indicatorRecording.textContent = 'Recording...';
            })
            .catch(function (error) {
                console.error('Error during audio recording: ', error);
            });
    };

    buttonStop.onclick = function () {
        if (recorder.state === 'recording') {
            recorder.stop();
        }
    };

    buttonPlay.onclick = function () {
        var audioElements = messagesContainer.getElementsByTagName('audio');
        if (audioElements.length > 0) {
            audioElements[audioElements.length - 1].play();
        }
    };

    function processSendingMessage(text) {
        if (text !== '') {
            displayMessage('You', text);
            inputField.value = '';

            var autoResponse = autoGenerateResponse(text);
            if (autoResponse !== '') {
                setTimeout(function () {
                    displayMessage('Bot', autoResponse);
                }, 1000);
            }
        }
    }

    function displayMessage(sender, message) {
        var messageElement = document.createElement('div');
        messageElement.textContent = sender + ': ' + message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function autoGenerateResponse(input) {
        var responses = {
            'hello': 'Hello! How are things going?',
            'bye': 'See you later!',
            'where are you from?': 'I am from Russia!'
        };

        for (var expression in responses) {
            if (input.toLowerCase().includes(expression)) {
                return responses[expression];
            }
        }
        return '';
    }
};
