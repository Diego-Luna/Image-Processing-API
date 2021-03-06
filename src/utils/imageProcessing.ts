/* eslint-disable no-console */
import sharp from 'sharp';

interface imgSize {
  imgWidth: number;
  imgHeight: number;
}

// factor out the image processing
async function imageProcessing(
  urlStart: string,
  urlEnd: string,
  widthNumber: number,
  heightNumber: number
): Promise<imgSize | undefined> {
  try {
    const image = sharp(urlStart);

    await image.resize(widthNumber, heightNumber).toFile(urlEnd);

    const { width, height } = await sharp(urlEnd).metadata();

    const imgHeightNumber = Number(height);
    const imgWidthNumber = Number(width);

    const infoImag: imgSize = {
      imgWidth: imgWidthNumber,
      imgHeight: imgHeightNumber
    };
    return infoImag;
  } catch (error) {
    console.log('image error: ' + error);
  }
}

export default imageProcessing;
