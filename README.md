<h2>🏆 Competition results 🏆</h2>
We have been placed top 6 in the Junior Category of the QuickHack out of 200 total participants. Unfortunately we did not manage to get top 3, which I believe are due to a variety of reasons stated below.<br>
<br>
🙍 We did not do enough research on how to execute our idea with regards to collecting data for ML <br>
😔 We were too tired trying to setup the backend of the project and did not give much thought to the actual final pitch presentation<br>
😭 We did not understand the competition requirements well leading to us losing quite a lot of marks<br>

But hey, top 6 is pretty good 😄 ~

<h2>🎉 QuickPark v1.0 🎉</h2>
We are proud to announce that we have made a lot of frontend and backend changes throughout these few short days. Regardless if we win or lose, it is a project that we are proud of. We will be categorizing both frontend and backend changes below. 

<h3>🖥️ UI/UX Improvements</h3>
🌹 Added new and improved sign up and sign in page <br>
🌻 Added skeleton loading when retrieving data from servers <br>
🌺 Better Reservation History selection screen <br>
🌼 More meaningful error messages instead of <b>"Oops, something went wrong!"</b> <br>

<h3>⚙️ Functionality Improvements</h3>
🍀 A solid backend that allows you to actually sign in and sign up via authentication and verification <br>
🍁 Unique booking history corresponding to logged in user <br>
🍂 Able to book parking spots according to availability and user input<br>
🌱 Able to check into parking space according to QR Code <br>
🌵 Dynamic pricing shown during booking <br>
<hr>

<h1>QuickPark Website Viewing Info</h1>
Welcome, to start off, we are currently hosting the webpage on GitHub Pages, here https://quickpark-monash.github.io/quickpark-monash-mobile/ Before you navigate the website, we need you to do some adjustments to your desktop internet browser. If you are currently on your mobile phone, please skip to <a href="https://github.com/QuickPark-Monash/quickpark-monash-mobile#viewing-on-your-mobile-device">this section</a>. <br>
<b>THE BEST WEB APP EXPERIENCE IS THROUGH YOUR MOBILE DEVICES BROWSER!</b>

<h3>Viewing on your desktop internet browser</h3> 
<h4>Step 1: Opening Google Chrome Developer Tools</h4>
Press <code>Option + ⌘ + J</code> on Mac products, or <code>Shift + CTRL + J</code> on Windows to open up the Google Chrome <code>Developer Tools</code>. You should see something like below.

&nbsp;

<p align=center><img src="https://user-images.githubusercontent.com/63769232/145387667-18a9bf31-4138-4160-8e04-98e6793319a5.png"></p>

<hr>

<h4>Step 2: Changing your device size</h4>
Now, on the top left corner, you should see a <code>tablet and phone icon</code>. Clicking this icon will allow you to change the size of your screen as if you were viewing the website on that particular device. When <code>toggled</code>, you should see the icon glow in blue like so. Your screen will shrink, but that shouldn't stop you from continue reading.<br>

&nbsp;

<p align=center><img src="https://user-images.githubusercontent.com/63769232/145388232-53120a06-fb2c-495f-a941-81469df3e917.png"></p>

<hr>

<h4>Step 3: Adjusting the correct phone model</h4>
The webpage built is currently adjusted to look good on <b>most *cough*</b> of the mobile devices in the selection option. It started off with the <code>iPhone X model</code>, but was soon responsive enough to handle different <code>android and iPhone models</code> as well. You should see something like so. Then, you can click on the dropdown menu right by the phone model to change it. Make sure to set it to <code>iPhone X</code>.<br>

&nbsp;

<p align=center><img src="https://user-images.githubusercontent.com/63769232/145395423-221c4e03-6e79-43d3-a3a7-8e25697efecb.png"></p>

<hr>

<!-- <p align="center"><img src="https://user-images.githubusercontent.com/63769232/145386908-3be43c98-15f0-4050-94b4-732cb39d9f12.png"></p> -->

<h4>Step 5: Visting the webpage</h4>
Click on the link above and enjoy the webpage! Details about the webpage will be further down the section. 

<h3>Viewing on your mobile device</h3> 
If you are currently, on your mobile device, good! We tested that the best app experience is by using your mobile phone. For your convenience, scan the QR Code below to directly navigate to our website. You may also use the initial link on your mobile browser. Since not much testing as been done, we cannot guarantee absolute responsiveness for every device. If positioning seems out of place, remember to view the website through your browser using the steps above. 

<p align=center><img src="https://user-images.githubusercontent.com/63769232/145398637-ff67dcaf-bc76-42c3-9ca4-33e7e164207c.png"></p>


<h3>Cloning the repository</h3>
If you've chosen to look at how the insides of our web application works, the process is fairly simple. <br><br>
1. Run <code>npm install -g @angular/cli</code> to install Angular on your local device using your terminal.<br>
2. Next, run <code>git clone https://github.com/QuickPark-Monash/quickpark-monash-mobile.git</code> to download the files to a directory.<br>
3. Then, run <code>npm install</code> to install all the required dependencies.<br>
4. Run <code>ng serve</code> to host your Angular project locally, make sure you're in the project directory<br>
5. By default, the webpage should load at <code>localhost:4200</code>, follow the steps above to change your Google Chrome device size for optimal surfing. 

<h3>Trying out the QR scanner page</h3>
This is an example of a QR code that will lead to a valid scan.

<center>
    <table>
        <tr style="align: center"> 
            <td> <p align=center><img src="https://user-images.githubusercontent.com/44129179/146675721-6238bc24-aedf-4520-9566-a7f07618b307.png"> </td>
            <td>&nbsp; &nbsp; &nbsp; ➜ &nbsp; &nbsp; </td>
            <td> <img src="https://user-images.githubusercontent.com/44129179/146675753-60e6904d-44e1-4c41-8e28-e552ff6457b3.png" width="96"> </td>
        </tr>
    </table>
</center>

Any other forms of invalid QR code that our backend does not handle will give you an invalid error pop-up window.


<!-- to start off, run npm install on these few stuff:
npm i angular 
npm i @zxing/library --force
npm i @zxing/browser --force
npm i @zxing/ngx-scanner --force
npm install vega
npm install vega-lite
npm install vega-embed -->





