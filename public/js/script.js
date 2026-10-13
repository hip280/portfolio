// Full-Page Floating & Wandering Gear Animation
  const gearWatermark = document.querySelector('.global-gear-watermark');
  
  if (gearWatermark) {
    let posX = 100;
    let posY = 100;
    let speedX = 1.8;
    let speedY = 1.4;

    function moveGearAcrossPage() {
      const gearSize = gearWatermark.offsetWidth || 110;
      
      posX += speedX;
      posY += speedY;

      // Bounce off screen boundaries so it roams across the whole viewport
      if (posX <= 10 || posX >= window.innerWidth - gearSize - 10) {
        speedX *= -1;
      }
      if (posY <= 70 || posY >= window.innerHeight - gearSize - 10) {
        speedY *= -1;
      }

      gearWatermark.style.left = `${posX}px`;
      gearWatermark.style.top = `${posY}px`;

      requestAnimationFrame(moveGearAcrossPage);
    }

    requestAnimationFrame(moveGearAcrossPage);
  }