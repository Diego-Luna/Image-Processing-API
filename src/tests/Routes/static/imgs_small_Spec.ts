import infoImg from '../../../utils/infoImg';

const pahtStart = 'img_folders/imgs/';

describe('img_folders/imgs/ small_img.jpg  -> challenge 1', () => {
  it('img_folders/imgs/1/small_img.jpg size', async () => {
    const filename = '1';

    const urlStart: string = pahtStart + filename + '/small_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 480,
      imgHeight: 318
    });
  });

  it('img_folders/imgs/2/small_img.jpg size', async () => {
    const filename = '2';

    const urlStart: string = pahtStart + filename + '/small_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 480,
      imgHeight: 318
    });
  });

  it('img_folders/imgs/3/small_img.jpg size', async () => {
    const filename = '3';

    const urlStart: string = pahtStart + filename + '/small_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 480,
      imgHeight: 318
    });
  });

  it('img_folders/imgs/4/small_img.jpg size', async () => {
    const filename = '4';

    const urlStart: string = pahtStart + filename + '/small_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 480,
      imgHeight: 318
    });
  });

  it('img_folders/imgs/5/small_img.jpg size', async () => {
    const filename = '5';

    const urlStart: string = pahtStart + filename + '/small_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 480,
      imgHeight: 318
    });
  });
});
