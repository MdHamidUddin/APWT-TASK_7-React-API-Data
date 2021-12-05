
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';


const Header = ()=>
{
    return (
        <div>
            <Button style={{color:"Link", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}><Link to="/">Home</Link> </Button>
            <Button style={{color:"#00005c", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline ><Link to="/Contact">Contact</Link> </Button>
            {/* <Button style={{color:"#00005c", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline ><Link to="/Student">Student</Link> </Button> */}
            <Button style={{color:"#00005c", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline ><Link to="/color">Color</Link> </Button>
            <Button style={{color:"#00005c", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline ><Link to="EffectHook/">Effect Hook</Link> </Button>
            <Button style={{color:"#00005c", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline ><Link to="/post">User Info</Link> </Button>

        
        </div>
    )
}

export default Header;
