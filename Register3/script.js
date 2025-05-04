const input = document.getElementById('documento');
const nomeArquivo = document.getElementById('nome-arquivo');

input.addEventListener('change', function () {
    if (this.files.length > 0) {
        nomeArquivo.textContent = this.files[0].name;
    } else {
        nomeArquivo.textContent = '';
    }
});