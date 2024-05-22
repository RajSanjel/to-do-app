import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ListToDoProps = {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
};

const items = [
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum hipsum lipsum",
    isCompleted: false,
  },
  { id: 2, title: "test", desc: "testing testing testing", isCompleted: false },
  {
    id: 3,
    title: "test3",
    desc: "testing3 testing testing",
    isCompleted: true,
  },
];
export function ListToDo() {
  return (
    <>
      <hr className="m-3" />
      <h1 className="font-bold text-lg m-4">To DOs</h1>
      {items.map((item) => (
        <ToDos
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          isCompleted={item.isCompleted}
        />
      ))}
    </>
  );
}

function ToDos({ id, title, desc, isCompleted }: ListToDoProps) {
  return (
    <Card className={`m-3 shadow-xl`}>
      <CardHeader>
        <CardTitle className="text-lg">{`${id}. ${title}`}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        {isCompleted ? (
            <span className="text-green-500 font-bold text-sm">
                ✓ Completed
            </span>
        ) : (
          <>
            <Button className="bg-red-600 hover:bg-red-500 ">
              Delete
            </Button>
            <Button className="mx-3 text-sm">Edit</Button>
            <Button className="bg-green-700">Mark as Completed</Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
