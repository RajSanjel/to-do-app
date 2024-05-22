import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";


export function AddToDo() {
    return <>
    <h1 className="font-bold text-xl my-4">Add To Do</h1>
    <label htmlFor="title">
        Title
    <Input placeholder="Title" className="my-2" id="title" />
    </label>
    <label htmlFor="desc">
        Description
    <Textarea placeholder="Describe your to-do" className="my-3" id="desc" />
    </label>
    <Button>Add To Do</Button>

    </>
}
