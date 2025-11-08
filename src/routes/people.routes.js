const express = require('express');
const router = express.Router();
const controller = require('../controllers/people.controller');

router.get('/', controller.getAllPeople);
router.get('/:id', controller.getPersonById);
router.post('/', controller.createPerson);
router.put('/:id', controller.updatePerson);
router.delete('/:id', controller.deletePerson);

module.exports = router;
