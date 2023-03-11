
#  Proctor Vision Chrome Extension - README

![Logo](https://res.cloudinary.com/dt9ckenyh/image/upload/v1678423049/my-images/icon3_zkbhum.png)



## About

Proctor Vision Chrome Extension is a tool that prevents cheating during online assessments. With audio and video checks and image proctoring, it ensures the integrity of online tests and provides a seamless user experience.


    
## Installation

- Download the Proctor Vision Chrome Extension zip file from the GitHub repository.
- Extract the contents of the zip file to a folder on your computer.
- Open the Chrome browser and type `chrome://extensions/` in the address bar.
- Enable Developer mode by clicking the toggle switch in the top right corner of the page.
- Click the `Load unpacked` button in the top left corner of the page.
- Select the folder where you extracted the extension files in step 2.
- The Proctor Vision Chrome Extension will be added to your browser and ready to use on supported online assessment websites.
- Please Ensure that backend is setted up on `localhost:3000`


## Features

### Frontend (Chrome Extension)
<details>
<summary> Detect Multiple tabs</summary>

![Logo](https://github.com/om-mapari/proctor-vision-extension/blob/master/gifs%20images/multitabs.gif)
</details>
<details>

<summary> Allows users to input their details through a form with test Test invitation code</summary>

![Logo](https://github.com/om-mapari/proctor-vision-extension/blob/master/gifs%20images/login.gif)
</details>

- Form Auto-fills for next online test with the details stored in local storage.
- Upon clicking the "Start Test" button, the user's information saved to the backend server.
- The extension performs audio and video requirement checks.
- Displays the candidate's live webcam feed on the page.
- Sends images of the user from the browser to the server at configurable intervals.

### Backend [Proctor Vision Backend API Reference](https://github.com/om-mapari/proctor-vision-backend)
- A backend API to store all user information and images.
- Images are stored in on cloud data storage `cloudinary storage`
- Images are stored along with timestamps.
- Handle Set Interval Route


### Admin Dashboard
<details>
<summary> A Set Interval Button to Set the interval of the frames (in minutes).</summary>

![Logo](https://github.com/om-mapari/proctor-vision-extension/blob/master/gifs%20images/intervalSet.gif)
</details>

<details>
<summary> An admin dashboard displaying all the user information </summary>

![Logo](https://github.com/om-mapari/proctor-vision-extension/blob/master/gifs%20images/dashboard-op.gif)
</details>


- It also displays images along with there timestamps

## Architecture
![My image](https://res.cloudinary.com/dt9ckenyh/image/upload/v1678415195/my-images/Proctor_Vision_qkmqap.png)


## Technologies Used
- Workflow and Architecture Design
    * [Excalidraw](https://excalidraw.com/)
- Prototyping and Frontend Design
    * Figma
- Frontend
    * HTML
    * CSS
    * JS
- Backend
    * Node.js (Express.js)
    * MongoDB
    * cloudinary storage

## 🚀 About Me
I'm a full stack developer...
I'm a final-year IT undergraduate student. I love solving problems related to Data Structure and Algorithms. I've solved 600+ coding questions(in C++) on various coding platforms like Leetcode, GFG, Codestudio, etc. I'm confident in computer science fundamentals and mostly interested in the backend part, and working more on it. I have my hands on Web development as well. I love React🔯. I'm looking for Software Development Intern and full-time roles and am ready to self-learn other necessary skills and coursework in advance if needed.

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/om-mapari/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/coder_om)
[![LeetCode user om-mapari](https://img.shields.io/badge/dynamic/json?style=flat-square&labelColor=black&color=%23ffa116&label=Leetcode%20Solved&query=solved&url=https%3A%2F%2Fleetcode-badge.vercel.app%2Fapi%2Fusers%2Fom-mapari&logo=leetcode&logoColor=yellow)](https://leetcode.com/om-mapari/)
## Authors

- [@om-mapari](https://www.github.com/om-mapari)


## Contributing

Contributions are always welcome!

contect me on `linkedin` for ways to get started.
