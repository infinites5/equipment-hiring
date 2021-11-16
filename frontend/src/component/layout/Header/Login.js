import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'

function LoginIcon() {
    return (
        <div className="speedDial123 skip">
            <Link to='/login'>
            <Avatar className="speedDialIcon123" src="../../../images/Profile.png"/>
            </Link>
        </div>
    )
}

export default LoginIcon
