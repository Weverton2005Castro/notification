function showNotification() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            // Cria a notificação com o corpo e ícone definidos corretamente
            new Notification('Olá gente ', {
                body: 'olá eu sou o rianzinho do grau 157',
                image: 'imagedorian/notfy.jpg'
            });
        }
    });
}

let btnNotification = document.querySelector('.btn-notification');
btnNotification.addEventListener("click", showNotification);