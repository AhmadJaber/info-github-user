### info-github-user

A app with detailed information of a github user with fusion-charts, Auth0, styled-components, react-router-dom. Main
purpose of this app is to try & get very good at using `fusion-chart`, `Auth0`, `css-grid`. Read below the preview to know about the technology i used in this app.

![Preview](app-preview.png?raw=true)

### Technologies

##### React

[react-docs](https://reactjs.org/docs/getting-started.html)

###### Styled-Components

[Styled-Components-docs](https://styled-components.com/)

```jsx
// component.js - for styled-component
import styled from "styled-components/macro"
export const Wrapper = styled.htmlElement`
write your styles here
`

// component-folder index.js
import React from 'react';
import { Wrapper } from './component.js';

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from "react-icons/fi";
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

##### React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

##### Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/ahmadjaber)
- [Repos](https://api.github.com/users/ahmadjaber/repos?per_page=100)
- [Followers](https://api.github.com/users/ahmadjaber/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

##### Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

##### Auth0

**Third party tool which provides authentication & authorization services to applications. It has extremely straight forward api & well documented.**

- [Auth0 - Main Docs](https://auth0.com/docs/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs (where auth0 will redirect after the user authentication).
  - Allowed Logout URLs (where auth0 can return to after the user logged-out).
  - Allowed Web Origins (we have to register application URL sothat the app can silently refresh the authentication tokens)
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  database (email, password)

## _how to get google auth credentials cient id and client secret_

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

##### Deployment

[Netlify](https://www.netlify.com/)

##### Idea & inspiration

[John Smilga](https://github.com/john-smilga)
