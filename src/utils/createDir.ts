import fs from 'fs';
import { Response } from 'express';

const fsPromises = fs.promises;

async function createDir(url: string, res: Response): Promise<void> {
  try {
    return fsPromises.mkdir(url);
  } catch (err) {
    res.status(500).send('Error downloading images, try another time');
  }
}

export default createDir;
