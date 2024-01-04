# Next.js

- Next is a React frontend development web framework
- Created by Vercel
- Enables to create Full Stack Web Applications by extending latest React features
- Enables functionality such as SSR (Server Side Rendering) and SSG (Static Site Generation)

# SSR

- Unlike a traditional SPA where the entire application is loaded and rendered on the client
- Next.js allows the first page load to be rendered by the server (Great for SEO & Performance)
- In CSR apps, if we View the Source Code we only see the basic HTML page with the root Div where we render our React/Angular/Vue code at later point of time using Javascript.
- This is bad for SEO because Search engine crawlers can't pick up our content
- Next.js Solves this issue by rendering our first page server side

# Next.js Benefits

- SSR (SEO & Performance)
- Easy page routing
- API Routes
- Out of the box Typescript & Sass
- Static Site Generation
- Easy Deployment

# React Server Components vs Client Components

- NextJS 13 uses a new feature called React Server Components (RSC).
- This allows us to render components on the server.
- Advantages of RSC:
  - Load faster - don't have to wait for the Javascript to load
  - Smaller client bundle size
  - SEO friendly
  - Access to resources the client can't access
  - Hide sensitive data from client
  - More secure against XSS attacks
  - Improved Developer experience
- Disadvantages:
  - Not as interactive
  - No component state, we cannot use the "useState" hook
  - No component lifecycle methods, we cannot use "useEffect" hook
- If we want to use a component as Client Component we have declare "use client" on top of the component file
