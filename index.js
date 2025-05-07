
const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
// or
main().then(() =>{
    console.log("Connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// create schema
const UserSchema=new mongoose.Schema({
    name:String,
    eamil:String,
    age:Number,
});

const User=mongoose.model("User",UserSchema);
// const Employee=mongoose.model("Employee",UserSchema);
// const user1=new User({
//     name:"Eliza",
//     email:"eliza@gmail.com",
//     age:23,
// });
// const user2=new User({
//     name:"hgjyjf",
//     email:"hjhhja@gmail.com",
//     age:23,
// });

// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.log(err);

// });

// User.insertMany([
//     {name:"Ram",email:"ram@gmail.com",age:24},
//     {name:"syam",emial:"syam@gmail.com",age:43},
//     {name:"sota",email:"sota@gmail.com",age:7},
// ]).then((res)=>{
//     console.log(res);
// });
// User.find({})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// find data using condition
    // User.find({age:{$gte:40}})
    // .then((res)=>{
    //     console.log(res[0].name);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });
    // User.find({_id:"6818f1ea4da557a617f0702f"})
    // .then((res)=>{
    //     console.log(res[0].name);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });
    // or
    User.findById("6818f1ea4da557a617f0702f")
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

