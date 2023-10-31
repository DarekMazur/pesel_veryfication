# PESEL verification app

## Table of content
1. Introduction
2. Technologies
3. Installation
4. Running
5. Project Structure
6. Testing
7. Production Version


## 1. Introduction
   The PESEL Number Verification Application is a tool built using ReactJS and Vite technologies, with styled-components for styling. This application allows you to verify a PESEL number, providing a user-friendly interface and convenient verification tools. The following documentation provides information on installation, running, and configuration of the application.

## 2. Technologies
The application was built using the following technologies:

* ReactJS
* Vite
* styled-components
* npm (version 9.6.7)

## 3. Installation
To install the application, follow these steps:

1. Clone the repository with the application source code to your local computer:

```
    git clone https://github.com/DarekMazur/pesel_veryfication.git
```

2. Navigate to the application directory:
```
    cd pesel-application
```
3. Install dependencies using npm:
```
   npm install
```

## 4. Running
To run the development version of the application, execute the following command:
```
   npm run dev
```
The application will be available at http://localhost:5173.

## 5. Project Structure
```
pesel_verify/
  ├── src/
  │   ├── components/       # Application components
  │   └── App.js            # Main application component
  ├── index.js              # Entry file
  ├── package.json          # Scripts and dependencies
  └── vite.config.js        # Vite configuration
```

## 6. Testing
To run unit tests, execute the following command:
```
    npm run test
```

## 7. Production Version
To build the production version of the application, use the following command:
```
    npm run build
```
The resulting files will be available in the dist directory, and you can deploy them on a production server.


_Thank you for using our application!_


**Remember that the PESEL number is personal data, so be cautious with its use and comply with applicable personal data protection regulations.**