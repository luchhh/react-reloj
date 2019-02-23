class ManecillaDigitos extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className="circulo">{this.props.digitos}</div>
    }
}