const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories and associated products

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: Product });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category and its associated products by id

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: Product });
    if (!category) {
      res.status(404).json({ message: 'No category found with that id!' });
    } else {
      res.json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT update an existing category by id

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category found with that id!' });
    } else {
      res.json({ message: 'Category updated successfully!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE an existing category by id

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
    } else {
      res.json({ message: 'Category deleted successfully!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
