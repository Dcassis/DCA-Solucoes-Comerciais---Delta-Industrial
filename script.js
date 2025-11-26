document.getElementById("visitaForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const empresa = document.getElementById("empresa").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("msg");

      if (nome && telefone && empresa && email) {
        const whatsappNumber = '5579999411819';
        const text = encodeURIComponent(
          `Olá! Gostaria de agendar uma visita:%0A` +
          `Nome: ${nome}%0A` +
          `Telefone/WhatsApp: ${telefone}%0A` +
          `Empresa: ${empresa}%0A` +
          `E-mail: ${email}`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        msg.innerHTML = "✅ Redirecionando para o WhatsApp...";
        msg.style.color = "green";
        this.reset();
      } else {
        msg.innerHTML = "⚠️ Por favor, preencha todos os campos.";
        msg.style.color = "red";
      }
});
    
document.getElementById("ano-atual").innerHTML = new Date().getFullYear();