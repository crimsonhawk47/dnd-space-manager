import React from 'react'
import {Typography, Card, CardContent, CardActions} from '@material-ui/core'


const StatBlock = (props) => {
    return (
        <Card>
            <CardContent>
                <Typography>{props.name}</Typography>
                <Typography>score: {props.score}</Typography>
                <Typography>mod: {parseInt((props.score-10)/2)}</Typography>
            </CardContent>
        </Card>
    )
}

export default StatBlock