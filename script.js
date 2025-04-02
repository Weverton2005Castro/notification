if ('Notification' in window) {
    document.addEventListener("DOMContentLoaded", () => {
        let btnNotification = document.querySelector('.btn-notification');

        btnNotification.addEventListener("click", async () => {
            const perm = await Notification.requestPermission();
            
            if (perm === 'granted') {
                new Notification('Oi Mary ❤️', {
                    body: 'Eu amo a Maria Duda!',
                    icon: 'https://seusite.com/imagedorian/imagem.png' // Use um caminho absoluto e HTTPS
                });
            } else {
                alert("Você precisa permitir notificações para receber os alertas.");
            }
        });
    });
} else {
    console.warn("Este navegador não suporta notificações.");
}
