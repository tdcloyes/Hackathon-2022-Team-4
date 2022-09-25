import express from 'express';
import data from '../data.json' assert { type: "json" };
const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.barcode) {
        const filteredData = data.sheet1.filter((emission) => {
            console.log(emission["PRODUCT_BARCODE"]);
            console.log(req.query.barcode);
            return emission["PRODUCT_BARCODE"] === Number(req.query.barcode);
        })

        res.send(filteredData);
    }
    res.send(data.sheet1);
});

export default router;