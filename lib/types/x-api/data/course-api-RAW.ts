export const all = {
    "version": "0.0.3",
    "context": { "learnerId": "null", "group": { "id": "NorwayFall2022a", "name": "Norway Fall 2022-A" } },
    "reportLevels": [{ "id": "p", "name": "Progress" }, { "id": "k", "name": "Performance" }],
    "resources": [
        { "id": "Examples", "name": "Examples", "dim": { "w": 800, "h": 420 }, "updateStateOn": { "done": false, "winClose": true, "winCloseIfAct": false } },
        { "id": "Challenges", "name": "Challenges", "dim": { "w": 800, "h": 420 }, "updateStateOn": { "done": false, "winClose": true, "winCloseIfAct": false } },
        { "id": "Coding", "name": "Coding", "dim": { "w": 800, "h": 420 }, "updateStateOn": { "done": false, "winClose": true, "winCloseIfAct": false } }
    ],
    "topics": [
        {
            "id": "Variables and Operations", "name": "Variables and Operations", "difficulty": 0, "importance": 0, "order": 1, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "artithmetic.inc_dec_operators", "name": "Increment-Decrement Operators", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&svc=masterygrids", "kcs": [] },
                    { "id": "arithmetic.f_to_c_conversion", "name": "Unit Converter", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&svc=masterygrids", "kcs": [] },
                    { "id": "arithmetic.time_conversion", "name": "Time Converter", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&svc=masterygrids", "kcs": [] },
                    { "id": "artihmetic.vending_machine", "name": "Vending Machine", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&svc=masterygrids", "kcs": [] },
                    { "id": "arithmetic.bmi_calculator", "name": "BMI Calculator", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&svc=masterygrids", "kcs": [] },
                    { "id": "arithmetic.pythagorean_theorem", "name": "Pythagorean Theorem", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JDecInc2", "name": "Increment/Decrement Operators (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc2&svc=masterygrids", "kcs": [] },
                    { "id": "JDecInc3", "name": "Increment/Decrement Operators (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc3&svc=masterygrids", "kcs": [] },
                    { "id": "FahrenheitToCelsius", "name": "Fahrenheit to Celsius Conversion", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.f_to_c_conversion&ch=FahrenheitToCelsius&svc=masterygrids", "kcs": [] },
                    { "id": "DisplayTime2", "name": "Converting Milliseconds to Hours, Minutes, and Seconds", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.time_conversion&ch=DisplayTime2&svc=masterygrids", "kcs": [] },
                    { "id": "VendingMachine2", "name": "Vending Machine With Quarters, Dimes, and Nickels", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artihmetic.vending_machine&ch=VendingMachine2&svc=masterygrids", "kcs": [] },
                    { "id": "BmiCalculator2", "name": "Calculating and Rounding Up Body Mass Index (BMI) To the Nearest Integer", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.bmi_calculator&ch=BmiCalculator2&svc=masterygrids", "kcs": [] },
                    { "id": "PythagoreanTheorem2", "name": "Pythagorean Theorem (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arithmetic.pythagorean_theorem&ch=PythagoreanTheorem2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "second_in_days", "name": "Calculating the Seconds in n Days", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/335/embed?act=PCRS&sub=second_in_days&svc=masterygrids", "kcs": [] },
                    { "id": "rectangle_perimeter", "name": "Calculating the Perimeter of a Rectangle", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/336/embed?act=PCRS&sub=rectangle_perimeter&svc=masterygrids", "kcs": [] },
                    { "id": "days_to_week_conversion", "name": "Converting n Days into Weeks and Remaining Days", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/337/embed?act=PCRS&sub=days_to_week_conversion&svc=masterygrids", "kcs": [] },
                    { "id": "percentage_correctness", "name": "Calculating the Percentage of the Correctly Answered Questions on a Test", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/338/embed?act=PCRS&sub=percentage_correctness&svc=masterygrids", "kcs": [] },
                    { "id": "compute_average", "name": "Calculating the Average of Three Numbers", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/339/embed?act=PCRS&sub=compute_average&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Strings", "name": "Strings", "difficulty": 0, "importance": 0, "order": 2, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "strings.substring", "name": "Name Initials", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&svc=masterygrids", "kcs": [] },
                    { "id": "strings.addition", "name": "String Addition", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&svc=masterygrids", "kcs": [] },
                    { "id": "strings.escape_chars", "name": "Strings With Escape Characters", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&svc=masterygrids", "kcs": [] },
                    { "id": "strings.equals", "name": "String Comparison", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&svc=masterygrids", "kcs": [] },
                    { "id": "strings.charAt", "name": "Accessing String Characters", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "Initials2", "name": "Printing Full Name with Middle Initial", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials2&svc=masterygrids", "kcs": [] },
                    { "id": "Initials3", "name": "Printing Name in APA Style", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.substring&ch=Initials3&svc=masterygrids", "kcs": [] },
                    { "id": "StringAddition2", "name": "String Concatenation (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.addition&ch=StringAddition2&svc=masterygrids", "kcs": [] },
                    { "id": "JEscapeChar2", "name": "String With Escape Characters (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar2&svc=masterygrids", "kcs": [] },
                    { "id": "JEscapeChar3", "name": "String With Escape Characters (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.escape_chars&ch=JEscapeChar3&svc=masterygrids", "kcs": [] },
                    { "id": "JStringEqual2", "name": "String Comparison (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.equals&ch=JStringEqual2&svc=masterygrids", "kcs": [] },
                    { "id": "JCharAt2", "name": "Accessing String Characters (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=strings.charAt&ch=JCharAt2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "first_half", "name": "Printing the First Half of a String", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/258/embed?act=PCRS&sub=first_half&svc=masterygrids", "kcs": [] },
                    { "id": "non_start", "name": "Concatenating Two Strings Without Including the First Character of Each of Them", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/259/embed?act=PCRS&sub=non_start&svc=masterygrids", "kcs": [] },
                    { "id": "make_out_word", "name": "Adding One String in the Middle of Another ", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/342/embed?act=PCRS&sub=make_out_word&svc=masterygrids", "kcs": [] },
                    { "id": "repeat_last_char", "name": "Repeating the Last Character of a String", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/344/embed?act=PCRS&sub=repeat_last_char&svc=masterygrids", "kcs": [] },
                    { "id": "first_last_swap", "name": "Swapping the First and Last Characters of a String", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/346/embed?act=PCRS&sub=first_last_swap&svc=masterygrids", "kcs": [] },
                    { "id": "end_characters", "name": "Checking Ending Characters of a String", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/345/embed?act=PCRS&sub=end_characters&svc=masterygrids", "kcs": [] },
                    { "id": "is_is_substring_or_ not_is_not_substring", "name": "Is is substring or not is not substring", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/387/embed?act=PCRS&sub=is_is_substring_or_ not_is_not_substring&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Boolean Expressions", "name": "Boolean Expressions", "difficulty": 0, "importance": 0, "order": 3, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "booleans.phone_age", "name": "Buying a New Phone", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&svc=masterygrids", "kcs": [] },
                    { "id": "booleans.fail_course", "name": "Pass-Fail Rule", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&svc=masterygrids", "kcs": [] },
                    { "id": "booleans.rent_car", "name": "Renting a Car", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&svc=masterygrids", "kcs": [] },
                    { "id": "booleans.hot_dry", "name": "Hot-Dry Weather", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&svc=masterygrids", "kcs": [] },
                    { "id": "booleans.three_booleans", "name": "Three Booleans", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JPhoneAge2", "name": "Determining When to Buy a New Phone (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.phone_age&ch=JPhoneAge2&svc=masterygrids", "kcs": [] },
                    { "id": "JFailCourse2", "name": "Determining When a Student Fails a Course (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse2&svc=masterygrids", "kcs": [] },
                    { "id": "JFailCourse3", "name": "Determining When a Student Fails a Course (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.fail_course&ch=JFailCourse3&svc=masterygrids", "kcs": [] },
                    { "id": "JRentCar2", "name": "Determining When a Customer Could Rent a Car (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar2&svc=masterygrids", "kcs": [] },
                    { "id": "JRentCar3", "name": "Determining When a Customer Could Rent a Car (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.rent_car&ch=JRentCar3&svc=masterygrids", "kcs": [] },
                    { "id": "JBooleanDryHot2", "name": "Determining the Weather Condition (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot2&svc=masterygrids", "kcs": [] },
                    { "id": "JBooleanDryHot3", "name": "Determining the Weather Condition (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot3&svc=masterygrids", "kcs": [] },
                    { "id": "JBooleanDryHot4", "name": "Determining the Weather Condition (Case 4)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.hot_dry&ch=JBooleanDryHot4&svc=masterygrids", "kcs": [] },
                    { "id": "JThreeBoolean2", "name": "Determining When at Least One of the Three Boolean Variables is False", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean2&svc=masterygrids", "kcs": [] },
                    { "id": "JThreeBoolean3", "name": "Determining When All Three Boolean Variables Are Equal", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=booleans.three_booleans&ch=JThreeBoolean3&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "love6", "name": "Determining Equality to a Specific Number", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/347/embed?act=PCRS&sub=love6&svc=masterygrids", "kcs": [] },
                    { "id": "is_special", "name": "Determining When a Number is Special", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/348/embed?act=PCRS&sub=is_special&svc=masterygrids", "kcs": [] },
                    { "id": "check_start_end_character", "name": "Determining When a String Starts and Ends with Specific Characters", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/349/embed?act=PCRS&sub=check_start_end_character&svc=masterygrids", "kcs": [] },
                    { "id": "squirrel_play", "name": "Determining When the Squirrels in Palo Alto Play", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/350/embed?act=PCRS&sub=squirrel_play&svc=masterygrids", "kcs": [] },
                    { "id": "in_order", "name": "Determining When the three Numbers are in Order", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/351/embed?act=PCRS&sub=in_order&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "If-Else", "name": "If-Else", "difficulty": 0, "importance": 0, "order": 4, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "ifelse.if_else_num", "name": "The Sign of a Number", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&svc=masterygrids", "kcs": [] },
                    { "id": "ifelse.if_else_wage", "name": "The Wage of an Employee", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&svc=masterygrids", "kcs": [] },
                    { "id": "ifelse.if_else_if_grade", "name": "The Grade Letter", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&svc=masterygrids", "kcs": [] },
                    { "id": "ifelse.nested_if_temperature", "name": "Warning about the Changes in the Weather Condition", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&svc=masterygrids", "kcs": [] },
                    { "id": "ifelse.nested_if_min_max", "name": "The Min/Max of Three Integers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "ifElseOddEven", "name": "Determining Whether an Integer is Even or Odd", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_num&ch=ifElseOddEven&svc=masterygrids", "kcs": [] },
                    { "id": "JIfElseWages2", "name": "Calculating the Wage of an Employee at the Customer Service Call Center", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_wage&ch=JIfElseWages2&svc=masterygrids", "kcs": [] },
                    { "id": "JIfElseIfGrade2", "name": "Converting the Letter Grade of a Student to It's Numeric Range", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.if_else_if_grade&ch=JIfElseIfGrade2&svc=masterygrids", "kcs": [] },
                    { "id": "JNestedIfTemperature2", "name": "Warning the User about the Changes in the Temperature and Humidity", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_temperature&ch=JNestedIfTemperature2&svc=masterygrids", "kcs": [] },
                    { "id": "JNestedIfMaxOfThree", "name": "Determining the Largest of the Three Integers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=ifelse.nested_if_min_max&ch=JNestedIfMaxOfThree&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "sortaSum", "name": "Conditional statements 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/352/embed?act=PCRS&sub=sortaSum&svc=masterygrids", "kcs": [] },
                    { "id": "twoAsOne", "name": "Conditional statements 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/353/embed?act=PCRS&sub=twoAsOne&svc=masterygrids", "kcs": [] },
                    { "id": "greenTicket", "name": "Conditional statements 3", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/354/embed?act=PCRS&sub=greenTicket&svc=masterygrids", "kcs": [] },
                    { "id": "without2", "name": "Conditional statements 4", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/355/embed?act=PCRS&sub=without2&svc=masterygrids", "kcs": [] },
                    { "id": "in1To10", "name": "Conditional statements 5", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/356/embed?act=PCRS&sub=in1To10&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "While Loops", "name": "While Loops", "difficulty": 0, "importance": 0, "order": 5, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "while_loops.divisor", "name": "Finding Smallest/Largest Divisor of a Positive Number", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&svc=masterygrids", "kcs": [] },
                    { "id": "while_loops.inputs", "name": "Receiving Input Integers Until a Certain Condition is Met", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&svc=masterygrids", "kcs": [] },
                    { "id": "while_loops.j_average", "name": "Calculating the Average of the Input Numbers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&svc=masterygrids", "kcs": [] },
                    { "id": "while_loops.j_check_adjacent", "name": "Comparing Adjacent Numbers in a Sequence of Numbers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&svc=masterygrids", "kcs": [] },
                    { "id": "while_loops.j_digits", "name": "Processing the Digits of an Integer ", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&svc=masterygrids", "kcs": [] },
                    { "id": "while_loops.win_percentage", "name": "Calculating the Winning Percentage of a Sports Team ", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JLargestDivisor", "name": "Finding the Largest Divisor of a Positive Number", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.divisor&ch=JLargestDivisor&svc=masterygrids", "kcs": [] },
                    { "id": "JInput2", "name": "Receiving Input Integers Until a Certain Condition is Met (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput2&svc=masterygrids", "kcs": [] },
                    { "id": "JInput3", "name": "Receiving Input Integers Until a Certain Condition is Met (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput3&svc=masterygrids", "kcs": [] },
                    { "id": "JInput4", "name": "Receiving Input Integers Until a Certain Condition is Met (Case 4)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.inputs&ch=JInput4&svc=masterygrids", "kcs": [] },
                    { "id": "JAverageEvenNums", "name": "Calculating the Average of the Input Integers that are an Even Number", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageEvenNums&svc=masterygrids", "kcs": [] },
                    { "id": "JAverageDouble", "name": "Calculating the Average of Floating-Point Numbers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_average&ch=JAverageDouble&svc=masterygrids", "kcs": [] },
                    { "id": "JAdjacentConsecutives", "name": "Finding Adjacent Consecutive Numbers in a Sequence of Integers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentConsecutives&svc=masterygrids", "kcs": [] },
                    { "id": "JAdjacentGreater", "name": "Finding Adjacent Numbers in Ascending Order in a Sequence of Numbers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_check_adjacent&ch=JAdjacentGreater&svc=masterygrids", "kcs": [] },
                    { "id": "JSumDigits", "name": "The Digit Sum of an Integer", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JSumDigits&svc=masterygrids", "kcs": [] },
                    { "id": "JReverseNumber", "name": "Reversing the Digits of an Integer", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.j_digits&ch=JReverseNumber&svc=masterygrids", "kcs": [] },
                    { "id": "JWinPercentageInput", "name": "Calculating the Winning Percentage of a Sports Team (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageInput&svc=masterygrids", "kcs": [] },
                    { "id": "JWinPercentageWonEqual", "name": "Calculating the Winning Percentage of a Sports Team (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=while_loops.win_percentage&ch=JWinPercentageWonEqual&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "while1_coding", "name": "While Loops 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/357/embed?act=PCRS&sub=while1_coding&svc=masterygrids", "kcs": [] },
                    { "id": "while2_coding", "name": "While Loops 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/358/embed?act=PCRS&sub=while2_coding&svc=masterygrids", "kcs": [] },
                    { "id": "while3_coding", "name": "While Loops 3", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/359/embed?act=PCRS&sub=while3_coding&svc=masterygrids", "kcs": [] },
                    { "id": "while4_coding", "name": "While Loops 4", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/360/embed?act=PCRS&sub=while4_coding&svc=masterygrids", "kcs": [] },
                    { "id": "while5_coding", "name": "While Loops 5", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/361/embed?act=PCRS&sub=while5_coding&svc=masterygrids", "kcs": [] },
                    { "id": "smallest_integer", "name": "Smallest integer", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/388/embed?act=PCRS&sub=smallest_integer&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "For Loops", "name": "For Loops", "difficulty": 0, "importance": 0, "order": 6, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "for_loops.j_for_one", "name": "Printing Consecutive Numbers Starting from Zero", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&svc=masterygrids", "kcs": [] },
                    { "id": "for_loops.j_for_two", "name": "Printing Consecutive Numbers Within a Specified Range", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&svc=masterygrids", "kcs": [] },
                    { "id": "for_loops.j_for_three", "name": "Printing Sequence of Numbers with a Gap Between Adjacent Values", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&svc=masterygrids", "kcs": [] },
                    { "id": "for_loops.j_squares", "name": "Printing the Squares of Numbers Within a Specified Range", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JForOne2", "name": "Printing Consecutive Numbers Starting from Zero (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_one&ch=JForOne2&svc=masterygrids", "kcs": [] },
                    { "id": "JForTwo2", "name": "Printing Consecutive Numbers Within a Specified Range (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_two&ch=JForTwo2&svc=masterygrids", "kcs": [] },
                    { "id": "JForThree2", "name": "Printing Sequence of Numbers with a Gap Between Adjacent Values (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_for_three&ch=JForThree2&svc=masterygrids", "kcs": [] },
                    { "id": "JWriteSquaresOdd", "name": "Printing the Squares of Numbers Within a Specified Range (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresOdd&svc=masterygrids", "kcs": [] },
                    { "id": "JWriteSquaresRange", "name": "Printing the Squares of Numbers Within a Specified Range (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=for_loops.j_squares&ch=JWriteSquaresRange&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "for1_coding", "name": "For Loop 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/362/embed?act=PCRS&sub=for1_coding&svc=masterygrids", "kcs": [] },
                    { "id": "for2_coding", "name": "For Loop 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/363/embed?act=PCRS&sub=for2_coding&svc=masterygrids", "kcs": [] },
                    { "id": "for3_coding", "name": "For Loop 3", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/364/embed?act=PCRS&sub=for3_coding&svc=masterygrids", "kcs": [] },
                    { "id": "for4_coding", "name": "For Loop 4", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/365/embed?act=PCRS&sub=for4_coding&svc=masterygrids", "kcs": [] },
                    { "id": "sum_square_difference", "name": "Sum square difference", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/384/embed?act=PCRS&sub=sum_square_difference&svc=masterygrids", "kcs": [] },
                    { "id": "largest_prime_factor", "name": "Largest prime factor", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/389/embed?act=PCRS&sub=largest_prime_factor&svc=masterygrids", "kcs": [] },
                    { "id": "largest_palindrome_product", "name": "Largest palindrome product", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/390/embed?act=PCRS&sub=largest_palindrome_product&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Objects and Classes", "name": "Objects and Classes", "difficulty": 0, "importance": 0, "order": 7, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "objects.classes.point", "name": "The Class for Representing a Point in the Euclidean Plane", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&svc=masterygrids", "kcs": [] },
                    { "id": "objects.classes.tv", "name": "The Class for Representing a TV", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&svc=masterygrids", "kcs": [] },
                    { "id": "objects.classes.account", "name": "The Class for Representing a Bank Account", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&svc=masterygrids", "kcs": [] },
                    { "id": "objects.classes.loan", "name": "The Class for Representing a Loan", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "PointTester2", "name": "The Class for Representing a Point in the Euclidean Plane (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.point&ch=PointTester2&svc=masterygrids", "kcs": [] },
                    { "id": "TVTester2", "name": "The Class for Representing a TV (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.tv&ch=TVTester2&svc=masterygrids", "kcs": [] },
                    { "id": "Transactions2", "name": "The Class for Representing a Bank Account (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.account&ch=Transactions2&svc=masterygrids", "kcs": [] },
                    { "id": "LoanTester2", "name": "The Class for Representing a Loan (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=objects.classes.loan&ch=LoanTester2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "object_classes_1", "name": "Objects and Classes 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/366/embed?act=PCRS&sub=object_classes_1&svc=masterygrids", "kcs": [] },
                    { "id": "object_classes_2", "name": "Objects and Classes 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/368/embed?act=PCRS&sub=object_classes_2&svc=masterygrids", "kcs": [] },
                    { "id": "object_classes_3", "name": "Objects and Classes 3", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/370/embed?act=PCRS&sub=object_classes_3&svc=masterygrids", "kcs": [] },
                    { "id": "object_classes_4", "name": "Objects and Classes 4", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/371/embed?act=PCRS&sub=object_classes_4&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Nested Loops", "name": "Nested Loops", "difficulty": 0, "importance": 0, "order": 8, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "nested_for.star_patterns", "name": "Printing A Right Triangle Star Pattern", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&svc=masterygrids", "kcs": [] },
                    { "id": "nested_for.repeated_sequence", "name": "Printing A Sequence of Repeated Numbers", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JStars2", "name": "Printing an Inverted Right Triangle Star Pattern", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.star_patterns&ch=JStars2&svc=masterygrids", "kcs": [] },
                    { "id": "JRepeatedSequence2", "name": "Printing A Sequence of Repeated Numbers (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=nested_for.repeated_sequence&ch=JRepeatedSequence2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "nested_loops_1", "name": "Nested Loops 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/372/embed?act=PCRS&sub=nested_loops_1&svc=masterygrids", "kcs": [] },
                    { "id": "nested_loops_2", "name": "Nested Loops 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/373/embed?act=PCRS&sub=nested_loops_2&svc=masterygrids", "kcs": [] },
                    { "id": "symmetrical_array", "name": "Symmetrical array", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/385/embed?act=PCRS&sub=symmetrical_array&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Arrays", "name": "Arrays", "difficulty": 0, "importance": 0, "order": 9, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "arrays.j_array_basic", "name": "Updating an Element in the Array ", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_array_fill", "name": "Creating an Array of Numbers/Strings", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_array_change", "name": "Modifying an Array", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_array_process_elements", "name": "Calculating Sum/Average of the Array Values ", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_array_min_max", "name": "Finding the Max/Min Value in an Array", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_temperature", "name": "Processing a List of Temperature Values", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_array_rotate", "name": "Rotating the Array Values", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&svc=masterygrids", "kcs": [] },
                    { "id": "arrays.j_search_array", "name": "Searching Values of an Array in Another Array", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JArrayBasic2", "name": "Updating an Element in the Array (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic2&svc=masterygrids", "kcs": [] },
                    { "id": "JArrayBasic3", "name": "Updating an Element in the Array (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_basic&ch=JArrayBasic3&svc=masterygrids", "kcs": [] },
                    { "id": "JArrayFillUserInput", "name": "Creating an Array of User Inputs", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_fill&ch=JArrayFillUserInput&svc=masterygrids", "kcs": [] },
                    { "id": "JArraySwapAdjacentElements", "name": "Modifying an Array (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_change&ch=JArraySwapAdjacentElements&svc=masterygrids", "kcs": [] },
                    { "id": "JAverageArrayElements", "name": "Calculating the Average of the Values in the Array", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_process_elements&ch=JAverageArrayElements&svc=masterygrids", "kcs": [] },
                    { "id": "JArrayMin", "name": "Finding the Minimum Value in an Array", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_min_max&ch=JArrayMin&svc=masterygrids", "kcs": [] },
                    { "id": "JTemperatureListDaysAboveThreshold", "name": "Displaying the Days That are Above 32 Degrees Fahrenheit", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_temperature&ch=JTemperatureListDaysAboveThreshold&svc=masterygrids", "kcs": [] },
                    { "id": "JArrayRotateLeftTwice", "name": "Rotating the Array Values to the Left by Two Position", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateLeftTwice&svc=masterygrids", "kcs": [] },
                    { "id": "JArrayRotateRight", "name": "Rotating the Array Values to the Right by One Position", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRight&svc=masterygrids", "kcs": [] },
                    { "id": "JArrayRotateRightTwice", "name": "Rotating the List Values to the Right by Two Position", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_array_rotate&ch=JArrayRotateRightTwice&svc=masterygrids", "kcs": [] },
                    { "id": "JSearchArrayTotalCounts", "name": "Searching Arrays (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayTotalCounts&svc=masterygrids", "kcs": [] },
                    { "id": "JSearchArrayCountsEach", "name": "Searching Arrays (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays.j_search_array&ch=JSearchArrayCountsEach&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "arrays_1", "name": "Arrays 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/325/embed?act=PCRS&sub=arrays_1&svc=masterygrids", "kcs": [] },
                    { "id": "arrays_2", "name": "Arrays 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/323/embed?act=PCRS&sub=arrays_2&svc=masterygrids", "kcs": [] },
                    { "id": "arrays_3", "name": "Arrays 3", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/318/embed?act=PCRS&sub=arrays_3&svc=masterygrids", "kcs": [] },
                    { "id": "array_4", "name": "Arrays 4", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/331/embed?act=PCRS&sub=array_4&svc=masterygrids", "kcs": [] },
                    { "id": "fixing_order_of_numbers", "name": "Fixing order of numbers", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/386/embed?act=PCRS&sub=fixing_order_of_numbers&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Two-Dimensional Arrays", "name": "Two-Dimensional Arrays", "difficulty": 0, "importance": 0, "order": 10, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "arrays2d.j_array2d_basic", "name": "Updating an Element in the 2D Array ", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&svc=masterygrids", "kcs": [] },
                    { "id": "arrays2d.j_print_medals", "name": "Printing Table of Medal Counts with Row/Column Total", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&svc=masterygrids", "kcs": [] },
                    { "id": "arrays2d.j_soda_survery", "name": "Processing the Results of a Soda Survey", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JArrays2dBasic2", "name": "Updating Two-Dimensional Array (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic2&svc=masterygrids", "kcs": [] },
                    { "id": "JArrays2dBasic3", "name": "Updating Two-Dimensional Array (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_array2d_basic&ch=JArrays2dBasic3&svc=masterygrids", "kcs": [] },
                    { "id": "JPrintMedalsRowColumnTotal", "name": "Printing Table of Medal Winner Counts with Row and Column Totals", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_print_medals&ch=JPrintMedalsRowColumnTotal&svc=masterygrids", "kcs": [] },
                    { "id": "JSodaSurverySodaAvg", "name": "Processing Soda Survery (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaAvg&svc=masterygrids", "kcs": [] },
                    { "id": "JSodaSurverySodaRespondentAvg", "name": "Processing Soda Survery (Case 3)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arrays2d.j_soda_survery&ch=JSodaSurverySodaRespondentAvg&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "pcrs_2d_arrays_1", "name": "Two-Dimensional Arrays 1 ", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/329/embed?act=PCRS&sub=pcrs_2d_arrays_1&svc=masterygrids", "kcs": [] },
                    { "id": "pcrs_2d_arrays_2", "name": "Two-Dimensional Arrays 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/375/embed?act=PCRS&sub=pcrs_2d_arrays_2&svc=masterygrids", "kcs": [] },
                    { "id": "pcrs_2d_arrays_3", "name": "Two-Dimensional Arrays 3", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/296/embed?act=PCRS&sub=pcrs_2d_arrays_3&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Exception handling", "name": "Exception handling", "difficulty": 0, "importance": 0, "order": 11, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "exceptions.j_check_age", "name": "Determining Whether One is a Teenager", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&svc=masterygrids", "kcs": [] },
                    { "id": "exceptions.j_check_producut_code", "name": "Counting the Number of Valid and Banned Product Codes", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JCheckAge2", "name": "Determining Whether One is a Teenager (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_age&ch=JCheckAge2&svc=masterygrids", "kcs": [] },
                    { "id": "JCheckProductCode2", "name": "Counting the Number of Valid and Banned Product Codes (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=exceptions.j_check_producut_code&ch=JCheckProductCode2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [

                ]
            }
        },
        {
            "id": "File processing", "name": "File processing", "difficulty": 0, "importance": 0, "order": 12, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "files.j_work_hours", "name": "Reporting the Total Hours Each Employee Worked ", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&svc=masterygrids", "kcs": [] },
                    { "id": "files.j_input_stat", "name": "Reporting File Information", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JWorkHours2", "name": "Reporting the Total Hours Each Employee Worked (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_work_hours&ch=JWorkHours2&svc=masterygrids", "kcs": [] },
                    { "id": "JInputStat2", "name": "Reporting File Information (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=files.j_input_stat&ch=JInputStat2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [

                ]
            }
        },
        {
            "id": "ArrayLists", "name": "ArrayLists", "difficulty": 0, "importance": 0, "order": 13, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "arraylist.vocabulary", "name": "Creating a List of Words from File(s)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "JVocabulary2", "name": "Comparing the List of Words from Two Files", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=arraylist.vocabulary&ch=JVocabulary2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "array_lst_1", "name": "ArrayLists 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/374/embed?act=PCRS&sub=array_lst_1&svc=masterygrids", "kcs": [] }
                ]
            }
        },
        {
            "id": "Inheritance", "name": "Inheritance", "difficulty": 0, "importance": 0, "order": 14, "concepts": [], "isVisible": true,
            "timeline": { "covered": false, "current": false },
            "activities": {
                "Examples": [
                    { "id": "inheritance.animals", "name": "Animal Class Hierarchy", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&svc=masterygrids", "kcs": [] },
                    { "id": "inheritance.point", "name": "Point Class Hierarchy", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&svc=masterygrids", "kcs": [] }
                ],
                "Challenges": [
                    { "id": "AnimalTester2", "name": "Animal Class Hierarchy (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.animals&ch=AnimalTester2&svc=masterygrids", "kcs": [] },
                    { "id": "InheritancePointTester2", "name": "Point Class Hierarchy (Case 2)", "url": "http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=inheritance.point&ch=InheritancePointTester2&svc=masterygrids", "kcs": [] }
                ],
                "Coding": [
                    { "id": "inheritance_1", "name": "Inheritance 1", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/376/embed?act=PCRS&sub=inheritance_1&svc=masterygrids", "kcs": [] },
                    { "id": "inheritance_2", "name": "inheritance 2", "url": "https://pcrs.utm.utoronto.ca/mgrids/problems/java/377/embed?act=PCRS&sub=inheritance_2&svc=masterygrids", "kcs": [] }
                ]
            }
        }
    ],
    "learners": [
        {
            "id": "0", "name": "undefined", "isHidden": false,
            "state": {
                "topics": {
                    "Variables and Operations": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Strings": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Boolean Expressions": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "If-Else": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "While Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "For Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Objects and Classes": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Nested Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Arrays": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Two-Dimensional Arrays": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Exception handling": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "File processing": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "ArrayLists": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } },
                    "Inheritance": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } }, "overall": { "k": 0, "p": 0 } }
                },
                "activities": {
                    "Variables and Operations": {
                        "Examples": {
                            "artithmetic.inc_dec_operators": { "values": { "k": 0, "p": 0 } },
                            "arithmetic.f_to_c_conversion": { "values": { "k": 0, "p": 0 } },
                            "arithmetic.time_conversion": { "values": { "k": 0, "p": 0 } },
                            "artihmetic.vending_machine": { "values": { "k": 0, "p": 0 } },
                            "arithmetic.bmi_calculator": { "values": { "k": 0, "p": 0 } },
                            "arithmetic.pythagorean_theorem": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JDecInc2": { "values": { "k": 0, "p": 0 } },
                            "JDecInc3": { "values": { "k": 0, "p": 0 } },
                            "FahrenheitToCelsius": { "values": { "k": 0, "p": 0 } },
                            "DisplayTime2": { "values": { "k": 0, "p": 0 } },
                            "VendingMachine2": { "values": { "k": 0, "p": 0 } },
                            "BmiCalculator2": { "values": { "k": 0, "p": 0 } },
                            "PythagoreanTheorem2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "second_in_days": { "values": { "k": 0, "p": 0 } },
                            "rectangle_perimeter": { "values": { "k": 0, "p": 0 } },
                            "days_to_week_conversion": { "values": { "k": 0, "p": 0 } },
                            "percentage_correctness": { "values": { "k": 0, "p": 0 } },
                            "compute_average": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Strings": {
                        "Examples": {
                            "strings.substring": { "values": { "k": 0, "p": 0 } },
                            "strings.addition": { "values": { "k": 0, "p": 0 } },
                            "strings.escape_chars": { "values": { "k": 0, "p": 0 } },
                            "strings.equals": { "values": { "k": 0, "p": 0 } },
                            "strings.charAt": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "Initials2": { "values": { "k": 0, "p": 0 } },
                            "Initials3": { "values": { "k": 0, "p": 0 } },
                            "StringAddition2": { "values": { "k": 0, "p": 0 } },
                            "JEscapeChar2": { "values": { "k": 0, "p": 0 } },
                            "JEscapeChar3": { "values": { "k": 0, "p": 0 } },
                            "JStringEqual2": { "values": { "k": 0, "p": 0 } },
                            "JCharAt2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "first_half": { "values": { "k": 0, "p": 0 } },
                            "non_start": { "values": { "k": 0, "p": 0 } },
                            "make_out_word": { "values": { "k": 0, "p": 0 } },
                            "repeat_last_char": { "values": { "k": 0, "p": 0 } },
                            "first_last_swap": { "values": { "k": 0, "p": 0 } },
                            "end_characters": { "values": { "k": 0, "p": 0 } },
                            "is_is_substring_or_ not_is_not_substring": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Boolean Expressions": {
                        "Examples": {
                            "booleans.phone_age": { "values": { "k": 0, "p": 0 } },
                            "booleans.fail_course": { "values": { "k": 0, "p": 0 } },
                            "booleans.rent_car": { "values": { "k": 0, "p": 0 } },
                            "booleans.hot_dry": { "values": { "k": 0, "p": 0 } },
                            "booleans.three_booleans": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JPhoneAge2": { "values": { "k": 0, "p": 0 } },
                            "JFailCourse2": { "values": { "k": 0, "p": 0 } },
                            "JFailCourse3": { "values": { "k": 0, "p": 0 } },
                            "JRentCar2": { "values": { "k": 0, "p": 0 } },
                            "JRentCar3": { "values": { "k": 0, "p": 0 } },
                            "JBooleanDryHot2": { "values": { "k": 0, "p": 0 } },
                            "JBooleanDryHot3": { "values": { "k": 0, "p": 0 } },
                            "JBooleanDryHot4": { "values": { "k": 0, "p": 0 } },
                            "JThreeBoolean2": { "values": { "k": 0, "p": 0 } },
                            "JThreeBoolean3": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "love6": { "values": { "k": 0, "p": 0 } },
                            "is_special": { "values": { "k": 0, "p": 0 } },
                            "check_start_end_character": { "values": { "k": 0, "p": 0 } },
                            "squirrel_play": { "values": { "k": 0, "p": 0 } },
                            "in_order": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "If-Else": {
                        "Examples": {
                            "ifelse.if_else_num": { "values": { "k": 0, "p": 0 } },
                            "ifelse.if_else_wage": { "values": { "k": 0, "p": 0 } },
                            "ifelse.if_else_if_grade": { "values": { "k": 0, "p": 0 } },
                            "ifelse.nested_if_temperature": { "values": { "k": 0, "p": 0 } },
                            "ifelse.nested_if_min_max": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "ifElseOddEven": { "values": { "k": 0, "p": 0 } },
                            "JIfElseWages2": { "values": { "k": 0, "p": 0 } },
                            "JIfElseIfGrade2": { "values": { "k": 0, "p": 0 } },
                            "JNestedIfTemperature2": { "values": { "k": 0, "p": 0 } },
                            "JNestedIfMaxOfThree": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "sortaSum": { "values": { "k": 0, "p": 0 } },
                            "twoAsOne": { "values": { "k": 0, "p": 0 } },
                            "greenTicket": { "values": { "k": 0, "p": 0 } },
                            "without2": { "values": { "k": 0, "p": 0 } },
                            "in1To10": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "While Loops": {
                        "Examples": {
                            "while_loops.divisor": { "values": { "k": 0, "p": 0 } },
                            "while_loops.inputs": { "values": { "k": 0, "p": 0 } },
                            "while_loops.j_average": { "values": { "k": 0, "p": 0 } },
                            "while_loops.j_check_adjacent": { "values": { "k": 0, "p": 0 } },
                            "while_loops.j_digits": { "values": { "k": 0, "p": 0 } },
                            "while_loops.win_percentage": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JLargestDivisor": { "values": { "k": 0, "p": 0 } },
                            "JInput2": { "values": { "k": 0, "p": 0 } },
                            "JInput3": { "values": { "k": 0, "p": 0 } },
                            "JInput4": { "values": { "k": 0, "p": 0 } },
                            "JAverageEvenNums": { "values": { "k": 0, "p": 0 } },
                            "JAverageDouble": { "values": { "k": 0, "p": 0 } },
                            "JAdjacentConsecutives": { "values": { "k": 0, "p": 0 } },
                            "JAdjacentGreater": { "values": { "k": 0, "p": 0 } },
                            "JSumDigits": { "values": { "k": 0, "p": 0 } },
                            "JReverseNumber": { "values": { "k": 0, "p": 0 } },
                            "JWinPercentageInput": { "values": { "k": 0, "p": 0 } },
                            "JWinPercentageWonEqual": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "while1_coding": { "values": { "k": 0, "p": 0 } },
                            "while2_coding": { "values": { "k": 0, "p": 0 } },
                            "while3_coding": { "values": { "k": 0, "p": 0 } },
                            "while4_coding": { "values": { "k": 0, "p": 0 } },
                            "while5_coding": { "values": { "k": 0, "p": 0 } },
                            "smallest_integer": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "For Loops": {
                        "Examples": {
                            "for_loops.j_for_one": { "values": { "k": 0, "p": 0 } },
                            "for_loops.j_for_two": { "values": { "k": 0, "p": 0 } },
                            "for_loops.j_for_three": { "values": { "k": 0, "p": 0 } },
                            "for_loops.j_squares": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JForOne2": { "values": { "k": 0, "p": 0 } },
                            "JForTwo2": { "values": { "k": 0, "p": 0 } },
                            "JForThree2": { "values": { "k": 0, "p": 0 } },
                            "JWriteSquaresOdd": { "values": { "k": 0, "p": 0 } },
                            "JWriteSquaresRange": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "for1_coding": { "values": { "k": 0, "p": 0 } },
                            "for2_coding": { "values": { "k": 0, "p": 0 } },
                            "for3_coding": { "values": { "k": 0, "p": 0 } },
                            "for4_coding": { "values": { "k": 0, "p": 0 } },
                            "sum_square_difference": { "values": { "k": 0, "p": 0 } },
                            "largest_prime_factor": { "values": { "k": 0, "p": 0 } },
                            "largest_palindrome_product": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Objects and Classes": {
                        "Examples": {
                            "objects.classes.point": { "values": { "k": 0, "p": 0 } },
                            "objects.classes.tv": { "values": { "k": 0, "p": 0 } },
                            "objects.classes.account": { "values": { "k": 0, "p": 0 } },
                            "objects.classes.loan": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "PointTester2": { "values": { "k": 0, "p": 0 } },
                            "TVTester2": { "values": { "k": 0, "p": 0 } },
                            "Transactions2": { "values": { "k": 0, "p": 0 } },
                            "LoanTester2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "object_classes_1": { "values": { "k": 0, "p": 0 } },
                            "object_classes_2": { "values": { "k": 0, "p": 0 } },
                            "object_classes_3": { "values": { "k": 0, "p": 0 } },
                            "object_classes_4": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Nested Loops": {
                        "Examples": {
                            "nested_for.star_patterns": { "values": { "k": 0, "p": 0 } },
                            "nested_for.repeated_sequence": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JStars2": { "values": { "k": 0, "p": 0 } },
                            "JRepeatedSequence2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "nested_loops_1": { "values": { "k": 0, "p": 0 } },
                            "nested_loops_2": { "values": { "k": 0, "p": 0 } },
                            "symmetrical_array": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Arrays": {
                        "Examples": {
                            "arrays.j_array_basic": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_array_fill": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_array_change": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_array_process_elements": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_array_min_max": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_temperature": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_array_rotate": { "values": { "k": 0, "p": 0 } },
                            "arrays.j_search_array": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JArrayBasic2": { "values": { "k": 0, "p": 0 } },
                            "JArrayBasic3": { "values": { "k": 0, "p": 0 } },
                            "JArrayFillUserInput": { "values": { "k": 0, "p": 0 } },
                            "JArraySwapAdjacentElements": { "values": { "k": 0, "p": 0 } },
                            "JAverageArrayElements": { "values": { "k": 0, "p": 0 } },
                            "JArrayMin": { "values": { "k": 0, "p": 0 } },
                            "JTemperatureListDaysAboveThreshold": { "values": { "k": 0, "p": 0 } },
                            "JArrayRotateLeftTwice": { "values": { "k": 0, "p": 0 } },
                            "JArrayRotateRight": { "values": { "k": 0, "p": 0 } },
                            "JArrayRotateRightTwice": { "values": { "k": 0, "p": 0 } },
                            "JSearchArrayTotalCounts": { "values": { "k": 0, "p": 0 } },
                            "JSearchArrayCountsEach": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "arrays_1": { "values": { "k": 0, "p": 0 } },
                            "arrays_2": { "values": { "k": 0, "p": 0 } },
                            "arrays_3": { "values": { "k": 0, "p": 0 } },
                            "array_4": { "values": { "k": 0, "p": 0 } },
                            "fixing_order_of_numbers": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Two-Dimensional Arrays": {
                        "Examples": {
                            "arrays2d.j_array2d_basic": { "values": { "k": 0, "p": 0 } },
                            "arrays2d.j_print_medals": { "values": { "k": 0, "p": 0 } },
                            "arrays2d.j_soda_survery": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JArrays2dBasic2": { "values": { "k": 0, "p": 0 } },
                            "JArrays2dBasic3": { "values": { "k": 0, "p": 0 } },
                            "JPrintMedalsRowColumnTotal": { "values": { "k": 0, "p": 0 } },
                            "JSodaSurverySodaAvg": { "values": { "k": 0, "p": 0 } },
                            "JSodaSurverySodaRespondentAvg": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "pcrs_2d_arrays_1": { "values": { "k": 0, "p": 0 } },
                            "pcrs_2d_arrays_2": { "values": { "k": 0, "p": 0 } },
                            "pcrs_2d_arrays_3": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Exception handling": {
                        "Examples": {
                            "exceptions.j_check_age": { "values": { "k": 0, "p": 0 } },
                            "exceptions.j_check_producut_code": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JCheckAge2": { "values": { "k": 0, "p": 0 } },
                            "JCheckProductCode2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {}
                    },
                    "File processing": {
                        "Examples": {
                            "files.j_work_hours": { "values": { "k": 0, "p": 0 } },
                            "files.j_input_stat": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JWorkHours2": { "values": { "k": 0, "p": 0 } },
                            "JInputStat2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {}
                    },
                    "ArrayLists": {
                        "Examples": {
                            "arraylist.vocabulary": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "JVocabulary2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "array_lst_1": { "values": { "k": 0, "p": 0 } }
                        }
                    },
                    "Inheritance": {
                        "Examples": {
                            "inheritance.animals": { "values": { "k": 0, "p": 0 } },
                            "inheritance.point": { "values": { "k": 0, "p": 0 } }
                        },
                        "Challenges": {
                            "AnimalTester2": { "values": { "k": 0, "p": 0 } },
                            "InheritancePointTester2": { "values": { "k": 0, "p": 0 } }
                        },
                        "Coding": {
                            "inheritance_1": { "values": { "k": 0, "p": 0 } },
                            "inheritance_2": { "values": { "k": 0, "p": 0 } }
                        }
                    }
                }
            },
            "preferences": [
            ]
        }
    ],
    "groups": [
        {
            "name": "Class Average",
            "state": {
                "topics": {
                    "Variables and Operations": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Strings": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Boolean Expressions": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "If-Else": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "While Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "For Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Objects and Classes": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Nested Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Arrays": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Two-Dimensional Arrays": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Exception handling": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "File processing": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "ArrayLists": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Inheritance": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } }
                },
                "activities": {
                    "Variables and Operations": {
                        "Examples": {
                            "artithmetic.inc_dec_operators": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.f_to_c_conversion": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.time_conversion": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "artihmetic.vending_machine": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.bmi_calculator": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.pythagorean_theorem": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JDecInc2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JDecInc3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "FahrenheitToCelsius": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "DisplayTime2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "VendingMachine2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "BmiCalculator2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "PythagoreanTheorem2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "second_in_days": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "rectangle_perimeter": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "days_to_week_conversion": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "percentage_correctness": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "compute_average": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Strings": {
                        "Examples": {
                            "strings.substring": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.addition": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.escape_chars": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.equals": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.charAt": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "Initials2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "Initials3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "StringAddition2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JEscapeChar2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JEscapeChar3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JStringEqual2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JCharAt2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "first_half": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "non_start": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "make_out_word": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "repeat_last_char": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "first_last_swap": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "end_characters": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "is_is_substring_or_ not_is_not_substring": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Boolean Expressions": {
                        "Examples": {
                            "booleans.phone_age": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.fail_course": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.rent_car": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.hot_dry": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.three_booleans": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JPhoneAge2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JFailCourse2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JFailCourse3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JRentCar2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JRentCar3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JBooleanDryHot2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JBooleanDryHot3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JBooleanDryHot4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JThreeBoolean2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JThreeBoolean3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "love6": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "is_special": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "check_start_end_character": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "squirrel_play": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "in_order": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "If-Else": {
                        "Examples": {
                            "ifelse.if_else_num": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.if_else_wage": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.if_else_if_grade": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.nested_if_temperature": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.nested_if_min_max": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "ifElseOddEven": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JIfElseWages2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JIfElseIfGrade2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JNestedIfTemperature2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JNestedIfMaxOfThree": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "sortaSum": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "twoAsOne": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "greenTicket": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "without2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "in1To10": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "While Loops": {
                        "Examples": {
                            "while_loops.divisor": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.inputs": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.j_average": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.j_check_adjacent": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.j_digits": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.win_percentage": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JLargestDivisor": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInput2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInput3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInput4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAverageEvenNums": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAverageDouble": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAdjacentConsecutives": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAdjacentGreater": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSumDigits": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JReverseNumber": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWinPercentageInput": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWinPercentageWonEqual": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "while1_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while2_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while3_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while4_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while5_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "smallest_integer": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "For Loops": {
                        "Examples": {
                            "for_loops.j_for_one": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for_loops.j_for_two": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for_loops.j_for_three": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for_loops.j_squares": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JForOne2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JForTwo2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JForThree2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWriteSquaresOdd": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWriteSquaresRange": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "for1_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for2_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for3_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for4_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "sum_square_difference": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "largest_prime_factor": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "largest_palindrome_product": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Objects and Classes": {
                        "Examples": {
                            "objects.classes.point": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "objects.classes.tv": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "objects.classes.account": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "objects.classes.loan": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "PointTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "TVTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "Transactions2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "LoanTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "object_classes_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "object_classes_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "object_classes_3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "object_classes_4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Nested Loops": {
                        "Examples": {
                            "nested_for.star_patterns": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "nested_for.repeated_sequence": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JStars2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JRepeatedSequence2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "nested_loops_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "nested_loops_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "symmetrical_array": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Arrays": {
                        "Examples": {
                            "arrays.j_array_basic": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_fill": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_change": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_process_elements": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_min_max": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_temperature": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_rotate": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_search_array": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JArrayBasic2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayBasic3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayFillUserInput": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArraySwapAdjacentElements": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAverageArrayElements": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayMin": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JTemperatureListDaysAboveThreshold": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayRotateLeftTwice": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayRotateRight": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayRotateRightTwice": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSearchArrayTotalCounts": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSearchArrayCountsEach": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "arrays_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays_3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "array_4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "fixing_order_of_numbers": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Two-Dimensional Arrays": {
                        "Examples": {
                            "arrays2d.j_array2d_basic": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays2d.j_print_medals": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays2d.j_soda_survery": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JArrays2dBasic2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrays2dBasic3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JPrintMedalsRowColumnTotal": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSodaSurverySodaAvg": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSodaSurverySodaRespondentAvg": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "pcrs_2d_arrays_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "pcrs_2d_arrays_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "pcrs_2d_arrays_3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Exception handling": {
                        "Examples": {
                            "exceptions.j_check_age": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "exceptions.j_check_producut_code": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JCheckAge2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JCheckProductCode2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {}
                    },
                    "File processing": {
                        "Examples": {
                            "files.j_work_hours": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "files.j_input_stat": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JWorkHours2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInputStat2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {}
                    },
                    "ArrayLists": {
                        "Examples": {
                            "arraylist.vocabulary": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JVocabulary2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "array_lst_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Inheritance": {
                        "Examples": {
                            "inheritance.animals": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "inheritance.point": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "AnimalTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "InheritancePointTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "inheritance_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "inheritance_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    }
                }
            },
            "learnerIds": ["0"]
        },
        {
            "name": "Top 1",
            "state": {
                "topics": {
                    "Variables and Operations": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Strings": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Boolean Expressions": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "If-Else": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "While Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "For Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Objects and Classes": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Nested Loops": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Arrays": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Two-Dimensional Arrays": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Exception handling": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "File processing": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "ArrayLists": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } },
                    "Inheritance": { "values": { "Examples": { "k": 0, "p": 0 }, "Challenges": { "k": 0, "p": 0 }, "Coding": { "k": 0, "p": 0 } } }
                },
                "activities": {
                    "Variables and Operations": {
                        "Examples": {
                            "artithmetic.inc_dec_operators": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.f_to_c_conversion": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.time_conversion": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "artihmetic.vending_machine": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.bmi_calculator": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arithmetic.pythagorean_theorem": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JDecInc2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JDecInc3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "FahrenheitToCelsius": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "DisplayTime2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "VendingMachine2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "BmiCalculator2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "PythagoreanTheorem2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "second_in_days": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "rectangle_perimeter": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "days_to_week_conversion": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "percentage_correctness": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "compute_average": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Strings": {
                        "Examples": {
                            "strings.substring": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.addition": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.escape_chars": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.equals": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "strings.charAt": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "Initials2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "Initials3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "StringAddition2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JEscapeChar2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JEscapeChar3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JStringEqual2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JCharAt2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "first_half": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "non_start": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "make_out_word": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "repeat_last_char": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "first_last_swap": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "end_characters": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "is_is_substring_or_ not_is_not_substring": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Boolean Expressions": {
                        "Examples": {
                            "booleans.phone_age": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.fail_course": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.rent_car": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.hot_dry": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "booleans.three_booleans": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JPhoneAge2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JFailCourse2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JFailCourse3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JRentCar2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JRentCar3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JBooleanDryHot2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JBooleanDryHot3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JBooleanDryHot4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JThreeBoolean2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JThreeBoolean3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "love6": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "is_special": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "check_start_end_character": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "squirrel_play": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "in_order": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "If-Else": {
                        "Examples": {
                            "ifelse.if_else_num": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.if_else_wage": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.if_else_if_grade": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.nested_if_temperature": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "ifelse.nested_if_min_max": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "ifElseOddEven": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JIfElseWages2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JIfElseIfGrade2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JNestedIfTemperature2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JNestedIfMaxOfThree": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "sortaSum": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "twoAsOne": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "greenTicket": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "without2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "in1To10": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "While Loops": {
                        "Examples": {
                            "while_loops.divisor": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.inputs": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.j_average": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.j_check_adjacent": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.j_digits": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while_loops.win_percentage": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JLargestDivisor": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInput2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInput3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInput4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAverageEvenNums": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAverageDouble": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAdjacentConsecutives": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAdjacentGreater": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSumDigits": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JReverseNumber": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWinPercentageInput": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWinPercentageWonEqual": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "while1_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while2_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while3_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while4_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "while5_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "smallest_integer": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "For Loops": {
                        "Examples": {
                            "for_loops.j_for_one": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for_loops.j_for_two": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for_loops.j_for_three": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for_loops.j_squares": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JForOne2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JForTwo2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JForThree2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWriteSquaresOdd": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JWriteSquaresRange": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "for1_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for2_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for3_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "for4_coding": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "sum_square_difference": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "largest_prime_factor": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "largest_palindrome_product": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Objects and Classes": {
                        "Examples": {
                            "objects.classes.point": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "objects.classes.tv": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "objects.classes.account": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "objects.classes.loan": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "PointTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "TVTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "Transactions2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "LoanTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "object_classes_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "object_classes_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "object_classes_3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "object_classes_4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Nested Loops": {
                        "Examples": {
                            "nested_for.star_patterns": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "nested_for.repeated_sequence": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JStars2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JRepeatedSequence2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "nested_loops_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "nested_loops_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "symmetrical_array": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Arrays": {
                        "Examples": {
                            "arrays.j_array_basic": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_fill": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_change": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_process_elements": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_min_max": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_temperature": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_array_rotate": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays.j_search_array": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JArrayBasic2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayBasic3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayFillUserInput": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArraySwapAdjacentElements": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JAverageArrayElements": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayMin": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JTemperatureListDaysAboveThreshold": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayRotateLeftTwice": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayRotateRight": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrayRotateRightTwice": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSearchArrayTotalCounts": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSearchArrayCountsEach": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "arrays_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays_3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "array_4": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "fixing_order_of_numbers": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Two-Dimensional Arrays": {
                        "Examples": {
                            "arrays2d.j_array2d_basic": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays2d.j_print_medals": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "arrays2d.j_soda_survery": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JArrays2dBasic2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JArrays2dBasic3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JPrintMedalsRowColumnTotal": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSodaSurverySodaAvg": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JSodaSurverySodaRespondentAvg": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "pcrs_2d_arrays_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "pcrs_2d_arrays_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "pcrs_2d_arrays_3": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Exception handling": {
                        "Examples": {
                            "exceptions.j_check_age": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "exceptions.j_check_producut_code": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JCheckAge2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JCheckProductCode2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {}
                    },
                    "File processing": {
                        "Examples": {
                            "files.j_work_hours": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "files.j_input_stat": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JWorkHours2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "JInputStat2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {}
                    },
                    "ArrayLists": {
                        "Examples": {
                            "arraylist.vocabulary": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "JVocabulary2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "array_lst_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    },
                    "Inheritance": {
                        "Examples": {
                            "inheritance.animals": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "inheritance.point": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Challenges": {
                            "AnimalTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "InheritancePointTester2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        },
                        "Coding": {
                            "inheritance_1": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } },
                            "inheritance_2": { "values": { "k": 0, "p": 0, "a": 0, "s": 0, "t": 0, "n": 0 } }
                        }
                    }
                }
            },
            "learnerIds": ["0"]
        }],
    "vis": {
        "topicSizeAttr": ["difficulty", "importance"],
        "color": { "binCount": 7, "value2color": "function (x) { var y = Math.log(x) * 0.25 + 1; return (y < 0 ? 0 : y); }" },
        "userManual": "",
        "ui": {
            "params": {
                "group": { "uiTBarModeGrpChk": false, "uiTBarVis": true, "uiTBarGrpVis": false, "uiTBarModeVis": false, "uiTBarResVis": false, "defValResId": "AVG", "uiTBarRepLvlVis": false, "uiTBarTopicSizeVis": false, "uiGridTimelineVis": false, "uiShowHelp": true },
                "user": {}
            }
        }
    },
    "configprops": {
        "agg_proactiverec_enabled": true,
        "agg_proactiverec_threshold": 0.7,
        "agg_proactiverec_method": "bng",
        "agg_proactiverec_max": 3,
        "agg_reactiverec_enabled": true,
        "agg_reactiverec_threshold": 0,
        "agg_reactiverec_method": "pgsc",
        "agg_reactiverec_max": 3,
        "agg_line_rec_enabled": false,
        "agg_kc_student_modeling": "naive"
    },
    "logs": [

    ],
    "ownBadges": [

    ],
    "rmcCount": {}

}