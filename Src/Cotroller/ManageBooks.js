const express = require('express');
const conn = require('./Src/Connection/conn');
const Validation = require('../Validation/Validation');



const AddBook = async (req, res, next) => {

    try {

        let Data = {
            BookName: req.body.BookName,
            Discrition: req.body.Discrition,
            Auther: req.body.Auther
        }
        if (!Validation.isValid(Data.BookName)) {
            return res.status(400).send({ status: false, message: "Please provide Book Name field 🛑" });
        }
        if (!Validation.isValid(Data.Discrition)) {
            return res.status(400).send({ status: false, message: "Please provide Discrition field 🛑" });
        }
        if (!Validation.isValid(Data.Auther)) {
            return res.status(400).send({ status: false, message: "Please provide Auther Name field 🛑" });
        }

        Data = [Data.Auther, Data.Discrition, Data.Auther]

        var Sqlquery = "insert into tbl_book(BookName,Discrition,Auther) values(?,?,?)"
        con.query(Sqlquery, Data, function (err, result) {
            if (err) throw err;

            res.status(200).send({ Data: result });
            console.log(result);
        });


    } catch (error) {
        console.log(error);
    }



}
// Get All Book Details
const GetBookList = (req, res) => {

    try {


        let Sqlquery = "select *from tbl_book"
        con.query(Sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result)
            // console.log(result);


        })

    } catch (error) {

        console.log(error);

    }
}
// Get Book with Help of Params (Id)


const SearchBook = (req, res) => {

  try {
    let ID = { Id: req.query.ID };
    let BookName = { BookName: req.query.BookName };
    let Auther = { Auther: req.query.Auther };
    let Data = [ID.Id, BookName.BookName, Auther.Auther]


    let Sqlquery = " SELECT * FROM tbl_book WHERE ID= (?) or BookName = (?) or Auther = (?)"

    con.query(Sqlquery, Data, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    }) 
  } catch (error) {
    console.log(error);
  }

}

// Update Book
const UpdateBook = (req, res) => {
    try {
        let ID = req.params.ID;
        console.log(ID);
        let Data = req.body;
        let UpdateAT = new Date();
        UpdateAT = UpdateAT.toLocaleString();
        UpdateAT = UpdateAT.replaceAll(',', '');
        console.log(UpdateAT);
    
        Data = [
            req.body.BookName,
            req.body.Discrition,
    
            req.body.Auther,
            UpdateAT
        ]
    
        // console.log(Data);
        let Sqlquery = "UPDATE tbl_book SET BookName =?,Discrition =?,Auther =?,UpdateAt =? WHERE id =  " + ID + ""
        con.query(Sqlquery, Data, (err, result) => {
            if (err) throw err;
            res.send(result);
            console.log(result);
        
    
        }); 
    } catch (error) {
        console.log(error);
    }
}











// Delete Book from Params


const DeleteBook = (req, res) => {
    try {
        
        let ID = req.params.ID;


        let Sqlquery = "DELETE FROM tbl_book WHERE ID = (?)";
    
        con.query(Sqlquery, ID, (err, result) => {
            if (err) throw err;
            res.send(result);
            console.log(result);
    
    
        })
    


    } catch (error) {
        console.log(error);
    }


}




module.exports = {
    AddBook,
    GetBookList,
    SearchBook,
    DeleteBook,
    UpdateBook
}