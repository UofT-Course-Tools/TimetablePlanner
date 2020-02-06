const transform = require("./planner");

test("append correctly?", ()=>{
    var dic_courses = {"CSC108H5F2019LEC0101":[{"MONDAY":[ "61400", "72800"], "WEDNESDAY":["50400", "54000"],"FRIDAY":["50400", "54000"]}],"CSC148H5F2019LEC0101":[{"MONDAY":[ "61400", "72800"], "WEDNESDAY":["50400", "54000"],"FRIDAY":["50400", "54000"]}]};
    expect(transform(dic_courses)).toBe("inValid Timetable");
})
