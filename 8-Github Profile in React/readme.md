 # useFetch Hook = Custom Hook

## Overview
`useFetch` is a custom React hook that fetches a list of GitHub user profiles from the GitHub API. It provides functionality to generate random profiles and manage state efficiently.

## Features
- Fetches a list of GitHub user profiles using the GitHub API.
- Generates random profiles with a default count of 20.
- Manages state for profiles and allows dynamic updates.
- Provides a function to trigger profile fetching manually.

## Installation
No installation is required as it is a standalone hook. However, ensure you have React installed in your project.

## Usage
Import and use the `useFetch` hook in your React component:


## Hook API
### `useFetch()`
Returns an object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `generateProfile(count)` | `function` | Fetches a new set of GitHub profiles. Default count is 20. |
| `Profile` | `array` | Stores the fetched GitHub profiles. |
| `nuofprofile` | `string` | Stores the number of profiles (currently unused). |
| `setnuofprofile` | `function` | Updates the number of profiles (currently unused). |

## Notes
- The GitHub API has rate limits; excessive requests may be blocked.
- The `generateProfile` function fetches a random set of users each time.
- The `nuofprofile` state is declared but not used in the current implementation.

###############################################################
 
 "https://api.github.com/users?per_page=10"
  https://api.github.com/users/taylorotwell
 `https://api.github.com/users?since=6000&per_page=20`

 jsx ke under javascript use krne ke liye { } lgane pdhte h

 <!-- custom Hook -->
 <!-- logical part  =>  useFtech-->
 <!-- return{} -->