import React, {Component} from 'react'

export default class TodoForm extends Component {

    state = {
        title: '',
        content: ''
    }

    componentDidMount(){
        if(this.props.id){
            this.setState({
                title: this.props.title,
                content: this.props.content,
                id: this.props.id
            })
        }
    }
    

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.todoAction(this.state)
        this.setState({
           title: '',
           content: ''
        })
        return this.props.closeForm ? this.props.closeForm(false) : null
    }

    
    render(){
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <h2>Add New Todo</h2>
                <label>Title</label>
                <input name="title" value={this.state.title} onChange={this.handleChange}/>
                <label>Content</label>
                <input name="content" value={this.state.content} onChange={this.handleChange}/>
                <input type="submit" />
            </form>
        )
    }
}