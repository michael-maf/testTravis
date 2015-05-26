Testing environment for Windows.

-selenium standalone server 2.45.0
-nightwatch
-selenium webdriver

to run on windows: from /nightwatch, node nightwatch.js -t tests/webdriver_test.js (or any other test you prefer)
chrome and IE drivers must be added to PATH before running webdriver

default test path: nightwatch/my_tests/tests

chrome tests can start out really slow on 64-bit machines.

also read IE fix note.

-Michael

FIXED:
-use IE 32 bit driver for phenomenal increase in speed
-batch file to run selenium-server-standalone-2.45.0.jar
-can now include the -e default,chrome,ie argument in command line
