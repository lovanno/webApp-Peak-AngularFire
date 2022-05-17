# Peak (Work in Progress)   
#### Make fun plans based on your location and explore different ways to enjoy your life

![displayImg!](src/assets/peakProgress.png)

**Stack:** *Angular (SASS) and Firestore*

#### **Objective 📈:** **Create an exciting web application that scales and pushes your creativity**

**Requirements** 🚦

• *Must create 3 major feature sections that continuously builds on top of its own foundation*

• *Must have authenticated users with specific privileges and a followers feed feature*

• *Must have secure firestore/firebase rules and must manage data effectively (caching api calls between pages, filtering data through rxjs and use subjects, etc)*



&nbsp;

# Roadmap 📜

## Explore Hub 1 🌌

*Filtering Data*

&emsp; &emsp;• Filter events based on price

&emsp; &emsp;• Filter between individual activities or compound activities

&emsp; &emsp;• Filter by generalized or personalized plans/events

&emsp; &emsp;• Filter by outdoors or indoor activities

&emsp; &emsp;• Filter by time of year (winter vs summer)



## Nearby Hub 2 🌌

*Show a Data visualization of how busy each place gets*

*Display different location icons on the map. (Don’t display info unless tapped)*

*Allow users to change the map style*/

*Allow users to check in to places + track how often a user has visited a place*

*Get commute estimates based on your location*

*Check the distance and est time between different locations*

*Add a UI menu at the bottom of the map view to see:*

&emsp; &emsp;• What's closest to someone (refreshes as you move over the map)

&emsp; &emsp;• Or view your only favorite places

*Random place spinner. Randomly select a place to visit. You can also use this feature with your favorites*



## Profile Hub 3 🌌

*Save plan ideas in your “future fun” profile section*

*See how often you visited a place* 

*See places you recently visited*

*Choose your preferences and set a budget*/

*Add upcoming activities section. This will show plans near you*

*Allow someone to sign up for activities. Put them in a section for them to see. Maybe personal page*

&emsp; &emsp;

# Current Problems 😎

### Major - None

### Minor

• **(Apr 21, 2022): simplified comp and fixed out of sync city issue  commit: 116aab1e6ca1b9a2ad03f6a1071ede2f3e25c3d9**

&emsp; &emsp;When breaking down the logic in the nearby comp, I had a lot of trouble updating the map and displaying images from the user's selection. 
I tried using multiple variations of input/output functions and using NgOnChanges but these attempts didn't work because I needed
to use a setter to make API calls from new input values. This was the drawback with input/output.

> Allowing API calls through inputed values
  @Input sent(value: any) {
     if (value !== undefined || '') {
       this._apiResponse = value.toLowerCase(); 
      }
  }
  
🔑*Allow inefficiencies to guide you. Realizing this, fixed everything. The user selection should've been in the parent (view map) because it controls everything. If I want to see new city activities, I'd toggle the user selection. This structure change allowed the city data to stay in sync and allow me to update the explore page in future.

&nbsp;

