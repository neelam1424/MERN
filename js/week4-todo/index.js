import express from 'express'

const app = express();
app.use(express.json());

let todos =[];


app.get('/',(res,req)=>{
    res.json(todos);
})

app.post('/', (req, res) => {
    //create random id for todo
     //extract the todos title from the body
     const title=req.body.title;
     const id= Date.now().toString();

     const todo={id,title};
     todos.push(todo);
     res.status(200).json(todo);

    })

    app.delete('/:id',(res,req)=>{
        //extract the todo id
        //remove the todo from here
        const id=req.params.id;
        todos=todos.filter(todo=>todo.id !== id);
        res.json({message:'Todo Delted'});
    });



app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})