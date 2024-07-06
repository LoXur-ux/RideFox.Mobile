# ECHO "------------------ REMOVE NODE_MODULES ------------------"
# rm ./node_modules -r -force
# yarn
cd android
ECHO "------------------------- CLEAN -------------------------"
./gradlew clean
ECHO "--------------------- assembleDebug ----------------------"
./gradlew assembleDebug
cd ../