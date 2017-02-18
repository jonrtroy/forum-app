const router = require('express').Router();
const controller = require('./controller');

router.get('/:id/edit', controller.edit);

router.put('/:id/like', controller.like);

router.get('/new', controller.new);

router.get('/:id', controller.show);

// router.delete('/:id', controller.destroy);

router.get('/', controller.index);

router.post('/', controller.create);

router.post('/:id', controller.createComment);

router.put('/:id', controller.update);

module.exports = router;
