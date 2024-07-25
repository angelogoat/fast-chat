function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

function closeMenu() {
    document.getElementById('sidebar').style.left = '-250px';
}

function openChat() {
    document.getElementById('chat-window').style.display = 'flex';
}

function closeChat() {
    document.getElementById('chat-window').style.display = 'none';
}

const socket = io();

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        socket.emit('chat message', message);
        input.value = '';
    }
}

socket.on('chat message', function(msg) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
});
