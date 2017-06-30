:: Your directory path.
set triggerPath=C:\node-scripts
:: The app folder 
set appPath=%triggerPath%\trigger
:: Your project name. It will used to create folder.
set projName=SSC
set repo=%1
set rev=%2

cd %triggerPath%

if not exist %triggerPath%\%projName% mkdir %projName%

:: Export the revision commit path to text file after commit success.
svnlook changed -r %rev% %repo%>%projName%\%rev%.txt

cd %appPath%

path C:\Program Files\nodejs

node app.js build -p %triggerPath%\%projName%\%rev%.txt