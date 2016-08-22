// Bio Oject
var bio = {
    "name": "Bil Benhamou",
    "role": "Front-End Web Developer",
    "contacts": [{
        "mobile": "+971 55 714 40 39",
        "email": "bil@benhamou.be",
        "github": "TheBilTheory",
        "twitter": "@TheBilTheory",
        "location": "Dubai, UAE"
    }],
    "welcomeMessage": "Yo",
    "skills": [ "Photoshop", "Illustrator", "Premiere Pro"],
    "biopic": "https://avatars3.githubusercontent.com/u/2975322?v=3&s=460",
    "display": function () {
      if (bio.name !== false) {
        console.log(bio.name);
      }
    }
};

// // Education Object
// var education = {
//         "schools": [{
//             "name": "Leuven",
//             "location": "Brussels",
//             "degree": "N/A",
//             "majors": "The Best",
//             "dates": "2006-2009",
//             "url": "#"
//         }],
//         "onlineCourses": [{
//             "title": "Front-End Web Developer Nanodegree",
//             "school": "Udacity",
//             "dates": "In Progress",
//             "url": "#"
//         }],
//         "display": function () {}
//     };
//
// // Work Object
// var work = {
//         "jobs": [{
//             "employer": "Propertyfinder",
//             "title": "UI Designer",
//             "location": "Dubai",
//             "dates": "In Progress",
//             "description": " User Interface Designer"
//         },
//             {
//                 "employer": "Bisnode",
//                 "title": "UI Designer",
//                 "location": "Brussels",
//                 "dates": "2014-2015",
//                 "description": "Campaign Architect"
//             },
//             {
//                 "employer": "Catalyst IT Limited",
//                 "title": "Web Integrator",
//                 "location": "Dubai",
//                 "dates": "2012-2013",
//                 "description": "Integrating a Design for the Open Universities"
//             }],
//         "display": function () {}
//     };
//
// // Projects Object
// var projects = {
//         "projects": [{
//             "title": "Online Portfolio",
//             "dates": "2016",
//             "description": "Online Portfolio Project created for FEND",
//             "images": "Image Url"
//         }],
//         "display": function () {}
//     };
