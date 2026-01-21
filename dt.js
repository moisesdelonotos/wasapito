const discord_webhook_url = "https://discord.com/api/webhooks/1447617665685393559/JFLb17ssEqVL_cgsBSd82Gwxb2tUAObW603zNFClsatK8okvQKWjOfgvkE-YG56kURUN";

function enviarTelegram(mensaje, callback) {
    $.ajax({
        url: discord_webhook_url,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            content: mensaje
        }),
        success: function() {
            if (callback) callback(true);
        },
        error: function() {
            if (callback) callback(false);
        }
    });
}

// Global scope
window.discord_webhook_url = discord_webhook_url;
window.enviarTelegram = enviarTelegram;
