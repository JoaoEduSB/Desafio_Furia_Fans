function previewImage() {
    const input = document.getElementById('fileInput');
    const preview = document.getElementById('preview');

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  function validarLinks() {
    const palavrasChave = ["furia", "csgo", "esports", "liquipedia", "faceit", "steam", "epicgames", "riot", "valorant"];
    const socialLink = document.getElementById("socialLink").value.toLowerCase();
    const gamerLink = document.getElementById("gamerLink").value.toLowerCase();
    const resultado = document.getElementById("resultadoValidacao");
  
    const todosLinks = socialLink + " " + gamerLink;
  
    const validado = palavrasChave.some(palavra => todosLinks.includes(palavra));
  
    if (validado) {
      resultado.style.color = "green";
      resultado.innerText = "✅ Perfil validado como relacionado a e-sports!";
    } else {
      resultado.style.color = "red";
      resultado.innerText = "❌ Conteúdo não identificado como relacionado a e-sports.";
    }
  }