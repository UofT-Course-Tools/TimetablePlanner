// Given a set of courses, is there a valid timetable?
// What is a valid timetable?
// A valid timetable has no conflicts

// Next step is to determine if there is a conflict, given a set of courses

// Notes
// We'll be using info from the meeting sections field of the course JSON
// The start and end times are in seconds from 12:00am 


//To check conflict, compare the start time of each course to see if it is overlapped by other courses:
// A function that determine whether overlapping exists
// input: A set of course objects with its corresponding start and end time
// dic_courses = {"CSC108H5F2019LEC0101":["Monday":[ "61400", "72800"], "Wednesday":["50400", "54000"],["Friday", "50400", "54000"]]}
// dic_timetable = {"Monday":[[]], "Tuesday":[[]],"Wednesday":[[]],"Thursday":[[]],"Friday":[[]]}
// add all the course time to each correspond date, and then compare within the list
// if any conflict appears, return invalid
// else return valid
// for each time interval in the list, take the start time, loop through the list to check if the time is inside the interval of other element
//  




// If I'm looking at a course json
// Determine the types of unique meeting sections
// Create a configuration




