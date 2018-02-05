const contact = require('../models/contact-details');
const mainEvent = require('../models/event');
// const profile = require('../models/profile-link');
const society =  require('../models/society-login');
const user =  require('../models/user-login');
const speaker = require('../models/speaker');
// const sponsor = require('../models/sponsor');

const assert = require('assert');

describe('tesing saving to database',()=>{
  it('testing contacts collection',(done)=>{
      var contactTest = new contact({
        address:{
          buildingNumber:"18",
          streetName:"S",
          neighbourhood:"Greater Kailash",
          city:"new delhi",
          zipCode:"110048"
        },
        email:"rohan@gmail.com",
        telephone:["2381028020"],
        description:"kdwnqwkmncqwmldn"
      });

      contactTest.save().then(()=>{
  assert(contactTest.isNew === false);
  done();
});

});

  it('testing mainEvents collection',(done)=>{
    var mainEventTest = new mainEvent({
      name:"hackeam",
      duration:{
        from:new Date(2018,2,10),
        to:new Date(2018,2,11)
      },
      description:"dreams",
      days:[{
        events: [{
          name:"hackathon",
          duration:{
            from:new Date("February 10 2018 12:30"),
            to:new Date("February 11 2018 12:30")
          },
          venue:"nescii" ,
          decription: "will win",
          logo: "placeholder-logo",
          background: "placeholder-background",
          quote: "qoute",
          topics: ["#hackathon"]
        }]
      }]
    });

    mainEventTest.save().then(()=>{
  assert(mainEventTest.isNew === false);
  done();
});

  });
  // it('testing profiles collection',(done)=>{
  //   var profileTest = new contact({
  //
  //   });
  // });

  it('testing societies collection',(done)=>{
    var societyTest = new society({
        name:"Societies' name",
        email:"Societies' email",
        logo:"Societies' logo src",
        description:"description",
        member:[{
          name:"Societies' name",
          email:"Societies' email",
          profile:[{
            github:"Societies' github",
            linkedin:"Societies' linkedin",
            facebook:"Societies' facebook",
            googleplus:"Societies' googleplus",
            twitter:"Societies' twitter",
            instagram:"Societies' instagram"
          }],
          imgsrc:"Societies' photo src"
        }]
      });

      societyTest.save().then(()=>{
  assert(societyTest.isNew === false);
  done();

});

  });
  it('testing users collection',(done)=>{
    var userTest = new user.user({
      name:"user's name",
      email:"user's email",
      profile:[{
        github:"user's github",
        linkedin:"user's linkedin",
        facebook:"user's facebook",
        googleplus:"user's googleplus",
        twitter:"user's twitter",
        instagram:"user's instagram"
      }],
      imgsrc:"user's photo src"
    });

    userTest.save().then(()=>{
  assert(userTest.isNew === false);
  done();
});

  });


  it('testing speakers collection',(done)=>{
    var speakerTest = new speaker({
      imgsrc: "speaker's photo src",
      name: "speaker's name",
      designation:"speaker's designation",
      description:"about him/her",
      profile:[{
        github:"speaker's github",
        linkedin:"speaker's linkedin",
        facebook:"speaker's facebook",
        googleplus:"speaker's googleplus",
        twitter:"speaker's twitter",
        instagram:"speaker's instagram"
      }]
    });

    speakerTest.save().then(()=>{
      assert(speakerTest.isNew === false);
      done();
    });

  });


//   it('testing sponsors collection',(done)=>{
//     var sponsorTest = new sponsor({
//       imgsrc: "sponsor logo",
//       weblink: "link to website"
//     });
//   });
//
//   sponsorTest.save().then(()=>{
//   assert(sponsorTest.isNew === false);
//   done();
// });

});
