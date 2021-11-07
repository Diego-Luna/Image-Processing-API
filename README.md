# Image-Processing-API 🤟

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

I made a backend application that meets both challenges, plus if you don't have the images or folders, download them from the internet:

- It gives us a jason with the information of 5 images in a small, medium, big and original format

```
http://localhost:3000/api/imgs/static
```

- An EndPoint where you can request any of the 5 images in custom dimensions

```
http://localhost:3000/api/imgs/dinamic?filename=1&width=200&height=200
```

## Getting Started

- Install dependencies _(use node V14.17)_:

```
npm install
```

- Development command:

```
npm run start
```

- Test command:

```
npm run test
```

- Build command:

```
npm run build
```

## Challenge 1 Documentation

### Middleware

In the Middleware folder I create 2 files for managing the potos and folders:

- **createFolders.ts**

It is in charge of checking that the folders where our images will live exist, and if they are not, it creates them and downloads the 5 images from the Udacity repository in [github](https://github.com/udacity/nd-0067-c1-building-a-server-project-starter/tree/master/images).

To verify and create the folders I use the modules [fs](https://nodejs.org/docs/latest-v14.x/api/fs.html).

Example (line 7 and 28):

```js
import fs from 'fs';

if (!fs.existsSync(imgs_prosesing)) {
  fs.mkdirSync(imgs_prosesing);
}
```

To download the images I use the module [request](https://www.npmjs.com/package/request) and with his [@type/request](https://www.npmjs.com/package/@types/request) to be able to use it with TS.

Example (line 5 and 42-46):

```js
import request from 'request';

for (let i = 0; i <= imgsURLS.length; i++) {
  const iNumber: number = i + 1;
  request.head(imgsURLS[i], function (err, res, body) {
    request(imgsURLS[i])
      .pipe(fs.createWriteStream(`${imgs}/${iNumber}/img.jpg`))
      .on('close', () => {});
  });
}
```

- **imgReview.ts**

It is responsible for checking that the size parameter, and the sizes are well placed and having the images ready in their respective folder.

To verify that the image exists use the module [fs](https://nodejs.org/docs/latest-v14.x/api/fs.html).

Example (line 4 and 22):

```js
import fs from 'fs';

fs.existsSync(paht + urlSmall + '/small_img.jpg');
```

To change the dimension of the image you used the module [sharp](https://www.npmjs.com/package/sharp) and with his [@types/sharp](https://www.npmjs.com/package/@types/sharp) to be able to use it with TS.

Example (line 3 and 25-33):

```js
import sharp from 'sharp';

sharp(paht + urlSmall + '/img.jpg')
  .resize(480, 318)
  .toFile(paht + urlSmall + '/small_img.jpg', function (err) {
    if (err) {
      res.status(400).send('wrong syntax : ' + url);
    }

    next();
  });
```

### Routes

The path of / api / imgs / static ,, returns a Json where is the information of the 4 images with the sizes (small, medium, large and original):

- the file is called: **static_img.ts**

```
http://localhost:3000/api/imgs/static
```

To access the image with the size we change the "size" port to the one we want:

```
http://localhost:3000/api/imgs/static/1
http://localhost:3000/api/imgs/static/1?size=small
http://localhost:3000/api/imgs/static/1?size=medium
http://localhost:3000/api/imgs/static/1?size=big

http://localhost:3000/api/imgs/static/2
http://localhost:3000/api/imgs/static/2?size=small
http://localhost:3000/api/imgs/static/2?size=medium
http://localhost:3000/api/imgs/static/2?size=big

http://localhost:3000/api/imgs/static/3
http://localhost:3000/api/imgs/static/3?size=small
http://localhost:3000/api/imgs/static/3?size=medium
http://localhost:3000/api/imgs/static/3?size=big

http://localhost:3000/api/imgs/static/4
http://localhost:3000/api/imgs/static/4?size=small
http://localhost:3000/api/imgs/static/4?size=medium
http://localhost:3000/api/imgs/static/4?size=big

http://localhost:3000/api/imgs/static/5
http://localhost:3000/api/imgs/static/5?size=small
http://localhost:3000/api/imgs/static/5?size=medium
http://localhost:3000/api/imgs/static/5?size=big

```

This is thanks to the Middlewares that help me to manage the images and the parameters.

### Test

The test files are found in the folder: `test -> Routes -> static` and also the `indexSpec.ts.`

These files are in charge of verifying the size of the image with the different sizes and the Json.

## Challenge 2 Documentation

### Middleware

In the Middleware folder I create 2 files for managing the potos and folders:

- **createFolders.ts**

It is in charge of checking that the folders where our images will live exist, and if they are not, it creates and downloads the 5 images from the Udacity repository in [github](https://github.com/udacity/nd-0067-c1-building-a-server-project-starter/tree/master/images).

- **haveImg.ts**

It is in charge of checking that the parameter that the user sends to the endpoint such as the filename, width, height, and of checking if there is already a customized image along with the requested dimensions, in the event that it fulfills everything, it is sent to the user the image and if it is not deleted and continue with the code.

To verify that the image exists I use the modules [fs](https://nodejs.org/docs/latest-v14.x/api/fs.html).To review the dimensions and create the images you used the module [sharp](https://www.npmjs.com/package/sharp) and with his [@types/sharp](https://www.npmjs.com/package/@types/sharp)

Example (line 31-61):

```js
if (fs.existsSync(dinamicUrl)) {
  const image = sharp(dinamicUrl);
  image
    .metadata()
    .then(function (data) {
      const dataWidth = Number(data.width);
      const dataHeight = Number(data.height);

      const widthString = Number(width);
      const heightString = Number(height);

      if (widthString === dataWidth && heightString === dataHeight) {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        fs.createReadStream(dinamicUrl).pipe(res);
      } else {
        fsPromises
          .unlink(dinamicUrl)
          .then(() => {
            next();
          })
          .catch(() => {
            res.status(500).send('Error in processing the img');
          });
      }
    })
    .catch(() => {
      res.status(500).send('Error checking image dimensions, try another time');
    });
}
```

### Routes

The path of `/api/imgs/dinamic?filename=1&width=200&height=200`, return the image you select (from 1 to 5), with the necessary dimensionsfor the project.

- the file is called: **dinamic_img.ts**

```
http://localhost:3000/api/imgs/dinamic?filename=1&width=200&height=200

http://localhost:3000/api/imgs/dinamic?filename=2&width=500&height=200

http://localhost:3000/api/imgs/dinamic?filename=3&width=1000&height=500

http://localhost:3000/api/imgs/dinamic?filename=4&width=500&height=1000

http://localhost:3000/api/imgs/dinamic?filename=5&width=600&height=200
```

This is thanks to the Middlewares that help me to manage the images and the parameters.

### Test

The test files are found in the folder: `test -> Routes -> dinamic.`

These files are in charge of verifying the creation of the 5 images with different dimensions.
