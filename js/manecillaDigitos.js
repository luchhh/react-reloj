class ManecillaDigitos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: "circulo" },
            this.props.digitos
        );
    }
}