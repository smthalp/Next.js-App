export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          color: '#d32f2f',
          fontSize: '2.5rem',
          marginBottom: '20px',
        }}
      >
        Building This Web Page
      </h1>

      <h2
        style={{
          color: '#388e3c',
          fontSize: '2rem',
          marginBottom: '10px',
        }}
      >
        1. Installation
      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        First I installed Node.js using the following commands in the terminal:
        <code
          style={{
            backgroundColor: '#e57373',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
        >
          # installs fnm (Fast Node Manager)
          winget install Schniz.fnm
          # configure fnm environment
          fnm env --use-on-cd | Out-String | Invoke-Expression
          # download and install Node.js
          fnm use --install-if-missing 22
          # verifies the right Node.js version is in the environment
          node -v # should print `v22.12.0`
          # verifies the right npm version is in the environment
          npm -v # should print `10.9.0`
        </code>
        . Then I created a Next.js project using the following commands in the terminal:
        <code
          style={{
            backgroundColor: '#e57373',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
        >
          npx create-next-app@latest web-dev-doc

        </code>
        . Then I navigated into the project directory web-dev-doc and started the development server using
        <code
          style={{
            backgroundColor: '#e57373',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
          > 
          npm run dev
          </code>.
          This started to run the server on my localhost.
      </p>

      <h2
        style={{
          color: '#388e3c',
          fontSize: '2rem',
          marginBottom: '10px',
        }}
      >
        2. Development
      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        I replaced the default content of the <code>page.tsx</code> file with a simple React component
        that explains the installation, development, and challenges.
        To monitor changes as I developed the webpage, I opened my browser to http://localhost:3000, which displayed the website hosted on my local server.
      </p>

      <h2
        style={{
          color: '#388e3c',
          fontSize: '2rem',
          marginBottom: '10px',
        }}
      >
        3. Challenges and Solutions
      </h2>
      <ul
        style={{
          listStyleType: 'none',
          padding: '0',
          fontSize: '1.1rem',
        }}
      >
        <li style={{ marginBottom: '15px' }}>
          <strong>Challenge:</strong> Understanding the file-based routing in Next.js.
          <br />
          <strong>Solution:</strong> I read the official documentation and learned that each file in
          the <code>pages</code> directory corresponds to a route.
        </li>
        <li>
          <strong>Challenge:</strong> Hosting the app on Vercel.
          <br />
          <strong>Solution:</strong> I linked my GitHub repository to Vercel and deployed it directly through the Vercel website.
        </li>
      </ul>
      <div
        style={{
          marginTop: '50px',
          fontSize: '1.2rem',
          color: '#b71c1c',
        }}
      >
      </div>
    </div>
  );
}
