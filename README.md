
# EmployeeManagementApplication_with_Angular&Spring-boot
## Employee Management Application: 
This project aims to manage the employees that you can login as an Admin and create new employee roles such as employee creation and update as well as, If we are new employees to the app then we will creating new employee details with the help of SignUp. After user creation you can login in to the app with login employeeId and password that you are provided by the time of creation and update the user details if you want.

#### This Application is developed by the SpringBoot(Backend) and Angular12(Frontend).


#### Required Tools and Softwares:
```
-Java_8V - Backend Programing Language
-IDE(IntelliJIDEA)-Backend
-Visual Studio Code and Node (Frontend)
-Mysql Database(Workbench)-DATABASE
```

### AngularFrontend(CLI)

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

__________________________________________________________________________
Links:
  [Java_8V](https://www.oracle.com/java/technologies/downloads"download")
  [IntelliJIDEA](https://www.jetbrains.com/idea/download"download")
  [VisualStudioCode](https://https://code.visualstudio.com/download"download")
  [MySqlWorkbench](https://https://dev.mysql.com/downloads/workbench/"download")
 

___________________________________________________________________

## Working and Functionality :
     
**There are three login/signup scenarios:**

1. Login as Admin:
   -Showing the details of All Users, Admin can create, update and delete the user records.
   -If there is no created users, It is showing no users found.
2. Login as Employee:
   -Showing the details of logged employee and can update the details.
3. Signup as Employee:
   -complete the creation of employee and Login as employee with employee credentials employeeId and password.
   -In employee creation process will provide the below details
      -Id:        (Auto-generated)
      -EmployeeId:(Mandatory)
      -Name:      (Mandatory)
      -password:  (Mandatory)
      -phoneNum:  (Mandatory)
      
      _________________________________________
      
## Home Page (Login page):

![Home](https://user-images.githubusercontent.com/85600714/161903053-f863ce10-3e39-4182-a469-54ced708937f.png)

## Login (When employeeId and passwords are empty):
![BadCredentials](https://user-images.githubusercontent.com/85600714/161903126-98a460bc-02fa-4975-a3e0-c29d88e0f922.png)

## Login (When employeeId and passwords are incorrect):
![BadCredentials](https://user-images.githubusercontent.com/85600714/161903164-023b9116-ce36-4f62-92da-dc517a0380e4.png)

## 1.Login as Admin(Success):
![AdminLoginSuccess](https://user-images.githubusercontent.com/85600714/161903194-ca21d2c9-8875-4195-89a9-f489eff0a808.png)

Showing All Employees in Admin Login:
![AdminDisplay](https://user-images.githubusercontent.com/85600714/161903236-83d7cce0-c3a0-42ba-a095-64675028f6e2.png)

## AddEmployee in Admin Login:
![AdminAddEmployee](https://user-images.githubusercontent.com/85600714/161903283-20a7ff5d-10b5-4cc2-a13b-9061b7952a12.png)

## AddEmployee Success in Admin Login: Note- id is auto-generated integer value
![AdminAddEmpSuccess](https://user-images.githubusercontent.com/85600714/161903301-31c1ce0f-4af6-4a42-8dfb-f7b1bb536df9.png)

## Admin Login AllEmployees After Adding the new employee:
![AdminDetailsAfterAdd](https://user-images.githubusercontent.com/85600714/161903616-39f17341-ac0b-4144-8be9-ddf3ac9ec002.png)

## UpdateEmployee in Admin Login: When clicks update button it will fetch the employee details and dispaly in update employee page:
Getting employee details:
![AdminUpdate](https://user-images.githubusercontent.com/85600714/161903485-938925e5-a20f-4b05-a2a5-895a573f9738.png)
![AdminUpdateSuccess](https://user-images.githubusercontent.com/85600714/161903510-c12ba00e-1a3d-46cb-aed3-8921d3bf100d.png)

## Delete The Employee in Admin Login:
![AdminDelete](https://user-images.githubusercontent.com/85600714/161903567-6c6e1033-34a9-4945-a618-0361a5b07a3e.png)

## All the Logout buttons are Redirecting to Home Login Page:
![AdminDisplay](https://user-images.githubusercontent.com/85600714/161903758-abc793a3-3ca5-4d53-9930-467890109da1.png)

## All the Back buttons are Redirecting to Previous Page:

![AdminAddEmployee](https://user-images.githubusercontent.com/85600714/161903917-178a33aa-1927-4c5f-8c09-21124d4fa281.png)

## Home Login Page
![Home](https://user-images.githubusercontent.com/85600714/161903963-96eb0056-6ba7-4507-a55e-47d1d3704f34.png)

## New Employee Click the SignUp Botton to Register(User Details):
![SignUp](https://user-images.githubusercontent.com/85600714/161903994-573a30eb-847a-4cb5-85f1-528b2f7ba5ff.png)

## When the Employee Successfully SignedUp then It Will Redirecting to Home Login Page:
### Login as Employee(employeeId and password are correct):
![EmployeeLoginSuccess](https://user-images.githubusercontent.com/85600714/161904042-e0dfbfb2-4c2a-4608-a17d-d9af2da52e6e.png)

## Logged as Employee and Displaying the Single Employee Details:
### Note: There is No Functionality to Delete the Employee in Employee Login:
![EmployeeDetails](https://user-images.githubusercontent.com/85600714/161904074-a5cc7bf9-c8b5-4c22-96f0-a589c73912d8.png)

### Update and Logout Functions are Same as the Admin Functionality:


### Thank You  
> Prashanth Billa
