document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.countapi.xyz/update/mateehomps/portfolio/?amount=1')
      .then(res => res.json())
      .then(data => {
        document.getElementById('visits').innerText = data.value;
      });
  });

fetch('https://api.countapi.xyz/get/mateehomps/portfolio/?amount=1')
    .then(res => res.json())
    .then(data => {
      document.getElementById('visits').innerText = data.value;
    });
   
      
