const express = require('express');
const { login } = require('../controllers/auth');
// const User = require('../models/user');
const {Result} = require('../models/user');

const router = express.Router();

router.post('/login', login);

router.get('/', async (req, res) => {
    try {
      const results = await Result.find();
      res.json(results);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET one result
  router.get('/:id', getResult, (req, res) => {
    res.json(res.result);
  });
  
  // POST a new result
  router.post('/', async (req, res) => {
    const result = new Result({
      studentName: req.body.studentName,
      subject: req.body.subject,
      marks: req.body.marks
    });
  
    try {
      const newResult = await result.save();
      res.status(201).json(newResult);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // UPDATE an existing result
  router.patch('/:id', getResult, async (req, res) => {
    if (req.body.studentName != null) {
      res.result.studentName = req.body.studentName;
    }
  
    if (req.body.subject != null) {
      res.result.subject = req.body.subject;
    }
  
    if (req.body.marks != null) {
      res.result.marks = req.body.marks;
    }
  
    try {
      const updatedResult = await res.result.save();
      res.json(updatedResult);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE a result
  router.delete('/:id', getResult, async (req, res) => {
    try {
      await res.result.remove();
      res.json({ message: 'Result deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  async function getResult(req, res, next) {
    let result;
  
    try {
      result = await Result.findById(req.params.id);
  
      if (result == null) {
        return res.status(404).json({ message: 'Result not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.result = result;
    next();
  }

module.exports = router;