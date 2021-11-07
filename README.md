# Image-Processing-API 🤟

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

I made a backend application that meets both challenges, plus if you don't have the images or folders, download them from the internet:

- It gives us a jason with the information of 5 images in a small, medium, recorded and original format

```
http://localhost:3000/api/imgs/static
```

- An EndPoint where you can request any of the 4 images in custom dimensions

```
http://localhost:3000/api/imgs/dinamic?filename=1&width=200&height=200
```

## Getting Started

- Install dependencies _(use node V14.17)_:

```
npm i
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

En la carpeta Middleware creo 2 archivos para el manejo de las potos y carpetas:

- **createFolders.ts**

Se encarga de revisar que esten las carptetas adonde vivira nuestras imagenes existan, y si no estasn las crea y descarga las 5 imagenes del repositorio de Udacity en [github](https://github.com/udacity/nd-0067-c1-building-a-server-project-starter/tree/master/images).

Para la verificar y creacion de las carpetas uso el modulos [fs](https://nodejs.org/docs/latest-v14.x/api/fs.html).

Ejmplo (linea 7 y 28 ):

```js
import fs from 'fs';

if (!fs.existsSync(imgs_prosesing)) {
  fs.mkdirSync(imgs_prosesing);
}
```

Para la descarga de las imagnes uso el modulo [request](https://www.npmjs.com/package/request) y con su [@type/request](https://www.npmjs.com/package/@types/request) para poder usaro con TS.

Ejemplo (linea 5 y 42-46 ):

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

- **imgReview.ts** ->

Se encarga de revisar que el parametro de size, y los tamaños se acoloque bien y de tener las imagenes listas en su respectiva carpeta.

Para la verificar que existe la imagen use el modulo[fs](https://nodejs.org/docs/latest-v14.x/api/fs.html).

Ejmplo (linea 4 y 22 ):

```js
import fs from 'fs';

fs.existsSync(paht + urlSmall + '/small_img.jpg');
```

Para cambiar la dimension de la imagen uso el modulo [sharp](https://www.npmjs.com/package/sharp) y con su [@types/sharp](https://www.npmjs.com/package/@types/sharp) para poder usaro con TS.

Ejemplo (linea 3 y 25-33 ):

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

La ruta de /api/imgs/static, re gresa un Json adonde esta la informacion de las 4 imagenes con los tamaños (pequeño, mediano, grande y original ):

- el archivo se llama: static_img.ts

```
http://localhost:3000/api/imgs/static
```

Para acceder a la image con el tamaño cambiamos el "size" port el que queremos:

```
http://localhost:3000/api/imgs/static/1?size=small
```

Esto es gracias a los Middlewares que me ayudan a manejar las imagenes y los parametros.

### Test

Los archivos de las pruebas los encontramos en la carpeta: test -> Routes -> static y tambien el indexSpec.ts.

Estos archivos se encargan de verigficar el tamaño de dara imagen con los direfentes tamaños y el Json.

## Challenge 2 Documentation /createFolders, haveImg

### Middleware

En la carpeta Middleware creo 2 archivos para el manejo de las potos y carpetas:

- **createFolders.ts**

Se encarga de revisar que esten las carptetas adonde vivira nuestras imagenes existan, y si no estasn las crea y descarga las 5 imagenes del repositorio de Udacity en [github](https://github.com/udacity/nd-0067-c1-building-a-server-project-starter/tree/master/images).

Para la verificar la existencia de las imagenes uso el modulos [fs](https://nodejs.org/docs/latest-v14.x/api/fs.html).

Ejmplo (linea 31-61 ):

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

Para la descarga de las imagnes uso el modulo [request](https://www.npmjs.com/package/request) y con su [@type/request](https://www.npmjs.com/package/@types/request) para poder usaro con TS.

Ejemplo (linea 5 y 42-46 ):

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

- **haveImg.ts** ->

Se encarga de revisar que el parametro que manda el usuario al endpoint como el filename, width, height, y de comprobar si ya hay una imagen personalisada junto con con las dimensiones que se piden, en el caso de que cumpla todo se manda al usuario la imagen y si no se elimina y se sigue con el codigo.

Para la verificar que existe la imagen use el modulo[fs](https://nodejs.org/docs/latest-v14.x/api/fs.html)

Ejmplo (linea 4 y 22 ):

```js
import fs from 'fs';

fs.existsSync(paht + urlSmall + '/small_img.jpg');
```

Para cambiar la dimension de la imagen uso el modulo [sharp](https://www.npmjs.com/package/sharp) y con su [@types/sharp](https://www.npmjs.com/package/@types/sharp) para poder usaro con TS.

Ejemplo (linea 3 y 25-33 ):

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

La ruta de /api/imgs/static, re gresa un Json adonde esta la informacion de las 4 imagenes con los tamaños (pequeño, mediano, grande y original ):

- el archivo se llama: static_img.ts

```
http://localhost:3000/api/imgs/static
```

Para acceder a la image con el tamaño cambiamos el "size" port el que queremos:

```
http://localhost:3000/api/imgs/static/1?size=small
```

Esto es gracias a los Middlewares que me ayudan a manejar las imagenes y los parametros.

### Test

Los archivos de las pruebas los encontramos en la carpeta: test -> Routes -> static y tambien el indexSpec.ts.

Estos archivos se encargan de verigficar el tamaño de dara imagen con los direfentes tamaños y el Json.
