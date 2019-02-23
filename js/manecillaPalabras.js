class ManecillaPalabras extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const palabra = this.numeroApalabra(this.props.numero);
        return React.createElement(
            "div",
            { className: "circulo" },
            palabra
        );
    }

    numeroApalabra(numero) {
        const simples = {
            0: "cero", 1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve",
            10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince",
            20: "veinte", 30: "treinta", 40: "cuarenta", 50: "cincuenta"
        };

        const compuestos = { 1: "dieci", 2: "veinti", 3: "treinta y ", 4: "cuarenta y ", 5: "cincuenta y " };

        if (simples[numero] != null) {
            return simples[numero];
        } else {
            const decenas = Math.floor(numero / 10);
            const resto = numero % 10;

            return compuestos[decenas] + "" + simples[resto];
        }
    }
}