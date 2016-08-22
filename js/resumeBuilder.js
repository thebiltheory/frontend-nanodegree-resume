/*
This is empty on purpose! Your code to build the resume will go here.
* `bio` contains:

          name : string
          role : string
          contacts : an object with
                mobile: string
                email: string
                github: string
                twitter: string (optional)
                location: string
          welcomeMessage: string
          skills: array of strings
          biopic: string url
          display: function taking no parameters

* `education` contains:

          schools: array of objects with
               name: string
               location: string
               degree: string
               majors: array of strings
               dates: string (works with a hyphen between them)
               url: string
          onlineCourses: array of objects with
               title: string
               school: string
               dates: string (works with a hyphen between them)
               url: string
          display: function taking no parameters

* `work` contains

          jobs: array of objects with
               employer: string
               title: string
               location: string
               dates: string (Can be 'in progress')
               description: string
          display: function taking no parameters

* `projects` contains:

          projects: array of objects with
                title: string
                dates: string (works with a hyphen between them)
                description: string
                images: array with string urls
          display: function taking no parameters
 */

 // Bio Oject
var bio = {
  "name" : "string",
   "role" : "string",
   "contacts" : [
         "mobile": "string",
         "email": "string",
         "github": "string",
         "twitter": "string",
         "location": "string",
       ],
   "welcomeMessage": "string"
   "skills": [
     "skill":"string",
     "skill":"string"
   ],
   "biopic": "string url"
   "display": function() {}
};

// Education Object
var education = {
  "schools": [
    "name": "string",
    "location": "string",
    "degree": "string",
    "majors": "array of strings",
    "dates": "string (works with a hyphen between them)",
    "url": "string"
          ],
  "onlineCourses": [
    "title": "string",
    "school": "string",
    "dates": "string (works with a hyphen between them)",
    "url": "string",
    ],
 "display": function() {}
};

// Work Object
var work = {
  "jobs": [
    "employer": "string",
    "title": "string",
    "location": "string",
    "dates": "string (Can be 'in progress')",
    "description": "string",
  ],
  "display": function() {}
};


var projects = {
  "projects": [
    "title": "string"
    "dates": "string (works with a hyphen between them)"
    "description": "string"
    "images": "array with string urls"
  ],
  "display": function() {}
}
