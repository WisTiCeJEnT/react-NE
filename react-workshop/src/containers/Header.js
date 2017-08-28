import React,{Component} from 'react'
import logo from '../logo.svg'
import Title from '../components/Title'
class Header extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            name: 'Nineeee'
        }
    }
    render()
    {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Title name={this.state.name} test="message" /> 
            </div>
        )
    }
}
export default Header

