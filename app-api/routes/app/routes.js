const express = require('express');
const router = express.Router();
const userapp = require('../../controllers/app/app');

router.get('/store/get', userapp.getStore)
router.get('/cartlist/wait/get' , userapp.getCartWait) //สถานะลูกค้าไม่จ่ายเงิน
router.get('/cartlist/success/get' , userapp.getCartSuccess) //สถานะลูกค้าจ่ายเงินแล้ว
router.post('/cartlist/create' , userapp.createCartlist) //เพิ่มเข้ารถเข็น
router.post('/cartlist/update' , userapp.updateCartlist) //Update Status Waiting -> Success
router.post('/cartlist/delete', userapp.deleteCartlist)
module.exports = router;