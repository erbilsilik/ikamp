<script>

	var lesson = {
		id: '232323',
		semester: 'fall',
		name: 'erbil'
	};

	var lesson1 = {
		id: '1212',
		semester: 'fall',
		name: 'gonca'
	};

	var lessons = [lesson, lesson1];


function Teacher(fullName, age, gender, interests, getFullLesson) {
	
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.fullName = fullName;
	this.lessons = getFullLesson;


	this.listLesson = function() {
	this.lessons.forEach(function(lesson){
		console.log(lesson.name);
	})
}

	this.getFullName = function() {

		return this.fullName[0] + " " + this.fullName[1]; 

	}


	this.bio = function () {
		return this.getFullName() + "is " + this.age + " years old."
	};

	

	this.setPrefix = function getPrefix(gender){
		var prefix;
		if(this.gender == 'female'){
			prefix = 'Ms';
		} else {
			prefix = 'Mr';
		}


		/* Above code can be written also with this. 

function getPrefix(gender){
	return gender == 'female' ? 'Ms' : 'Mr';
}
*/

		return prefix;
	}

	this.greeting = function () {
		return "My name is " + this.setPrefix() + " " + this.getFullName() + " and I teach" + interests;
	};


}


var Teacher1 = new Teacher(["Erbil", "Silik"], 5, "Male", " physics.", lessons)


console.log(Teacher1.listLesson());


</script>