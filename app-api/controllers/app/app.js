const APIModel = require('../../models/app/app');
const app_config = require('../../../config/app.json')
const bu = Object.keys(app_config)[0]


exports.createCartlist = (req, res) => {
    let name = req.body.name;
    let product = req.body.product;
    let amount = req.body.amount;
    let address = req.body.address;

    APIModel.createCartlist(name, product, amount, address, bu).then((recordset) => {
            res.status(200).json({
                status: true,
                message: "Create Success",
                data: {
                    "req": req.body
                }
            });
        })
        .catch((err) => {
            res.status(404).json({
                status: false,
                err
            });
        });
};



exports.updateCartlist = (req, res) => {
    let name = req.body.name || '';
    APIModel.updateCartlist(name, bu).then((recordset) => {
            res.status(200).json({
                status: true,
                message: "Update Success",
                data: {
                    "req": req.body,
                    "Status": "Success"
                }
            });
        })
        .catch((err) => {
            res.status(404).json({
                status: false,
                err
            });
        });
};

exports.deleteCartlist = (req, res) => {
    let name = req.body.name || '';
    APIModel.deleteCartlist(name, bu).then((recordset) => {
            res.status(200).json({
                status: true,
                message: "Delete Success",
                data: {
                    "req": req.body,
                    "Status": "Cancel"
                }
            });
        })
        .catch((err) => {
            res.status(404).json({
                status: false,
                err
            });
        });
};

exports.getCartWait = (req, res) => {
    let username = req.query.username;
        APIModel.getCartWait(username, bu).then((recordset) => {
                if (recordset !== undefined) {
                    let data = recordset.map(obj => {
                        return {
                            
                            "ชื่อลูกค้า": obj.name,
                            "สินค้า": obj.product,
                            "จำนวน": obj.amount + "ชุด",
                            "ที่อยู่": obj.address,
                            "วันที่สั่งซื้อ": obj.date,
                            "สถานะ": obj.status
                        }
                    })
                    res.status(200).json({
                        status: true,
                        message: "Query Success",
                        data
                    });
                } else {
                    res.status(200).json({
                        status: true,
                        message: "Query Success",
                        data: []
                    });
                }
            })
            .catch((err) => {
                res.status(404).json({
                    status: false,
                    err
                });
            });
};

exports.getCartSuccess = (req, res) => {
    let username = req.query.username;

        APIModel.getCartSuccess(username, bu).then((recordset) => {
                if (recordset !== undefined) {
                    let data = recordset.map(obj => {
                        return {
                            
                            "ชื่อลูกค้า": obj.name,
                            "สินค้า": obj.product,
                            "จำนวน": obj.amount + "ชุด",
                            "ที่อยู่": obj.address,
                            "วันที่สั่งซื้อ": obj.date,
                            "สถานะ": obj.status
                        }
                    })
                    res.status(200).json({
                        status: true,
                        message: "Query Success",
                        data
                    });
                } else {
                    res.status(200).json({
                        status: true,
                        message: "Query Success",
                        data: []
                    });
                }
            })
            .catch((err) => {
                res.status(404).json({
                    status: false,
                    err
                });
            });
    
};

exports.getStore = (req, res) => {
    let gender = req.query.gender;
    let size = req.query.size;
    let category = req.query.category;
    let limit = req.query.limit;
    let limits = parseInt(limit);
    if (gender !== undefined || size !== undefined || category !== undefined) {
        APIModel.getStore(gender,size,category,limits,bu).then((recordset) => {
                if (recordset !== undefined) {
                    let data = recordset.map(obj => {
                        return {
                            
                            "ประเภทของชุด": obj.gender,
                            "ขนาดชุด": obj.size,
                            "หมวดหมู่": obj.category,
                            "ราคา": obj.price + " บาท",
                            
                        }
                    })
                    res.status(200).json({
                        status: true,
                        message: "Query Success",
                        data
                    });
                } else {
                    res.status(200).json({
                        status: true,
                        message: "Query Success",
                        data: []
                    });
                }
            })
            .catch((err) => {
                res.status(404).json({
                    status: false,
                    err
                });
            });
    } else {
        res.status(200).json({
            status: false,
            message: "Query Unsuccess",
        });
    }
};