const {Router} = require('express');
const DiscountModel = require('../models/discount');
const router = Router();

const formatData = (data) => {
    const datLeng = data.length;
    let dataItem;
    for(let i = 0; i < datLeng; i++) {
        dataItem = data[i];

        dataItem.percent = Number(dataItem.percent) > 0 ? 
            `-${dataItem.percent}%` : 
            '';
            
        dataItem.priceSmall = Number(dataItem.priceSmall) < 10 ? 
            '0' + dataItem.priceSmall : 
            dataItem.priceSmall;
    }
    return data;
};

router.get('/', async (req, res) => {
    let dataFromDB = await DiscountModel.find().limit(6).lean();
    dataFromDB = formatData(dataFromDB);
    res.render('discounts', {
        layout: 'main',
        title: 'Знижки WF',
        isDiscounts: true,
        dataFromDB
    });
});

router.get('/:pageId', async (req, res) => {
    let dataFromDB = await DiscountModel.find().skip(req.params.pageId*6).limit(6).lean();
    dataFromDB = formatData(dataFromDB);
    res.send(JSON.stringify(dataFromDB));
});

module.exports = router;