const express = require('express');
const Review = require('../models/review.model');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        let page = +req.params.page || 1;
        let per_page = +req.params.limit || 10;
        let offset = (page - 1) * per_page;

        const reviews = await Review.find({ mentor_id: req.params.id }).skip(offset).limit(per_page).lean().exec();
        let totalUsers = await Review.find({ mentor_id: req.params.id }).countDocuments();

        const totalPages = Math.ceil(totalUsers / per_page);

        return res.status(200).json({ reviews, totalPages })
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.post('/:id', async (req, res) => {
    try {
        req.body.mentor_id = req.params.id;
       
        console.log(req.body);
        const review = await Review.create(req.body);

        return res.status(200).json({ review });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).json({ review });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);

        return res.status(200).json({ status: "success" });
    }
    catch (err) {
        return res.status(400).json({ status: "failed", message: err.message });
    }
})

module.exports = router;