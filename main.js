document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    const container = document.querySelector('.progress-container');
  
    container.addEventListener('mouseenter', () => {
      progressBars.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        const percentText = bar.querySelector('.percent-text');
        const target = parseInt(bar.dataset.target);
  
        fill.style.width = target + '%';
  
        let current = 0;
        const interval = setInterval(() => {
          if (current >= target) {
            clearInterval(interval);
          } else {
            current++;
            percentText.textContent = current + '%';
          }
        }, 15);
  
        // Simpan interval agar bisa dibersihkan saat mouse keluar
        bar.dataset.intervalId = interval;
      });
    });
  
    container.addEventListener('mouseleave', () => {
      progressBars.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        const percentText = bar.querySelector('.percent-text');
  
        fill.style.width = '0%';
        percentText.textContent = '0%';
  
        // Hentikan interval jika masih berjalan
        const intervalId = bar.dataset.intervalId;
        if (intervalId) {
          clearInterval(intervalId);
          bar.removeAttribute('data-interval-id');
        }
      });
    });
  });


  const trigger = document.getElementById('triggerImage');
  const popup = document.getElementById('popup');
  const close = document.getElementById('closePopup');

  trigger.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close popup jika klik luar area gambar
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });






  const popupImages = document.querySelectorAll('.popup img');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreenImg');
const closeFull = document.getElementById('closeFull');

popupImages.forEach(img => {
  img.addEventListener('click', () => {
    fullscreen.style.display = 'flex';
    fullscreenImg.src = img.src;
  });
});

closeFull.addEventListener('click', () => {
  fullscreen.style.display = 'none';
});




function kirimPesan() {
    alert("Pesan terkirim!");
  }