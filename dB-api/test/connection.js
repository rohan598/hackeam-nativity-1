const mongoose = require('mongoose');

before((done)=>{
  mongoose.connect("mongodb://localhost/nativityDB");
  mongoose.connection.once('open',()=>{
    console.log('connection estblished');
    done();
  }).on('error',error=>console.log(error));
});

before((done)=>{
  mongoose.connection.collections.contacts.drop(()=>done());
});


before((done)=>{
  mongoose.connection.collections.societies.drop(()=>done());
});


before((done)=>{
  mongoose.connection.collections.users.drop(()=>done());
});


before((done)=>{
  mongoose.connection.collections.speakers.drop(()=>done());
});


before((done)=>{
  mongoose.connection.collections.mainevents.drop(()=>done());
});

// 
// beforeEach((done)=>{
//   mongoose.connection.collections.sponsors.drop(()=>done());
// });
