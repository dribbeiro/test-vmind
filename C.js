// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

class Checkbox extends React.Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            checked: props.checked
        }
    }

    checkboxOnCheck() {
        const {id, checked} = this.state
        this.setState({ checked: !checked });
    }

    render() {
        const {id, checked} = this.state
        
        return (
            <div className="checkbox-wrapper">
                <span>checkbox {id}</span>

                <input 
                    value={checked} 
                    onChange={this.checkboxOnCheck()}
                    type="checkbox"
                    />
            </div>
        )
    }
}

class BigForm extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: [false, false, false],
            checkboxes: [0, 1, 2]
        };
    }

    render() {
        const {checked, checkboxes} = this.state
        
        return (
            <div className="form">
                <span>Checked boxes: {checked}</span>
                {checkboxes.map(id => 
                    <Checkbox key={id} id={id}/>
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <BigForm />,
    document.getElementById('container')
);