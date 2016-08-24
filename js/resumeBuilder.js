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
    "skills": ["Photoshop", "Illustrator", "Premiere Pro", "HTML5/ CSS3", "Javascript"],
    "biopic": "https://avatars3.githubusercontent.com/u/2975322?v=3&s=460",
    "display": function() {
        "use strict";
        var name = HTMLheaderName.replace("%data%", bio.name),
            role = HTMLheaderRole.replace("%data%", bio.role),
            mobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            email = HTMLemail.replace("%data%", bio.contacts.email),
            twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
            github = HTMLgithub.replace("%data%", bio.contacts.github),
            location = HTMLlocation.replace("%data%", bio.contacts.location),
            bioPicture = HTMLbioPic.replace("%data%", bio.biopic),
            welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
            bioSkills;
        $("#header").prepend(name);
        $(role).insertBefore("#topContacts");
        $("#topContact, #footerContacts").append(mobile);
        $("#topContacts, #footerContacts").append(email);
        $("#topContacts, #footerContacts").append(twitter);
        $("#topContacts, #footerContacts").append(github);
        $("#topContacts, #footerContacts").append(location);
        $("#header").append(bioPicture);
        $("#header").append(welcomeMsg);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
          bioSkills = HTMLskills.replace("%data%", skill);
          $("#skills").append(bioSkills);
          console.log("ca passe");
        });
    }
};

// Education Section
var education = {
    "schools": [{
        "name": "Leuven",
        "location": "Brussels",
        "degree": "Liscence",
        "majors": ["The Best", "I ever", "Had"],
        "dates": "2006-2009",
        "url": "#"
    }, {
        "name": "Aussie",
        "location": "Sydney",
        "degree": "PHD",
        "majors": ["Marvins", "Room"],
        "dates": "2007-2010",
        "url": "#"
    }, {
        "name": "Stree",
        "location": "Bxl",
        "degree": "Master Degree",
        "majors": ["King", "Kunta"],
        "dates": "2000-2010",
        "url": "#"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "In Progress",
        "url": "http://Udacity.com"
    }, {
        "title": "Front-End Web Developer",
        "school": "FreeCodeCamp",
        "dates": "In Progress",
        "url": "http://FreeCodeCamp.com"
    }, {
        "title": "Front-End Web Developer sfd",
        "school": "FreeCodeCamp fsdf",
        "dates": "In Progress adf",
        "url": "http://FreeCodeCamp.com"
    }],
    "display": function() {
        'use strict';
        // Schools
        //Example Usage: forEach Loop
        var schoolName, schoolDegree, schoolDates, schoolLocation, schoolMajors;
        education.schools.forEach(function(es) {
            schoolName = HTMLschoolName.replace("%data%", es.name);
            schoolDegree = HTMLschoolDegree.replace("%data%", es.degree);
            schoolDates = HTMLschoolDates.replace("%data%", es.dates);
            schoolLocation = HTMLschoolLocation.replace("%data%", es.location);
            $("#education").append(HTMLschoolStart);
            $(".education-entry").last().append(schoolName + schoolDegree);
            // $(".education-entry").last().append(schoolDegree);
            $(".education-entry").last().append(schoolDates);
            $(".education-entry").last().append(schoolLocation);
            es.majors.forEach(function (major) {
              schoolMajors = HTMLschoolMajor.replace("%data%", major);
              $(".education-entry").last().append(schoolMajors);
            });
        });
        // Online Courses
        $("#education").append(HTMLonlineClasses);
        var onlineCourseTitle,
            onlineCourseSchool,
            onlineCourseDates,
            onlineCourseUrl;
        education.onlineCourses.forEach(function(course) {
            onlineCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
            onlineCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
            onlineCourseDates = HTMLonlineDates.replace("%data%", course.dates);
            onlineCourseUrl = HTMLonlineURL.replace("%data%", course.url);
            $("#education").last().append(HTMLschoolStart);
            $(".education-entry").last().append(onlineCourseTitle);
            $(".education-entry").last().append(onlineCourseSchool);
            $(".education-entry").last().append(onlineCourseDates);
            $(".education-entry").last().append(onlineCourseUrl);
            console.log("onlineCourse");
        });
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
    }, {
        "employer": "Bisnode",
        "title": "UI Designer",
        "location": "Brussels",
        "dates": "2014-2015",
        "description": "Campaign Architect"
    }, {
        "employer": "Catalyst IT Limited",
        "title": "Web Integrator",
        "location": "Dubai",
        "dates": "2012-2013",
        "description": "Integrating a Design for the Open Universities"
    }],
    "display": function() {
        var employer,
            title,
            location,
            dates,
            description;
        work.jobs.forEach(function(job) {
            employer = HTMLworkEmployer.replace("%data%", job.employer);
            title = HTMLworkTitle.replace("%data%", job.title);
            location = HTMLworkLocation.replace("%data%", job.location);
            dates = HTMLworkDates.replace("%data%", job.dates);
            description = HTMLworkDescription.replace("%data%", job.description);
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry").last().append(employer);
            $(".work-entry").last().append(title);
            $(".work-entry").last().append(location);
            $(".work-entry").last().append(dates);
            $(".work-entry").last().append(description);
        });
    }
};

// Projects Section
var projects = {
    "projects": [{
        "title": "Flyer",
        "dates": "2016",
        "description": "Flyer Creation for fastlife",
        "images": ["https://dl.dropboxusercontent.com/s/t8atyr14fodgu5g/fastlife.png", "https://dl.dropboxusercontent.com/s/t8atyr14fodgu5g/fastlife.png"]
    }, {
        "title": "Online Portfolio",
        "dates": "2016",
        "description": "Online Portfolio Project created for FEND",
        "images": ["https://dl.dropboxusercontent.com/s/0ne9zzeaaw9x9qc/bil_logo.png", "https://dl.dropboxusercontent.com/s/0ne9zzeaaw9x9qc/bil_logo.png"]
    }, {
        "title": "Brand Development",
        "dates": "2016",
        "description": "Brand development for Rush Rentals",
        "images": ["https://dl.dropboxusercontent.com/s/8kml2hnkk1rb57p/rush-rentals.png", "https://dl.dropboxusercontent.com/s/0ne9zzeaaw9x9qc/bil_logo.png"]
    }],
    "display": function() {
        var title,
            dates,
            description,
            images;
        projects.projects.forEach(function(project) {
            title = HTMLprojectTitle.replace("%data%", project.title);
            dates = HTMLprojectDates.replace("%data%", project.dates);
            description = HTMLprojectDescription.replace("%data%", project.description);
            images = HTMLprojectImage.replace("%data%", project.images);
            $("#projects").append(HTMLprojectStart);
            $(".project-entry").last().append(title);
            $(".project-entry").last().append(dates);
            $(".project-entry").last().append(description);
            project.images.forEach(function() {
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
