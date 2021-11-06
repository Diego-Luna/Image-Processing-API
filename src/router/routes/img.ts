import express from 'express';
import imgReview from '../../Middleware/imgReview';
import fs from "fs";

const imgURLS = express.Router();
const path = "src/imgs/"

imgURLS.get('/1', imgReview, (req, res) => {

  const { size } = req.query;

  if (size == undefined || size != "original") {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '1/'+ size +'_img.jpg').pipe(res);
  } else {
    res.writeHead(200, { 'content-type': 'image/jpg' });
    fs.createReadStream(path + '1/img.jpg').pipe(res);
  }


});

imgURLS.get('/2', imgReview, (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '2/img.jpg').pipe(res);
});

imgURLS.get('/3', imgReview, (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '3/img.jpg').pipe(res);
});

imgURLS.get('/4', imgReview, (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '4/img.jpg').pipe(res);
});

imgURLS.get('/5', imgReview, (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '5/img.jpg').pipe(res);
});


export default imgURLS;