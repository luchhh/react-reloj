class Reloj extends React.Component{

    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.cambiarEstado(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    cambiarEstado(){
        this.setState({date:new Date()})
    }

    render(){
        const segundos = this.state.date.getSeconds()
        const minutos = this.state.date.getMinutes()
        const horas = this.state.date.getHours()

        return (<div className="reloj container">
                    <div className="row mb-2">
                        <div className="col-12 text-center">{this.props.titulo}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12 text-center">{this.state.date.toTimeString()}</div>
                    </div>
                    <div className="row">
                        <div className="col-4"><ManecillaPalabras numero={horas}></ManecillaPalabras></div>
                        <div className="col-4"><ManecillaDigitos digitos={minutos}></ManecillaDigitos></div>
                        <div className="col-4"><ManecillaPorcentual porcentaje={segundos/60}></ManecillaPorcentual></div>
                    </div>
                </div>)
    }
}

ReactDOM.render(<Reloj titulo="Mi Reloj"/>, document.getElementById("reloj"))
