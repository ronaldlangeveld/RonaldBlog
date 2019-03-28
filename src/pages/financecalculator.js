import React, { Component } from 'react'
import Navbar from '../components/navbar';

class financecalculator extends Component {

    state = {
        deposit: '',
        interestrate: '',
        time: '',
        compound: [],
        futureval: 0
    }

    constructor(props) {
        super(props);
        this.updateDeposit = this.updateDeposit.bind(this);
        this.updateInterest = this.updateInterest.bind(this);
        this.timeFrame = this.timeFrame.bind(this);

    };

    // calculator = () => {
    //     const deposit = this.state.deposit;
    //     const interestrate = this.state.interestrate;
    //     const time = this.state.time;

    //     let futureval = deposit * (Math.pow(1 + interestrate, 12) - 1) / interestrate;
    //     console.log(futureval)
    // }

    updateDeposit(event) {
        this.setState({ deposit: event.target.value });
       
    }

    updateInterest(event) {
        this.setState({ interestrate: event.target.value });
    }

    timeFrame(event) {
        this.setState({ time: event.target.value });
        this.calculator();
    }

    calculator = () => {
        const deposit = Number(this.state.deposit);
        const interestrate = Number(this.state.interestrate);
        const time = this.state.time;

        const futureval = (deposit* Math.pow((1 + (interestrate/(time*100))), (time*2)));
        this.setState({futureval: futureval})
    }

    render() {

        return (
            <div>
                <Navbar />

                <section className="hero is-light is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <h1 className="has-text-centered title is-1">Compound Interest Calculator</h1>
                                    <hr />
                                    <h2 className="subtitle is-2">Deposit</h2>
                                    <input onChange={this.updateDeposit} className="input is-size-2" placeholder="10,000" value={this.state.deposit} />
                                    <hr />
                                    <h2 className="subtitle is-2 has-text-centered">at an interest rate of</h2>
                                    <div className="field has-addons has-addons-centered">

                                        <p className="control">
                                            <input onChange={this.updateInterest} className="input is-size-4" type="text" placeholder="10" value={this.state.interestrate} />
                                        </p>

                                        <p className="control">
                                            <span className="select is-size-4">
                                                <select value={this.state.value} onChange={this.timeFrame}>
                                                    <option value="12">% Per Month</option>
                                                    <option value="1">% Per Year</option>
                                                </select>
                                            </span>
                                        </p>

                                    </div>

                                    <hr />

                                    <div className="box">

                                        <h1 className="has-text-centered title is-3">{this.state.futureval}</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


export default financecalculator;

