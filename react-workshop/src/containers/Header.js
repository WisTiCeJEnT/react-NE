import React,{Component} from 'react'
import logo from './logo.svg'
class Header extends Component
{
    render()
    {
        return 
        (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome CPE31_NE</h2>
            </div>
        )
    }
}
export default Header