import Jimp from 'jimp';

async function processLogo() {
  try {
    const image = await Jimp.read('./public/diagnuvo-logo.jpeg');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      const threshold = 230;
      if (red > threshold && green > threshold && blue > threshold) {
        // Fully transparent
        this.bitmap.data[idx + 3] = 0;
      } else if (red > 200 && green > 200 && blue > 200) {
        // Partial transparency for anti-aliasing edges
        const avg = (red + green + blue) / 3;
        const newAlpha = Math.max(0, 255 - ((avg - 200) * (255 / 30)));
        this.bitmap.data[idx + 3] = newAlpha;
      }
    });

    await image.writeAsync('./public/diagnuvo-logo.png');
    console.log('Logo processed successfully');
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processLogo();
