interface User {
  name: string;
  email: string;
  username: string;
  city: string;
}

async function obtenerUsuarios(): Promise<void> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  console.log(data[0]);

  const users: User[] = data.map((user: any): User => ({
    name: user.name,
    email: user.email,
    username: user.username,
    city: user.address.city,
  }));

  console.log(users);
}

obtenerUsuarios();

function App() {
  return (
    <div>
      <h1>Consumiendo una API con fetch</h1>
    </div>
  );
}

export default App;
