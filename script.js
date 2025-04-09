  fetch('https://api.countapi.xyz/get/mateehomps/portfolio/?amount=1')
    .then(res => res.json())
    .then(data => {
      document.getElementById('visits').innerText = data.value;
    });
<script src="https://kit.fontawesome.com/yourkit.js" crossorigin="anonymous"></script>