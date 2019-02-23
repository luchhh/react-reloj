class ManecillaPorcentual extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const porcentaje100 = Math.round(this.props.porcentaje*100)

        const divStyle = {
            backgroundImage: 'linear-gradient(90deg, transparent '+porcentaje100+'%, white 0%)'
        };

        return <div className="circulo circulo-confondo" style={divStyle}></div>
    }
}