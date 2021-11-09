import infoImg from '../../../utils/infoImg';

const pahtStart = 'img_folders/imgs/';

describe('Route api/img/ size original -> challenge 1', () => {
  it('img_folders/imgs/1/img.jpg size', async () => {
    const filename = '1';

    const urlStart: string = pahtStart + filename + '/img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1920,
      imgHeight: 1273
    });
  });

  it('img_folders/imgs/2/img.jpg size', async () => {
    const filename = '2';

    const urlStart: string = pahtStart + filename + '/img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1920,
      imgHeight: 1280
    });
  });

  it('img_folders/imgs/3/img.jpg size', async () => {
    const filename = '3';

    const urlStart: string = pahtStart + filename + '/img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1920,
      imgHeight: 1273
    });
  });

  it('img_folders/imgs/4/img.jpg size', async () => {
    const filename = '4';

    const urlStart: string = pahtStart + filename + '/img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1920,
      imgHeight: 1280
    });
  });

  it('img_folders/imgs/5/img.jpg size', async () => {
    const filename = '5';

    const urlStart: string = pahtStart + filename + '/img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1920,
      imgHeight: 1273
    });
  });
});
