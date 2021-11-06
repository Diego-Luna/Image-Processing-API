import express from 'express';
import fs from "fs";

const imgURLS = express.Router();
const path = "src/imgs/"

imgURLS.get('/1', (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '1/img.jpg').pipe(res);
});

imgURLS.get('/2', (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '2/img.jpg').pipe(res);
});

imgURLS.get('/3', (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '3/img.jpg').pipe(res);
});

imgURLS.get('/4', (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '4/img.jpg').pipe(res);
});

imgURLS.get('/5', (req, res) => {
  res.writeHead(200, { 'content-type': 'image/jpg' });
  fs.createReadStream(path + '5/img.jpg').pipe(res);
});


export default imgURLS;