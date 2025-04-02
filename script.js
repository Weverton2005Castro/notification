document.addEventListener("DOMContentLoaded", () => {
    let btnNotification = document.querySelector('.btn-notification');

    btnNotification.addEventListener("click", async () => {
        if (!("Notification" in window)) {
            alert("Seu navegador não suporta notificações.");
            return;
        }

        try {
            const perm = await Notification.requestPermission();
            console.log("Permissão da notificação:", perm);

            if (perm === 'granted') {
                alert("Oi Mary ❤️\nEu amo a Maria Duda!");
            } else {
                alert("Você precisa permitir notificações para ver este alerta.");
            }
        } catch (error) {
            alert("Erro ao solicitar notificação: " + error.message);
            console.error("Erro:", error);
        }
    });
});
