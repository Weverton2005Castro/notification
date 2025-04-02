function showNotification() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            
            new Notification('Oi mary ', {
                body: 'eu amo a maria duda',
                image: 'imagedorian/imagem.png',
            });
        }
    });
}

let btnNotification = document.querySelector('.btn-notification');
btnNotification.addEventListener("click", showNotification);