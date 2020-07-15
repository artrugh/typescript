interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // infor ts that this obj finally will be tipe CourseGoal but initialize it is not
  // all the properties are optionals
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // finally change Partial to CourseGoal
  return courseGoal as CourseGoal;
}

// enforce that it can not we overwritten
const famousNames: Readonly<string[]> = ["Mex", "Urtibera"];
// error
// famousNames.push("Pchco")