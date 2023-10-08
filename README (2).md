

# The Grading System:

## Project Description~

This project implements a simple grading system. It takes numerical input (marks) and assigns grades based on predefined criteria. The goal is to provide quick and consistent evaluation of performance, such as in educational contexts with educational contents.

The grading system is defined as follows:
- A: 80-100
- B: 60-79
- C: 50-59
- D: 40-49
- E: 0-39

The project also handles validation and includes an option to exit the program.

## Table of Contents~

- [How to Run the Project](#how-to-run-the-project)
- [How to Use the Project](#how-to-use-the-project)


## How to Run the Project :

1. Clone this repository to your local machine.

   ```
   git clone <https://github.com/Morgan-Ngetich/Week-1-Toy-Problems-Prerequisites.git>
   ```

2. Navigate to the project directory.

   ```
   $ cd Week-1-Toy-Problems-Prerequisites/
   ```

3. Run the program.

   ```
   $ node Grade.js
   ```

## How to Use the Project

1. The program will prompt you to enter ```marks (scores)``` .

2. Enter a numerical score between ``` 0 ``` and ``` 100 ``` .

3. The program will calculate and display the corresponding grade based on the defined criteria.

4. To exit the program, type ``` "exit" ``` .

## How the Program Works

1. This program imports the ```prompt-sync``` module for user input.

2. It prompts the user to enter their ```marks (scores)``` .

3. The grading function assesses the marks and assigns grades based on predefined criteria ```(A, B, C, D, E)``` . It provides a quick way to evaluate performance.

4. The program displays the corresponding grade for each entered mark.

5. It runs in a loop, allowing the user to enter multiple marks for grading until they choose to exit by typing ```"exit"``` or ```"quit."```




---
.

.





# Speed Detector :

## Project Description~

The Speed Detector project is a simple utility for monitoring and assessing vehicle speeds. It calculates demerit points for speeding violations, helping law enforcement enforce speed limits.

The project defines speeding criteria as follows:
- Speeds below ```70``` are considered ```"OK."```
- For speeds exceeding ```70``` , ```demerit points``` are calculated based on the excess speed.

If a driver accumulates ```more than 12 demerit points``` , their ```license is suspended```.

## The Table of Contents~

- [How to Run the Project](#how-to-run-the-project)
- [How to Use the Project](#how-to-use-the-project)


## How to Run the Project

1. Clone this repository to your local machine.

   ```
   $ git clone <https://github.com/Morgan-Ngetich/Week-1-Toy-Problems-Prerequisites.git>
   ```

2. Navigate to the project directory.

   ```
   $ cd Speed-detector
   ```

3. Run the program.

   ```
   $ node Speed-detector.js
   ```

## How to Use the Project :

1. The program will prompt you to enter the ```speed``` of a vehicle.

2. Enter the vehicle's speed as a ```numerical value```.

3. The program will calculate ```demerit points``` based on the ```speed``` and display the result.

4. Repeat the process for additional speed measurements.

5. To exit the program, type ```"exit"``` or ```quit``` .



## How the program Works
1. This program imports the ```prompt-sync``` module for user input.

2. It continuously prompts the user to enter the ```speed```  of a vehicle.

3. The ```speedDetector``` function checks if the entered speed is valid (a non-negative number) and calculates ```demerit points``` based on the speed.

4. If the entered ```speed``` is ```less than 70```, it displays ```"Ok.```"

5. If the ```speed is greater than or equal to 70``` , it calculates demerit points based on the excess speed over 70 ```(rounded down to the nearest multiple of 5)```.

6. If the demerit points accumulate to ```more than 12```, it displays ```"License suspended!!!```  ."

7. The program runs in a loop until the user chooses to exit by typing ```"exit"``` ."
.




---
.


.
#  The Salary Calculator :

## Project Description~

The Salary Calculator project is a tool for calculating and analyzing salary-related information. It calculates PAYE tax, NHIF deductions, NSSF deductions, and net pay based on user-provided gross salary. This project is designed to assist users in understanding their salary breakdown.

The project includes the following features:
- Calculation of PAYE tax based on income brackets.
- Calculation of NHIF deductions based on income levels.
- Calculation of NSSF deductions (Tier 1) at a fixed rate.
- Display of total deductions and net pay.

## Table of Contents~

- [How to Run the Project](#how-to-run-the-project)
- [How to Use the Project](#how-to-use-the-project)
- [Credits](#credits)
- [License](#license)

## How to Run the Project

1. Clone this repository to your local machine.

   ```
    $ git clone <https://github.com/Morgan-Ngetich/Week-1-Toy-Problems-Prerequisites.git>
   ```

2. Navigate to the project directory.

   ```
   $ cd NetSalaryCalculator.js
   ```

3. Run the program.

   ```
   $ node NetSalaryCalculator.js
   ```

## How to Use the Project

1. The program will prompt you to enter your gross salary.

2. Enter your gross salary as a numerical value.

3. The program will calculate PAYE tax, NHIF deductions, NSSF deductions, and net pay.

4. It will display a detailed salary breakdown.

5. To exit the program, type "exit" when prompted for salary.

## How the program Works

1. The program starts by importing the ```prompt-sync``` module, which allows for user input in the terminal.

2. It prompts the user to enter their ```gross salary``` .

3. The ```calculatePaye``` function calculates the ```PAYE``` (Pay As You Earn) tax based on the provided gross salary. It uses a series of ```conditional statements``` to determine the tax rate based on income brackets.

4. The ```nhifDeduction``` function calculates ```NHIF``` (National Hospital Insurance Fund) deductions based on ```gross salary``` . It uses a switch statement to determine the deduction amount based on different income levels.

5. The program also calculates ```NSSF``` (National Social Security Fund) ```Tier 1 deductions``` , which is a fixed percentage ```(6%)``` of the ```gross salary``` .

6. It displays the calculated ```PAYE tax``` , ```NHIF deductions``` , ```NSSF Tier 1 deductions``` , and ```net pay``` (gross salary   minus   deductions).

7. It terinates once an Output is given, and  the user is required to  exit by typing ```"exit"``` or ```"quit."```


## Credits

- [Morgan Ngetich](https://github.com/Morgan-Ngetich) - Developer

## License

This project is open-source and available under the [GPL License](https://choosealicense.com/licenses/gpl-3.0/#).

---

Feel free to customize these READMEs with your specific project details and authorship information.
## Tech Stack

- Programming Language: JavaScript
- Node.js Modules: prompt-sync
- Description: This code is written in JavaScript and utilizes the prompt-sync module for user input. It is designed to run in a Node.js environment.



## Appendix

### A. Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/): Official documentation for Node.js, which includes information on modules and how to work with JavaScript in a server-side environment.



### B. License


This project is licensed under the [GNU General Public License (GPL)](https://www.gnu.org/licenses/licenses.html).

The GNU General Public License is a free, copyleft license for software and other kinds of works. You can read the full text of the license [here](https://choosealicense.com/licenses/gpl-3.0/#).

### C. Contact

If you have any questions, suggestions, or feedback related to this project, please feel free to contact the project lead:

- Email: ngetichmorgan6@email.com
- GitHub: [Morgan-Ngetich](https://github.com/Morgan-Ngetich)

### D. Acknowledgments

- Special thanks to [Dennis Kiboi && Moringa School Fraternity] for providing inspiration or support during the project development.





## Roadmap

- Additional browser support
[KRA PAYE Calculator](https://www.kra.go.ke/individual/calculate-tax/calculating-tax/paye)

[Tax Rates: Aren](https://www.aren.co.ke/payroll/taxrates.htm)
 




## License

This project is licensed under the [GNU General Public License (GPL)](LICENSE).

The GNU General Public License is a free, copyleft license for software and other kinds of works. You can read the full text of the license [here](LICENSE).

## Authors

- [Morgan-Ngetich](https://www.github.com/Morgan-Ngetich)

