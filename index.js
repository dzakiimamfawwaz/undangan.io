const btn = document.querySelector('.btn');
const form = document.querySelector('.app')
let nama = document.querySelector('#namaInput');

btn.addEventListener("click", ()=> {
  const enteredNama = namaInput.value;
  const enteredHP = hpInput.value;
  form.innerHTML = `
  <div class="container">
  <h1>Undangan Pernikahan</h1>
  <h3>
      Dengan memohon rahmat dan ridha Allah, <br><br> kami mengundang
      "${enteredNama}" untuk hadir
      pada acara pernikahan kami:
  </h3>
  
  <p class="date">Sabtu, 15 Januari 2024</p>
  
  <p>
      Acara akan dilaksanakan di:
      <br>
      Jl. Bahagia No. 123, Kecamatan Senang, Kota Ceria
  </p>

  <p>
      Mohon doa restu dan kehadiran Anda akan sangat kami hargai.
  </p>
  
  <p>
      Hormat kami,
      <br>
      <strong>Pasangan Bahagia</strong>
  </p>
</div>`;
});

