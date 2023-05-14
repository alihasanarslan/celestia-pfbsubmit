Zionalc#1253

My UI : http://142.93.109.207:6070



![CELESTİA UIIII](https://github.com/alihasanarslan/celestia-pfbsubmit/assets/73365938/e7964669-3ecc-4fe7-9e36-7aca6acc2813)


Install the UI on VPS 


apt install screen 

curl http://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt install git nodejs -y

apt install npm

npm install child_process

npm install express
git clone https://github.com/alihasanarslan/celestia-pfbsubmit.git
cd celestia-pfbsubmit

screen -S pfb
node main.js
