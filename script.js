if ('Notification' in window) {
    document.addEventListener("DOMContentLoaded", () => {
        let btnNotification = document.querySelector('.btn-notification');

        btnNotification.addEventListener("click", async () => {
            const perm = await Notification.requestPermission();
            
            if (perm === 'granted') {
                new Notification('Notificação', {
                    body: 'Olá, apenas uma notificação teste!',
                    icon: 'imagedorian/notfy.jpg' // Use um caminho absoluto e HTTPS
                });
            } else {
                alert("Você precisa permitir notificações para receber os alertas.");
            }
        });
    });
} else {
    console.warn("Este navegador não suporta notificações.");
}
