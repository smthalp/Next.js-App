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
          color: '#d32f2f', // Christmas red
          fontSize: '2.5rem',
          marginBottom: '20px',
        }}
      >
        Building This Web Page
      </h1>

      <h2
        style={{
          color: '#388e3c', // Christmas green
          fontSize: '2rem',
          marginBottom: '10px',
        }}
      >
        1. Installation
      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
        I installed Next.js using the command:
        <code
          style={{
            backgroundColor: '#e57373', // Light red for contrast
            padding: '2px 4px',
            borderRadius: '4px',
          }}
        >
          npx create-next-app@latest
        </code>
        . Then I navigated into the project directory and started the development server using
        <code> npm run dev</code>.
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
          <strong>Challenge:</strong> Installing Node.js.
          <br />
          <strong>Solution:</strong> I read the official documentation and learned that each file in
          the <code>pages</code> directory corresponds to a route.
        </li>
        <li style={{ marginBottom: '15px' }}>
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

      {/* Adding a little Christmas decoration */}
      <div
        style={{
          marginTop: '50px',
          fontSize: '1.2rem',
          color: '#b71c1c', // Christmas red
        }}
      >
      </div>
    </div>
  );
}
