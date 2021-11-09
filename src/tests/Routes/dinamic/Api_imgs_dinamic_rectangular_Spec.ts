import imageProcessing from '../../../utils/imageProcessing';

const pahtEnd = 'img_folders/imgs_prosesing/';
const pahtStart = 'img_folders/imgs/';

describe('rectangular images -> challenge 2', () => {
  it('API /dinamic img 1 size 100x50', async () => {
    const width = '100';
    const height = '50';
    const filename = '1';

    const urlEnd: string =
      pahtEnd + 'w:' + width + '_' + 'h:' + height + '_' + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    const img = await imageProcessing(
      urlStart,
      urlEnd,
      widthNumber,
      heightNumber
    );

    expect(img).toEqual({
      imgWidth: 100,
      imgHeight: 50
    });
  });

  it('API /dinamic img 2 size 200x100', async () => {
    const width = '200';
    const height = '100';
    const filename = '2';

    const urlEnd: string =
      pahtEnd + 'w:' + width + '_' + 'h:' + height + '_' + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    const img = await imageProcessing(
      urlStart,
      urlEnd,
      widthNumber,
      heightNumber
    );

    expect(img).toEqual({
      imgWidth: 200,
      imgHeight: 100
    });
  });

  it('API /dinamic img 3 size 300x150', async () => {
    const width = '300';
    const height = '150';
    const filename = '3';

    const urlEnd: string =
      pahtEnd + 'w:' + width + '_' + 'h:' + height + '_' + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    const img = await imageProcessing(
      urlStart,
      urlEnd,
      widthNumber,
      heightNumber
    );

    expect(img).toEqual({
      imgWidth: 300,
      imgHeight: 150
    });
  });

  it('API /dinamic img 4 size 400x200', async () => {
    const width = '400';
    const height = '200';
    const filename = '4';

    const urlEnd: string =
      pahtEnd + 'w:' + width + '_' + 'h:' + height + '_' + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    const img = await imageProcessing(
      urlStart,
      urlEnd,
      widthNumber,
      heightNumber
    );

    expect(img).toEqual({
      imgWidth: 400,
      imgHeight: 200
    });
  });

  it('API /dinamic img 5 size 500x250', async () => {
    const width = '500';
    const height = '250';
    const filename = '5';

    const urlEnd: string =
      pahtEnd + 'w:' + width + '_' + 'h:' + height + '_' + filename + '.jpg';
    const urlStart: string = pahtStart + filename + '/img.jpg';

    const heightNumber = Number(height);
    const widthNumber = Number(width);

    // factor out the image processing
    const img = await imageProcessing(
      urlStart,
      urlEnd,
      widthNumber,
      heightNumber
    );

    expect(img).toEqual({
      imgWidth: 500,
      imgHeight: 250
    });
  });
});
