import express from 'express';

const router = express.Router();

module.exports = (params) => {
  router.route('/').get((req, res) => {
    res.send({ data: [] });
  });
  return router;
};
