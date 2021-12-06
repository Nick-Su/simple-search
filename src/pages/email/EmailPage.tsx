import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/searchQueriesActions'
import { IUser } from '../../services/models/IUser'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import './style.css'

const EmailPage: React.FC = ({ dispatch, users }: any): ReactElement => {
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const EmailList: React.FC = (): ReactElement => {
        const emailList = users.map((user: IUser, index: number): ReactElement => {
           return (
            <React.Fragment key={index}>
                <Box sx={{ minWidth: 275, maxWidth: 295 }}>
                    <Card variant="outlined">
                        <React.Fragment>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    { user.username }
                                </Typography>
                                <Typography variant="body2">
                                    {user.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Write an email</Button>
                            </CardActions>
                        </React.Fragment>
                    </Card>
                </Box>
            </React.Fragment>
           )
        })
        return emailList
    }

    return (
        <>
            <h1>Email list</h1>
            <div className="email-cards-container">
                <EmailList />
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.search.users
})

export default connect(mapStateToProps)(EmailPage)
