// Bio Section
var bio = {
    "name": "Bil Benhamou",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+971 55 714 40 39",
        "email": "bil@benhamou.be",
        "github": "TheBilTheory",
        "twitter": "@TheBilTheory",
        "location": "Dubai, UAE"
    },
    "welcomeMessage": "Yo",
    "skills": [ "Photoshop", "Illustrator", "Premiere Pro", "HTML5/ CSS3", "Javascript"],
    "biopic": "https://avatars3.githubusercontent.com/u/2975322?v=3&s=460",
    "display": function () {
        "use strict";
        var name = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        $(role).insertBefore("#topContacts");
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(github);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(location);
        var bioPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(bioPicture);
        var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(welcomeMsg);
        var skillsTitle = HTMLskillsStart;
        $("#header").append(skillsTitle);
        var skill;
        for (skill in bio.skills){
         skill = HTMLskills.replace("%data%", bio.skills[skill]);
         $("#skills").append(skill);
       }
    }
};

// Education Section
var education = {
        "schools":[{
            "name": "Leuven",
            "location": "Brussels",
            "degree": "abc",
            "majors": "The Best",
            "dates": "2006-2009",
            "url": "#"
        },{
            "name": "Aussie",
            "location": "Sydney",
            "degree": "def",
            "majors": "Awesome",
            "dates": "2007-2010",
            "url": "#"
        },
        {
            "name": "Stree",
            "location": "Bxl",
            "degree": "sdafa",
            "majors": "lol",
            "dates": "2000-2010",
            "url": "#"
        }],
        "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "In Progress",
            "url": "http://Udacity.com"
          },{
          "title": "Front-End Web Developer",
          "school": "FreeCodeCamp",
          "dates": "In Progress",
          "url": "http://FreeCodeCamp.com"
        },
        {
        "title": "Front-End Web Developer sfd",
        "school": "FreeCodeCamp fsdf",
        "dates": "In Progress adf",
        "url": "http://FreeCodeCamp.com"
      }],
        "display": function () {
          'use strict';
          // Schools
          // var school;
          // for (school in education.schools) {
          //   $("#education").append(HTMLschoolStart);
          //   var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
          //   $(".education-entry").append(schoolName);
          //   var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
          //   $(".education-entry").append(schoolDegree);
          //   var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
          //   $(".education-entry").append(schoolDates);
          //   var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
          //   $(".education-entry").append(schoolLocation);
          //   var schoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
          //   $(".education-entry").append(schoolMajors);
          //   console.log("schooool");
          // }

          //Example Usage: forEach Loop
          var schoolName, schoolDegree, schoolDates, schoolLocation, schoolMajors;
          education.schools.forEach(function (es){
            $("#education").append(HTMLschoolStart);
              schoolName = HTMLschoolName.replace("%data%", es.name);
            $(".education-entry").last().append(schoolName);
              schoolDegree = HTMLschoolDegree.replace("%data%", es.degree);
            $(".education-entry").last().append(schoolDegree);
              schoolDates = HTMLschoolDates.replace("%data%", es.dates);
            $(".education-entry").last().append(schoolDates);
              schoolLocation = HTMLschoolLocation.replace("%data%", es.location);
            $(".education-entry").last().append(schoolLocation);
              schoolMajors = HTMLschoolMajor.replace("%data%", es.majors);
            $(".education-entry").last().append(schoolMajors);
            console.log("schooool");
          });

          // Online Courses
          //Example usage: for Loops
          $("#education").append(HTMLonlineClasses);
          var onlineCourse;
          for (onlineCourse in education.onlineCourses) {
            $("#education").last().append(HTMLschoolStart);
            var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            $(".education-entry").last().append(onlineCourseTitle);
            var onlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            $(".education-entry").last().append(onlineCourseSchool);
            var onlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".education-entry").last().append(onlineCourseDates);
            var onlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".education-entry").last().append(onlineCourseUrl);
            console.log("onlineCourse");
          }
        }
    };

// Work Section
var work = {
        "jobs": [{
            "employer": "Propertyfinder",
            "title": "UI Designer",
            "location": "Dubai",
            "dates": "In Progress",
            "description": " User Interface Designer"
        },
        {
            "employer": "Bisnode",
            "title": "UI Designer",
            "location": "Brussels",
            "dates": "2014-2015",
            "description": "Campaign Architect"
        },
        {
            "employer": "Catalyst IT Limited",
            "title": "Web Integrator",
            "location": "Dubai",
            "dates": "2012-2013",
            "description": "Integrating a Design for the Open Universities"
            }],
        "display": function () {
          var employer,
              title,
              location,
              dates,
              description;
          work.jobs.forEach(function (job) {
              employer    = HTMLworkEmployer.replace("%data%", job.employer);
              title       = HTMLworkTitle.replace("%data%", job.title);
              location    = HTMLworkLocation.replace("%data%", job.location);
              dates       = HTMLworkDates.replace("%data%", job.dates);
              description = HTMLworkDescription.replace("%data%", job.description);
              $("#workExperience").append(HTMLworkStart);
              $(".work-entry").last().append(employer);
              $(".work-entry").last().append(title);
              $(".work-entry").last().append(location);
              $(".work-entry").last().append(dates);
              $(".work-entry").last().append(description);
          })
        }
    };

// Projects Section
var projects = {
        "projects": [{
            "title": "Flyer",
            "dates": "2016",
            "description": "Flyer Creation for fastlife",
            "images": ["https://dl.dropboxusercontent.com/s/t8atyr14fodgu5g/fastlife.png", "https://dl.dropboxusercontent.com/s/t8atyr14fodgu5g/fastlife.png"]
        },
        {
            "title": "Online Portfolio",
            "dates": "2016",
            "description": "Online Portfolio Project created for FEND",
            "images": ["https://dl.dropboxusercontent.com/s/0ne9zzeaaw9x9qc/bil_logo.png", "https://dl.dropboxusercontent.com/s/0ne9zzeaaw9x9qc/bil_logo.png"]
        },
        {
            "title": "Brand Development",
            "dates": "2016",
            "description": "Brand development for Rush Rentals",
            "images": ["https://dl.dropboxusercontent.com/s/8kml2hnkk1rb57p/rush-rentals.png", "https://dl.dropboxusercontent.com/s/0ne9zzeaaw9x9qc/bil_logo.png"]
        }
      ],
        "display": function () {
          var title,
              dates,
              description,
              images;
          projects.projects.forEach(function (project) {
              title       = HTMLprojectTitle.replace("%data%", project.title);
              dates       = HTMLprojectDates.replace("%data%", project.dates);
              description = HTMLprojectDescription.replace("%data%", project.description);
              images      = HTMLprojectImage.replace("%data%", project.images);

              $("#projects").append(HTMLprojectStart);
              $(".project-entry").last().append(title);
              $(".project-entry").last().append(dates);
              $(".project-entry").last().append(description);
              project.images.forEach(function () {
                $(".project-entry").last().append(images);
              });
          });
        }
    };

//Section triggers
bio.display();
education.display();
work.display();
projects.display();
