# terminal-leave-calculator
Repository to create military separation/retirement date calculator 
(Easier to read in RAW format)

Goal: To offer a free javascript-web based “Terminal Leave” calculator hosted on the BLUF Mil Benefits website within the “Separation & Retirement” page. 

Background: Once a military member decides to separate or retire from duty, it can be one of the most stressful and challenging events in their lives. 
One of those challenges is to properly calculate when they should/can start their Terminal Leave.  
Terminal Leave includes any leave they have built up + Permissive TDY time that they have for transition time + 2.5 additional leave days earned per month on terminal. 
Currently there is no open easily accessible resource for a military member to calculate their terminal leave. The math and calculation is fairly basic but cumbersome.    
It should be something that the member strategically plans out 1-2 years out from separating/retiring. 
If done incorrectly, they could lose out on valuable earned leave days.

Example Calculation:
The member plans to retire right at 20 years to qualify for the pension.
Their enlistment or commissioning date was May 15, 2010.
Their earliest retirement date is the 1st of the following month at 20 years: June 1, 2030.
They bank up the traditional max 60 days of leave by the previous fiscal year (FY) from which they plan to separate which ends Sept 30th, 2029. 
They can then start accruing past 60 days during the new fiscal year starting Oct 1st, 2029.
8 months (Oct-May) of the new fiscal year 2030 leave = 20 days
They are retiring and stationed CONUS and so plan to use 20 days of PTDY. 
(Retiring OCONUS gets 30 days, involuntarily separating members get 10 days, voluntary separation get nothing 0)
20 PTDY + 60 FY'29 Leave + 20 FY'30 Leave = 100 days 
Now work backwards from the date intended to separate/retire from starting and including May 31st 2030: 
100 - 31(May) - 30 (April) - 31 (March) = 8 days left to subtract in February 2030
The earliest they can start Terminal PTDY and Leave is February 21, 2030

Tool Requirements:
Code: Javascript for webpage integration
Pull in calendar for date calculation

Necessary Inputs from the member:
What is your situation? (1) I plan to retire (2) I plan to separate (3) I am being honorably involuntarily separated
(1) If plan to retire
-- When do you plan to retire? 
--- Enter date (01/MM/YYYY) *Note for user* Retirement date must be the first day of the month
     [or] 
--- Calculate 20 years in for me: Enter your enlistment or commissioning date (DD/MM/YYYY)
---- Code will have to add 20 years and then (if did not enter on the 1st day of the month) round up to the 1st day of the new month after
-- At the time of retirement, will you be CONUS or OCONUS? (CONUS will add 20 days, OCONUS will add 30 days)
-- How many days of leave do you plan to have built up?
--- Enter number of days [xxx Days]
---- Calculation must include the 2.5 days a month earned while on terminal leave
[or]
--- Calculate assuming the standard max for me.
---- *Note for user but also for calculation* 60 days for fiscal year previous to retirement date (Fiscal year is Oct 1 – Sep 30th)
---- *Note for user but also for calculation* + 2.5 days per month in new fiscal year while on active AND terminal leave time (this is important since it includes the 2.5 days earned for every month on terminal leave)
Final Output Message: “With a final retirement date of (01/MM/YYYY), you should start terminal leave on (DD/MM/YYYY). This assumes xx days of PTDY and xxx days of terminal leave, including the leave earned while on terminal leave.”

(2) If plan to separate
-- When do you plan to separate? 
--- Enter date (DD/MM/YYYY)
-- How many days of leave do you plan to have built up?
--- Enter number of days [xxx Days]
---- Calculation must include the 2.5 days a month earned while on terminal leave
[or]
--- Calculate assuming the standard max for me.
---- *Note for user but also for calculation* 60 days for fiscal year previous to retirement date (Fiscal year is Oct 1 – Sep 30th)
---- *Note for user but also for calculation* + 2.5 days per month in new fiscal year while on active AND terminal leave time (this is important since it includes the 2.5 days earned for every month on terminal leave)
Final Output Message: “With a final separation date of (XX/MM/YYYY), you should start terminal leave on (DD/MM/YYYY). This assumes xxx days of terminal leave, including the leave earned while on terminal leave.”

(3) If being involuntairly separated (Honorable)
-- When do you plan to separate? 
--- Enter date (XX/MM/YYYY) 
-- How many days of leave do you plan to have built up?
--- Enter number of days [xxx Days]
[or]
--- Calculate assuming the standard max for me.
---- *Note for user but also for calculation* 60 days for fiscal year previous to retirement date (Fiscal year is Oct 1 – Sep 30th)
---- *Note for user but also for calculation* + 2.5 days per month in new fiscal year while on active AND terminal leave time (this is important since it includes the 2.5 days earned for every month on terminal leave)
---- As an involuntary separatee, you can receive up to 30 days of extra leave or 10 days of PTDY for transitional assistance. Do you plan to use either? (Yes, 30 days extra of leave) (Yes, 10 days of PTDY) (No)
Final Output Message: “With a final separation date of (XX/MM/YYYY), you should start terminal leave on (DD/MM/YYYY). This assumes xx days of PTDY and xxx days of terminal leave, including the leave earned while on terminal leave.”
