import React from 'react'
import {Typography, Card, CardContent, CardActions} from '@material-ui/core'


const StatBlock = (props) => {
    return (
        <Card>
            <CardContent>
                <Typography>{props.name}</Typography>
                <Typography>{props.score}</Typography>
            </CardContent>
        </Card>
    )
}

export default StatBlock