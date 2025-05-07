const mongoose = require('mongoose');
main().then(() =>{
    console.log("Connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:30,
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:[10,"Price is too low for amazon"],
    },
    discount:{
        type:Number,
        default:0,
    },
    catagory:{
        type:String,
        enum:["friction","non-friction"]
    
    },
    genre:[String],
});

const Book= mongoose.model("Book",bookSchema);  //Collection form

// book1=new Book({
//     title:"Marvel Comics v3",
//     price:700,
//     catagory:"friction",
//     genre:["comics","superhero","friction"]
// });
// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// this updatation can work making the price negative  
// rule sonly apply on insertion not updation .

Book.findByIdAndUpdate("681b1d4a46cd0725c459cf85",
    {price:-100},
    {runValidators:true})  // To apply rule on updation 
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties);
});

