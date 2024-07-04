# Goal
- To qualify for the "[Interview Promise](https://fullstackopen.com/en/part0/general_info#interview-promise)"
    - [ ]  [Core course](https://fullstackopen.com/en/part0/general_info#parts-and-completion) - 7 parts
    - [ ]  [Course exam](https://fullstackopen.com/en/part0/general_info#the-course-exam) - after completing parts 0-7
    - [ ]  [Extended course](https://fullstackopen.com/en/part0/general_info#parts-and-completion) - 6 parts
    - [ ]  Course project - [Full stack project (10 ECTS)](https://fullstackopen.com/en/part0/general_info#full-stack-project)

# Overview
- Exercises and Projects from [Full Stack Development open course](https://fullstackopen.com/en/) by University of Helsinki for learning **MERN** (_MongoDB, Express.js, React, Node.js_) stack
- This repository consists of Core and Extension parts of the course, i.e., Parts 0-7

## Table of Contents
| PART | Description |
| --- | --- |
| **Part 0** | [Fundamentals of Web Apps](#part-0---fundamentals-of-web-apps) |
| **Part 1** | [Introduction to React](#part-1---introduction-to-react) |
| **Part 2** | [Communicating with Server](#part-2---communicating-with-server) |
| **Part 3** _(in seperate repository)_ | [Programming a server with Node.js and Express](#part-3---programming-a-server-with-nodejs-and-express) |
| **Part 4** _(in seperate repository)_ | [Backend Testing and User administration](#part-4---testing-and-user-administration-in-express) |
| **Part 5** _(in seperate repository)_ | [Frontend Testing (React Apps) and End-to-End Testing ](#part-5---frontend-testing-react-apps-and-end-to-end-testing) |  
| **Part 6** _(in seperate repository)_ | [Advanced State Management  using `Redux`, Hooks (`react-redux`, `useReducer`) and `React Query`](#part-6---advanced-state-management-on-frontend-and-backend) |


<br>
<hr>
<hr>

# Part 0 - Fundamentals of Web Apps
- Exercises to represent workflow in the application as a sequence diagram using _Mermaid_

    | Exercises | Description |
    | --- | --- |
    | Ex 0.4 | [Adding new note in old-school application](/part0/new-note-diagram.md) |
    | Ex 0.5 | [Single Page Application (SPA)](/part0/spa-diagram.md) |
    | Ex 0.6 | [Adding new note in SPA](/part0/spa-new-note-diagram.md) |

<br>
<hr>

# Part 1 - Introduction to React
- Exercises to build three applications bit-by-bit using _React_ and _JavaScript_

    | Exercises | Description |
    | --- | --- |
    | Ex 1.1 to 1.5 | [Course Information](/part1/courseinfo/src/App.jsx) |
    | Ex 1.6 to 1.11 | [Unicafe Feedback](/part1/unicafe-feedback/src/App.jsx) |
    | Ex 1.12 to 1.14 | [Anecdotes](/part1/anecdotes/src/App.jsx) |

<br>
<hr>

# Part 2 - Communicating with Server
- Exercises to advance into working with backend using HTTP Methods via `json-server` & `axios`

    | Exercises | Description |
    | --- | --- |
    | Ex 2.1 to 2.5 | Refactor and enhance [Course Information app](/part2/courseinfo/src/App.jsx) |
    | Ex 2.6 to 2.10 | Initiate [Phonebook app](/part2/phonebook/src/App.jsx) |
    | Ex 2.11 | Enhance Phonebook app - Setup `json-server`, `axios` library and `useEffect` hook for Phonebook contacts |
    | Ex 2.12 to 2.15 | Setup HTTP Methods, update backend & frontend |
    | Ex 2.16, 2.17 | Setup notifications for CRUD operations, Error handling using `catch` block |

<br>
<hr>

# Part 3 - Programming a server with `NodeJS` and `Express`
- Implement functionality on server-side tech stack and understand Backend development and learn how to
    - build a REST API in `Node.js` using `Express`
    - deploy application to the Internet
    - setup and save application data to `MongoDB`
    - [Follow along demo](/part3/demo/index.js) to understand theory
    - Exercises at [FullStackOpen-core-part3](https://github.com/prak112/FullStackOpen-core-part3)

<br>
<hr>

# Part 4 - Testing and User Administration in `Express`
- Structure the backend based on Model-View-Controller (MVC) architecture
- Implement Testing of Node applications with `supertest`
- Implement User administration and Token authentication with `jsonwebtoken` or `express-jwt`
- Exercises at [FullStackOpen-core-part4](https://github.com/prak112/FullStackOpen-core-part4)

<br>
<hr>

# Part 5 - Frontend Testing (React Apps) and End-to-End Testing
- Setup frontend relative to Backend (Blogs App)
- Test React apps using `Vitest`, `jsdom` and `jest-dom` from `react-testing-library`
- End-to-End Testing with either `Playwright` or `Cypress`
- Exercises at [FullStackOpen-core-part5](https://github.com/prak112/FullStackOpen-core-part5)

<br>
<hr>

# Part 6 - Advanced State Management on Frontend and Backend
- Frontend State Management using `Redux` library on *unicafe* app from [Part 1](#part-1---introduction-to-react)
- Frontend State Management using `react-redux` hooks on *anecdotes* app from [Part 1](#part-1---introduction-to-react)
- Backend Server State Management using `React Query` library and `useReducer` hook on *anecdotes* app
- Exercises at [FullStackOpen-core-part6](https://github.com/prak112/FullStackOpen-core-part6)

<br>
<hr>
