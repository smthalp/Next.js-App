export default function Home() {
  return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
          <h1>Building This Web Page</h1>
          <h2>1. Installation</h2>
          <p>
              I installed Next.js using the command:
              <code style={{ backgroundColor: 'red', padding: '2px 4px', borderRadius: '4px' }}>
                  npx create-next-app@latest
              </code>. 
              Then I navigated into the project directory and started the development server using 
              <code> npm run dev</code>.
          </p>
          <h2>2. Development</h2>
          <p>
              I replaced the default content of the `page.tsx` file with a simple React component 
              that explains the installation, development, and challenges.
          </p>
          <h2>3. Challenges and Solutions</h2>
          <ul>
              <li>
                  <strong>Challenge:</strong> Understanding the file-based routing in Next.js.
                  <br />
                  <strong>Solution:</strong> I read the official documentation and learned that each file in 
                  the <code>pages</code> directory corresponds to a route.
              </li>
              <li>
                  <strong>Challenge:</strong> Hosting the app on Vercel.
                  <br />
                  <strong>Solution:</strong> I linked my GitHub repository to Vercel and deployed it directly.
              </li>
          </ul>
      </div>
  );
}
