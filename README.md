# 'Tis the Season (for course registration) 

## Overview

Tool for efficiently visualizing potential course schedules. Select from a list of courses with different sections and recitations and their meeting times. A regular week is displayed and shows selected courses. Selected sections and recitations are highlighted while the rest are grayed out.

## Data Model

The application will store courses, course sections, and recitations.

* Each course can contain multiple sections
* Each section can contain multiple recitations

An Example Course:

```javascript
{
  Course Number: "CSCI-UA.0467",
  Course Name: "Applied Internet Technology",
  Selected: true,
  Sections: // an array of sections for this course
}
```

An Example Section:

```javascript
{
  Section Number: 2,
  Selected: true,
  Meeting time: // an array of meeting time objects where each meeting time contains a day of the week, a start time, and an end time,
  Recitations: // an array of recitations for this section
}
```

An Example Recitation:

```javascript
{
  Recitation Number: 1,
  Selected: true,
  Meeting time: // an array of meeting time objects where each meeting time contains a day of the week, a start time, and an end time,
}
```


## [Link to Commented First Draft Schema](db.mjs)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/schedule?name=2022+spring - display selected schedule

![schedule](documentation/schedule_2022_spring.png)

## Site map

/schedules

## User Stories or Use Cases

System: Schedule app
Primary actor: Student creating a schedule
Scenario: A week of classes is displayed. In a sidebar, the student browses a list of courses with section, recitation, and meeting time information. They can add, change, and delete course information. They can toggle the displaying of sections and recitations between hidden \(default\), considering, and selected. These are displayed so the student can visualize different possible schedules.

## Research Topics

* (6 points) Use a front-end framework
    * I'm going to be using Next.js to build the user interface
* (2 points) Use a CSS framework or UI toolkit, use a reasonable of customization of the framework (don't just use stock Bootstrap - minimally configure a theme)
    * I'm going to use tailwind.css
* (3 points) Configuration management
    * I'm going to use dotenv




11 points total out of 10 required points


## [Link to Initial Main Project File](app.mjs) 

## Annotations / References Used

* https://www.youtube.com/watch?v=SqcY0GlETPk&list=TLPQMTExMTIwMjOWhqDQ_-Ealw&index=2&ab_channel=ProgrammingwithMosh

