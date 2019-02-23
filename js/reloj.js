class Reloj extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.cambiarEstado(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    cambiarEstado() {
        this.setState({ date: new Date() });
    }

    render() {
        const segundos = this.state.date.getSeconds();
        const minutos = this.state.date.getMinutes();
        const horas = this.state.date.getHours();

        return React.createElement(
            "div",
            { className: "reloj container" },
            React.createElement(
                "div",
                { className: "row mb-2" },
                React.createElement(
                    "div",
                    { className: "col-12 text-center" },
                    this.props.titulo
                )
            ),
            React.createElement(
                "div",
                { className: "row mb-2" },
                React.createElement(
                    "div",
                    { className: "col-12 text-center" },
                    this.state.date.toTimeString()
                )
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-4" },
                    React.createElement(ManecillaPalabras, { numero: horas })
                ),
                React.createElement(
                    "div",
                    { className: "col-4" },
                    React.createElement(ManecillaDigitos, { digitos: minutos })
                ),
                React.createElement(
                    "div",
                    { className: "col-4" },
                    React.createElement(ManecillaPorcentual, { porcentaje: segundos / 60 })
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Reloj, { titulo: "Mi Reloj" }), document.getElementById("reloj"));