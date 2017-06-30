:: Your directory path.
cd C:\node-scripts

set repo=%1
set rev=%2

:: Your project name. It will used to create folder.
set projName=SSC

:: Export the revision commit path to text file after commit success.
svnlook changed -r %rev% %repo%>%projName%\%rev%.txt

path C:\Program Files\nodejs

node trigger.js