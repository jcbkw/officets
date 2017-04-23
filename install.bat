cls
@echo off

echo.
echo About to install the required build tools...
echo.
echo Type "exit" then press "ENTER" on each new window that opens
echo after it completes in order to continue to the next install.

pause

start "installing grunt" /wait npm install -g grunt
start "installing grunt cli" /wait npm install -g grunt-cli

start "installing typescript" /wait npm install -g typescript
start "installing typedoc" /wait npm install -g typedoc

start "installing project dependencies" /wait npm install

echo.
echo Done

pause