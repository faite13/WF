const {Router} = require('express');
const DiscountModel = require('../models/discount');
const router = Router();

const formatData = (data) => {
    data.percent = Number(data.percent) > 0 ? `-${data.percent}%` : '';
    data.priceSmall = Number(data.priceSmall) < 10 ? '0' + data.priceSmall : data.priceSmall;
    return data;
};

router.get('/', async (req, res) => {
    let dataFromDB = await DiscountModel.find().limit(6).lean();
    const datLeng = dataFromDB.length;
    for(let i = 0; i < datLeng; i++) {
        dataFromDB[i] = formatData(dataFromDB[i]);
    }
    res.render('home', {
        layout: 'main',
        title: 'Whoole Foods',
        isHome: true,
        dataFromDB
    });
});

module.exports = router;



