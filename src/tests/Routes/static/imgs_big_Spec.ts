import infoImg from '../../../utils/infoImg';

const pahtStart = 'img_folders/imgs/';

describe('Route api/img/ size big -> challenge 1', () => {
  it('img_folders/imgs/1/big_img.jpg size', async () => {
    const filename = '1';

    const urlStart: string = pahtStart + filename + '/big_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1440,
      imgHeight: 955
    });
  });

  it('img_folders/imgs/2/big_img.jpg size', async () => {
    const filename = '2';

    const urlStart: string = pahtStart + filename + '/big_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1440,
      imgHeight: 955
    });
  });

  it('img_folders/imgs/3/big_img.jpg size', async () => {
    const filename = '3';

    const urlStart: string = pahtStart + filename + '/big_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1440,
      imgHeight: 955
    });
  });

  it('img_folders/imgs/4/big_img.jpg size', async () => {
    const filename = '4';

    const urlStart: string = pahtStart + filename + '/big_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1440,
      imgHeight: 955
    });
  });

  it('img_folders/imgs/5/big_img.jpg size', async () => {
    const filename = '5';

    const urlStart: string = pahtStart + filename + '/big_img.jpg';

    const img = await infoImg(urlStart);

    expect(img).toEqual({
      imgWidth: 1440,
      imgHeight: 955
    });
  });
});
