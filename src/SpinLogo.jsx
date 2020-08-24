import React from 'react'
import { AppBar, Toolbar, Typography, 
    makeStyles, Grid, Container, 
    Button, IconButton, CardMedia} from "@material-ui/core"
import {MenuIcon} from "@material-ui/icons"
import ReactPlayer from 'react-player'

const SpinLogo = () => {
    return (
            <div className='player-wrapper' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} onClick={console.log("hi")}>
                <ReactPlayer width='30%'
                    height='40%' url='videos/logo.mp4' 
                    loop={true} playing={true} muted
                />
            </div>
    )
}

export default SpinLogo