const API = `http://${window.location.hostname}:8080/api/mensagens`;

async function carregar() {
    try {
        const res = await fetch(API);
        const mensagens = await res.json();

        const lista = document.getElementById('lista');
        const vazio = document.getElementById('vazio');

        if (mensagens.length === 0) {
            vazio.textContent = 'Nenhuma mensagem ainda.';
            return;
        }

        lista.innerHTML = [...mensagens].reverse().map(m => `
            <div class="card">
                <div class="nome">${m.nome}</div>
                <div class="msg">${m.mensagem}</div>
                <div class="hora">${new Date(m.criadoEm).toLocaleString('pt-BR')}</div>
            </div>
        `).join('');
    } catch (e) {
        document.getElementById('vazio').textContent = 'Erro ao carregar mensagens.';
    }
}

carregar();
