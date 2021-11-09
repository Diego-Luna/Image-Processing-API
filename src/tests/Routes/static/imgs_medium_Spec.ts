import infoImg from '../../../utils/infoImg';

const pahtStart = 'img_folders/imgs/';

describe('Route api/img/ size medium -> challenge 1', () => {
  it('img_folders/imgs/1/medium_img.jpg size', async () => {
    const filename = '1';

    const urlStart: string = pahtStart + filename + '/medium_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 960,
      imgHeight: 636
    });
  });

  it('img_folders/imgs/2/medium_img.jpg size', async () => {
    const filename = '2';

    const urlStart: string = pahtStart + filename + '/medium_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 960,
      imgHeight: 636
    });
  });

  it('img_folders/imgs/3/medium_img.jpg size', async () => {
    const filename = '3';

    const urlStart: string = pahtStart + filename + '/medium_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 960,
      imgHeight: 636
    });
  });

  it('img_folders/imgs/4/medium_img.jpg size', async () => {
    const filename = '4';

    const urlStart: string = pahtStart + filename + '/medium_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 960,
      imgHeight: 636
    });
  });

  it('img_folders/imgs/5/medium_img.jpg size', async () => {
    const filename = '5';

    const urlStart: string = pahtStart + filename + '/medium_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 960,
      imgHeight: 636
    });
  });
});
