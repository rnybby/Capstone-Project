# Capstone-Project
# Final Project Proposal: VINsight – A Vehicle VIN Decoder & Insight Tool

## 1. What tech stack will you use for your final project?
I will be using **React** for the front-end and potentially **Node.js** or **Express** for future back-end expansion. For now, the application will focus on a React-based front-end that consumes a public open-source API (NHTSA's Vehicle API). This choice aligns with my interest in frontend-focused development and allows for faster iteration and deployment.

---

## 2. Is the front-end UI or the back-end going to be the focus of your project? Or are you going to make an evenly focused full-stack application?
The **front-end UI** will be the primary focus of the project. The goal is to build a clean, user-friendly interface that allows users to input a VIN and receive structured vehicle data in a visually appealing way. Back-end development may be added in later phases to support features like saving searches or logging history.

---

## 3. Will this be a website? A mobile app? Something else?
This will be a **responsive website** built as a single page application in React. It will be optimized for desktop and mobile browsers, allowing users to quickly access the tool without needing to install anything.

---

## 4. What goal will your project be designed to achieve?
The project is designed to help **car buyers, DIY mechanics, and mobile repair techs** quickly and accurately decode Vehicle Identification Numbers and access detailed information about a vehicle’s specifications, safety ratings, and recall data. It solves the problem of needing to search through multiple sources to understand a vehicle's background.

---

## 5. What kind of users will visit your app? In other words, what is the demographic of your users?
The target users include:
- **Used car buyers** wanting to verify vehicle details before purchase.
- **Mobile mechanics** and repair techs needing quick reference on vehicle specs.
- **Car enthusiasts** and DIYers looking for reliable vehicle information.

These users value accuracy, speed, and simplicity in tools they can access from anywhere.

---

## 6. What data do you plan on using? How are you planning on collecting your data?
I will use data from the **NHTSA vPIC (Vehicle API)**, which is a public domain, open-source government API. The main endpoint I’ll use is `DecodeVin`, which returns detailed information about a vehicle’s make, model, year, engine, transmission, trim, and more based on a VIN input. I may also use additional endpoints for **recall data** and **crash safety ratings**.

The API does not require authentication and supports JSON responses, making it ideal for integration into a React frontend.

---



## Step 3:
API Used: https://vpic.nhtsa.dot.gov/api/

## Documentation:


# VINsight – VIN Decoder & Vehicle Insight Tool

🔗 **Live Site**: (https://keen-mousse-a4955e.netlify.app/)

---

## What the Website Does

VINsight is a simple webbased VIN decoder that allows users to enter a 17-character Vehicle Identification Number (VIN) and instantly get back key vehicle details such as the make, model, year, engine type, and body class.

This tool uses the open source [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/) to fetch real time vehicle data.

---

## Features Implemented

- **VIN Input Form**  
  Users can enter a VIN to fetch vehicle details in real-time.

- **Clean, User-Friendly UI**  
  Styled using plain CSS with a polished layout, responsive for both desktop and mobile.

- **API Integration**  
  Directly queries the NHTSA Vehicle API without needing a backend.

- **Loading & Error States**  
  Users are shown helpful messages if data is loading or if a VIN is invalid.

- **Testing Setup**  
  Tests written with React Testing Library to ensure core components render properly.

These features were chosen to create a realistic, usable app while reinforcing front-end API integration and UI design fundamentals.

---

## Tests

Basic tests are located in:

- `src/components/VINForm.test.js`

### To run tests:

```bash
npm test





