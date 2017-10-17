var work={
	"jobs":[
		{
			"employer":"Study with Me",
			"title":"Tutor",
			"location": "Garia,Kolkata",
			"dates": "2013-2014",
			"description": "Teaching students in science and maths"
		},
		{
			"employer":"Angels' Home",
			"title": "Home tutor",
			"location": "Kudghat,Kolkata",
			"dates": "2014",
			"description": "Teaching students in science and maths"
		}
	]
};

var projects={
	"projects":[
		{
			"title":"Hydraulic Crane",
			"dates":"March,2014",
			"description": "A mechanical crane using the principle of Pascal",
			"images":"images/197x148.gif"
		},
		{
			"title":"Library DBMS",
			"dates":"March,2016",
			"description":"Library database using DBMS/SQL",
			"images":"images/197x148.gif"
		}
	]
};

var bio={
	"name": "Maitreyee Roy Malakar",
	"role": "Front End Web Developer",
	"welcomeMessage": "Hi there!",
	"biopic": "images/fry.jpg",
	"contacts":{
		"mobile":"9836832779",
		"email":"maitreyee95@gmail.com",
		"github":"Maitreyee95",
		"twitter":"maitreyee95",
		"location": "Kolkata,India"
	},
	"skills":["creative,","unique,","awesome"]
};

var education={
	"schools":[
		{
			"name":"Nava Nalanda",
			"location":"SA,Kolkata",
			"degree": "Madhyamik",
			"dates":"2011",
			"url":"www.navanalanda.com",
			"majors":["Bengali","English","Science","Maths","History","Geography"]
		},
		{
			"name": "Nava Nalanda",
			"location":"Golpark,Kolkata",
			"degree":"HS",
			"dates":"2013",
			"url":"www.navanalanda.com",
			"majors":["Physics","Chemistry","Maths","Statistics"]
		},
		{
			"name":"Institute of Engineering and Management",
			"location": "Salt Lake,Kolkata",
			"degree": "B.Tech",
			"dates": "2017",
			"url":"www.iemcal.com",
			"majors":["Electronics","Communication"]
		}
	],
	"onlineCourses":[
		{
			"title":"Regression Analysis",
			"school":"NPTEL",
			"dates":"March,2017",
			"url":"https://onlinecourses.nptel.ac.in"
		},
		{
			"title":"Front End Web Developer",
			"school":"Udacity",
			"dates":"2017-18",
			"url": "www.udacity.com"
		}
	]
};

bio.display=function(){
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#topContacts").before(formattedRole);
	var mobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var email=HTMLemail.replace("%data%",bio.contacts.email);
	var twitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var github=HTMLgithub.replace("%data%",bio.contacts.github);
	var blog=HTMLblog.replace("%data%",bio.contacts.blog);
	var location=HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts,#footerContacts").append(mobile);
	$("#topContacts,#footerContacts").append(email);
	$("#topContacts,#footerContacts").append(twitter);
	$("#topContacts,#footerContacts").append(github);
	$("#topContacts,#footerContacts").append(blog);
	$("#topContacts,#footerContacts").append(location);
	var message=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(message);
	var pic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(pic);
	if (bio.skills.length>=1){
		$("#header").append(HTMLskillsStart);
		for(var i=0;i<bio.skills.length;i++){
			var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};
bio.display();



work.display=function(){
	work.jobs.map(function(job){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",job.employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",job.title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		var formattedDates=HTMLworkDates.replace("%data%",job.dates);
		var formattedLocation=HTMLworkLocation.replace("%data%",job.location);
		var formattedDescription=HTMLworkDescription.replace("%data%",job.description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	});
};

work.display();


projects.display=function(){
	projects.projects.map(function(project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",project.title);
		var formattedDates=HTMLprojectDates.replace("%data%",project.dates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",project.description);
		var formattedImage=HTMLprojectImage.replace("%data%",project.images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
	});
};
projects.display();

$("#mapDiv").append(googleMap);

education.display=function(){
	education.schools.map(function(school){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName=HTMLschoolName.replace("%data%",school.name);
		var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",school.degree);
		var formattedNameDegree=formattedSchoolName+formattedSchoolDegree;
		var formattedSchoolDates=HTMLschoolDates.replace("%data%",school.dates);
		var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",school.location);
		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		school.majors.map(function(major){
			var formattedMajor=HTMLschoolMajor.replace("%data%",major);
			$(".education-entry:last").append(formattedMajor);
    	});
	});
	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.map(function(course){
			var classTitle=HTMLonlineTitle.replace("%data%",course.title);
			var classSchool=HTMLonlineSchool.replace("%data%",course.school);
			var classDates=HTMLonlineDates.replace("%data%",course.dates);
			var classURL=HTMLonlineTitle.replace("%data%",course.url);
			var titleSchool= classTitle+classSchool;
			$("#education").append(titleSchool);
			$("#education").append(classDates);
			$("#education").append(classURL);
	});
};
education.display();
