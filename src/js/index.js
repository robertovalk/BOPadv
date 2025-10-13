 (function(){
    const nameInput = document.getElementById('contact-name');
    const wppBtn = document.getElementById('btn-whatsapp');
    const mailBtn = document.getElementById('btn-email');

    function updateLinks(){
      const nome = (nameInput.value || '{seu nome}').trim();
      const msg = `Oi, me chamo ${nome} e vim pelo site, quero mais informações`;
      const wpp = `https://wa.me/559292778830?text=${encodeURIComponent(msg)}`;

      // troque pelo e-mail oficial
      const email = `mailto:contato@seu-dominio.com?subject=${encodeURIComponent('Contato pelo site')}&body=${encodeURIComponent(msg)}`;

      wppBtn.href = wpp;
      mailBtn.href = email;
    }

    nameInput.addEventListener('input', updateLinks);
    updateLinks(); // inicial
  })();