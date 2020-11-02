# react-top-nav
A configurable, top displayed navigation menu bar.


## Setup
Copy the TopNav.js and TopNav.css to location of your choice.  Modify the TopNav.css import path in TopNav.js if locating the TopNav.css in a different directory than TopNav.js.

Update menuConfig per your menu requirements.  You can also remove the `const menuConfig` and import your menu from an external module.

<br/>

## Setup with AWS Amplify
If you are using AWS Amplify + Cognito for authentication and authorization, you can use the `AmplifyTopNav.js` in liue of the `TopNav.js`

<br/>

## Menu configuration
 Each item must be of one of the following types:
   | type | description |
   | --- | --- |
   | button | trigger navigation when clicked |
   | functionButton | trigger a function/onClick when clicked - this is a basic button, and you provide the onClick function in your code |
   | dropdown | contain a dropdown menu with one or more items |

   <br/>
 
 ### button type should be in the following json format:
  ```javascript
  {
    name: 'name-goes-here',
    type: 'button',
    auth: [false|auth_object], // see below for details on auth_object
    link: { to: 'your_desired_path', text: 'link_text' }
  }
  ```

   <br/>
 
 ### functionButton type should be in the following json format:
 ```javascript
  {
    name: 'name-goes-here',
    type: 'functionButton'
  }
  ```

   <br/>
 
 ### dropdown type should be in the following json format:
 ```javascript
  {
    name: 'name-which-appears-on-the-top-level-of-menu-goes-here',
    type: 'dropdown',
    auth: [false|auth_object], // see below for details on auth_object
    items: [
      { to: 'your_desired_path_1', text: 'link_text_1' }, // <-- each item represents a reach-router link
      { to: 'your_desired_path_2', text: 'link_text_2' }
    ]
  }
  ```
 