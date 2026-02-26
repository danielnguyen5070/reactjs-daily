import "./ui-1.scss";

const MOCK_DATA: User[] = [
  {
    id: 1,
    name: "Joe Doe",
    email: "joe.doe@gmail.com",
    status: "normal",
  },
  {
    id: 2,
    name: "Maria Ron",
    email: "maria.ron@gmail.com",
    status: "idle",
  },
  {
    id: 3,
    name: "James Smith",
    status: "deleted",
  },
]

type Status = "normal" | "idle" | "deleted";

type User = {
  id: number,
  name: string,
  email?: string,
  status: Status
}

type UserProps = {
  data: User;
};

export function User(props: UserProps) {
  const { data } = props;

  return (
    <div className={`user ${!data.email && "user--no-email"}`}>
      <span className={`status status--${data.status}`} />
      <div className="name">{data.name}</div>
      {data.email && <div className="email">{data.email}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {MOCK_DATA.map((data) => {
        return <User key={data.id} data={data} />;
      })}
    </div>
  );
}

export default App;
