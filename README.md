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

# For loading effect

- We simply create the laoding.js page (in which we can have our laoding component)
- Because these are Server Components no need of useState, useEffect like we normally do in Client Components

# Suspense Boundaries

- If we have multiple fetches in a page and don't want to wait for all the asynchronous events to resolve before we actually see the page we can use React <Suspense />
- Wrap the parts of the code/components with Suspense and fallback loader

# Caching and Re-validating

- By default in the production build "fetch" will cache everything, this is great for performance but it can cause issues if the data changes often.
- We can add revalidate to all of our fetch calls and mention the seconds after which we want data to refresh.

# API Route Handlers

- Allows us to create custom request handlers for a given route
- Instead of having like a backend Express API, we can keep it within our next-app
