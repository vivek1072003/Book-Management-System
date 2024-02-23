const express = require('express');
const conn = require('./Src/Connection/conn');



const PurchaseBook = async (req, res, next) => {

    let BooksName = { BooksName: req.body.BooksName };
    let Data = req.body.NumberOFBook
    BooksName = [BooksName.BooksName]

    console.log("BooksName" + BooksName);
    try {
        let Sqlquery = "SELECT * FROM tbl_book WHERE BookName =(?)"
        con.query(Sqlquery, BooksName, (err, result) => {
            if (err) {

                return res.status(500).json({
                    error: err
                });

            }
            else {

                for (var a = 0; a < result.length; a++) {
                    let id;
                    id = result[a].id;
                    console.log("ID is " + id);

                    let Sqlquery = "UPDATE tbl_book SET BookStock =? WHERE id =  " + id + ""
                    con.query(Sqlquery, result[a].BookStock - Data, (err, result) => {

                        if (err) {

                            return res.status(500).json({ error: err })
                        }
                        else {
                            return res.status(200).send({ Result: "Purchase " + Data + " Book SuccesFully" });

                        }
                    })
                }

            }

            BooksName = " '" + BooksName + "'";
            let Dat = {
                BookName: req.body.BookName,
                CostomerName: req.body.CostomerName
            }
            Dat = [BooksName, Dat.CostomerName]
            console.log(Dat);
            Sqlquery = "insert into tbl_PurchaseBook(BookName,CostomerName) values(?,?)"
            con.query(Sqlquery, Dat, function (err, result) {
                if (err) {
                    res.send(err)
                };
                return res.status(200).send({ Result: "Purchase " + Data + " Book SuccesFully" });
                console.log(result);
            });
        })

    } catch (error) {

    }
}
const GetPurchases = (req, res) => {
    try {
        let Sqlquery = "select *from tbl_PurchaseBook"
        con.query(Sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result)
            console.log(result);
        })
    } catch (error) {

        console.log(error);

    }
}



const GetSoldBook = (req, res) => {
    var SallerName;
    var OrderID;
    var BookName;

    let Data;
    try {
        let Sqlquery = "select *from tbl_PurchaseBook"
        con.query(Sqlquery, (err, result) => {
            if (err) throw err;

            for (var a = 0; a < result.length; a++) {

                OrderID = result[a].OrderID
                BookName = result[a].BookName

            }
            Data = result


            let Sqlquery2 = "select *from tbl_Saller"
            con.query(Sqlquery2, (err, result) => {
                if (err) throw err;

                for (var a = 0; a < result.length; a++) {

                    SallerName = result[a].SallerName

                }

                return res.status(200).send({ status: true, result: Data,SallerName:SallerName });

            })




        })






    } catch (error) {

        console.log(error);

    }
}






module.exports = {
    PurchaseBook,
    GetPurchases,
    GetSoldBook
}