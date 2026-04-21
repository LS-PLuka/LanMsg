const API = `http://${window.location.hostname}:8080/api/mensagens`;

async function enviar() {
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Preencha todos os campos!');
        return;
    }

    try {
        const res = await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, mensagem })
        });

        if (res.ok) {
            document.getElementById('status').textContent = 'Mensagem enviada!';
            document.getElementById('nome').value = '';
            document.getElementById('mensagem').value = '';

            setTimeout(() => {
                window.location.href = '/mensagens.html';
            }, 800);
        }
    } catch (e) {
        const status = document.getElementById('status');
        status.textContent = 'Erro ao enviar.';
        status.style.color = 'red';
    }
}
