import express from "express";

const imgReview = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let url = req.url
  console.log(`the URL : ${url}`);

  if (req.query.size) {
    const { size } = req.query;
    console.log("req.url.size: " + size);

  }
  next();

};

export default imgReview;