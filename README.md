For Book Management 


<<<<<<<<<<<<<<<<<http://localhost:3000/AddBook>>>>>>>>>>>>>>>>>
<<Mehod --Post>>
Request  From Body
{
            "BookName":"The Dark Knight" ,
            "Discrition":"After Gordon, Dent and Batman begin an assault on Gotham's organised crime",
            "Auther": "Christopher Nolan"
}
Responce {

{
    "Data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 1,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
}


<<<<<<<<<<<<<<<<<http://localhost:3000/GetAllBook>>>>>>>>>>>>>>>>>
<<Mehod --Get>>
--responce --
[
    {
        "id": 1,
        "BookName": "Christopher Nolan",
        "Discrition": "After Gordon, Dent and Batman begin an assault on Gotham's organised crime",
        "Auther": "Christopher Nolan",
        "SoldBysaller": "NA",
        "PurcsBycustomer": "NA",
        "BookStock": "20",
        "CreateAt": "2022-12-01T10:46:38.000Z",
        "UpdateAt": "NA"
    }
]

<<<<<<<<<<<<<<<<<http://localhost:3000/GetSallerByKey>>>>>>>>>>>>>>>>>
<<Mehod --Get>>
req.query.ID or SallerName or MobileNO

--responce --


[
    {
        "id": 1,
        "SallerName": "Sumit Book Store",
        "Address": "Noida",
        "MobileNO": "7777777777",
        "BookSales": "NA",
        "CreateAt": "2022-12-01T04:11:11.000Z",
        "UpdateAt": "01/12/2022 09:42:04"
    }
]


<<<<<<<<<<<<<<<<<http://localhost:3000/UpdateBook/:ID>>>>>>>>>>>>>>>>>
<<Mehod --put>>
req.query.ID or SallerName or MobileNO



<<<<<<<<<<<<<<<<<http://localhost:3000/DeleteBook/:ID>>>>>>>>>>>>>>>>>
<<Mehod --Delete>>
req.query.ID or SallerName or MobileNO


for Customer Managment


<>>>>>>>> http://localhost:3000/AddCustomer>>>>>
<<Mehod --Post>>
reques  From Body
{
            "Name": "Ankit",
            "MobileNo": "9856453535",
            "Address": "Gorakhpur"
}
responce from Back-end
{
    "Data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 4,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
} 


<>>>>>>>> http://localhost:3000/GetCustomerList>>>>>
<<Mehod --Get>>
Same As Add Book


<<<<<<<<<<<<<http://localhost:3000/GetCustomerByKey>>>>>>>>>>>>>>>>>>>>>>>>
<<Mehod --Get>>
Same As Add Book

<<<<<<<<<<<<<http://localhost:3000/UpdateCustomer/:ID>>>>>>>>>>>>>>>>>>>>>>>>
<<Mehod --put>>
Same As Add Book


<<<<<<<<<<<<<http://localhost:3000/DeleteCustomer/:ID>>>>>>>>>>>>>>>>>>>>>>>>
<<Mehod --delete>>
Same As Add Book








<<<<<<<<<<<<<<<for Saller  Management>>>>>>>>>>>>>>


<>>>>>>>> http://localhost:3000/AddSaller>>>>>
<<Mehod --Post>>
reques  From Body
{
    "SallerName":"Sumit BookStore",
            "Address":"Noida",
            "MobileNO": "8989898998"
}
{
    "Data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 4,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}


<>>>>>>>> http://localhost:3000/GetSalerList>>>>>
<<Mehod --Get>>
Same As Add Book


<<<<<<<<<<<<<http://localhost:3000/GetSallerByKey>>>>>>>>>>>>>>>>>>>>>>>>
<<Mehod --Get>>
Same As Get Book

<<<<<<<<<<<<<http://localhost:3000/UpdateSaller/:ID>>>>>>>>>>>>>>>>>>>>>>>>
<<Mehod --put>>
Same As Get Book

>>req.params.id  = 1
>>Reques From Body

{
    "SallerName": "Sumit Book Store",
     "MobileNO": "7777777777"
}
>>responce From Back-end
{
    {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}
}


<<<<<<<<<<<<<http://localhost:3000/DeleteSaller/:ID>>>>>>>>>>>>>>>>>>>>>>>>
<<Mehod --delete>>
Same As Add Book


>> req.params.id  = 1
>> responce From BAck-end
 {
    "fieldCount": 0,
    "affectedRows": 0,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}




<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Purchases Book API >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
http://localhost:3000/PurchaseBook

For Purchase Book 

Request From Body :
{
    "NumberOFBook":"1",
    "BooksName":"Knight ",
    "CostomerName":"Sumit BookStore"

}


responce from BAck-end Server :
{
    "Result": "Purchase 1 Book Succesfully" 
}


<<<<<<<<<<<<<<<<<<------Get Purchase Book list from Customer----->>>>>>>>>>>>>>>>>>>>>>>

http://localhost:3000/GetPurchases
>>>>method: GET>>>>>

responce from Back-end Server :
[
    {
        "OrderID": 20,
        "BookName": " 'Peter Parker'",
        "CostomerName": "Junid Alam",
        "CreateAt": "2022-12-01T07:49:10.000Z"
    },{
        "OrderID": 38,
        "BookName": " 'Knight '",
        "CostomerName": "Sumit BookStore",
        "CreateAt": "2022-12-01T11:18:43.000Z"
    }
]






<<<<<<<<<<<<<<<<<<------Get Sold Book Screen With Saller----->>>>>>>>>>>>>>>>>>>>>>>
>>>>method: GET>>>>>
{
    [
            "OrderID": 37,
            "BookName": " 'Knight '",
            "CostomerName": "Sumit BookStore",
            "CreateAt": "2022-12-01T11:17:02.000Z"
        },
        {
            "OrderID": 38,
            "BookName": " 'Knight '",
            "CostomerName": "Sumit BookStore",
            "CreateAt": "2022-12-01T11:18:43.000Z"
        }
    ],
    "SallerName": "Sumit BookStore"
}
