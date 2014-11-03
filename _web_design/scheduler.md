---
layout: design
title: Calvin course scheduler
image: scheduler.jpg
thumb: scheduler_square.jpg
---
For my senior project, I created a web app to help department chairs schedule classes for upcoming semesters. Chairs currently complete this task with spreadsheets. Chairs email these spreadsheets back and forth to communicate with other departments and the registrar, a process which is time-consuming and frustrating. Our app provides a usable alternative interface for scheduling classes.

I was the front-end developer and designer on a team of three. Our architecture was an Angular.js client communicating with a Java backend through RESTful APIs. We used ngResource to create Angular services for our APIs. I implemented the click-and-drag interfaces with D3.js packaged in a directive. I also used a directive to implement an undo/redo function with the browser's local storage.

Here are some details of the user interface:

![Manipulating meeting times](/images/meeting_edit.gif)

Users can drag course meeting times to adjust them. They snap to five-minute intervals and highlight in red if there is a conflict. Note that changes made to the first section update the constraints in the second section (offered in the same room).

![Adding a constraint](/images/constraint.gif)

This interface allows the user to add a constraint relationship between two courses that should not be taught at the same time (e.g. to allow students to take both classes). Selecting an academic department fires an AJAX request to retrieve a list of courses offered by the department. This list then populates the second autocompleting input box in the pair.

Our hope is to have professors at Calvin using the system in the near future.
