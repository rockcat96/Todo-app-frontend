import { useLoaderData, Form } from "react-router-dom"
import Post from "../components/Post"

const Index = (props) => {
    const todos = useLoaderData()
    return <>
    <div style ={{textAlign: "center"}}>
        <h2>Create a Todo</h2>
        <Form action="/create" method="post">
            <input type="text" name="subject" placeholder="subject"/>
            <input type="text" name="details" placeholder="details"/>
            <button>Create New Todo</button>
        </Form>
    </div>
    {todos.map((post) => <Post post={post} key={post.id}/>)}</>
}

export default Index