import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/searchQueriesActions'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import './style.css'

const UsersPage: React.FC = ({ dispatch, users}: any): ReactElement => {
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const UsernameList: React.FC = (): ReactElement => {
        const emailList = users.map((user: any, index: number) => {
           return (
                <React.Fragment key={index}>
                    <Box sx={{ minWidth: 275, maxWidth: 295 }}>
                        <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        { user.username }
                                    </Typography>
                                </CardContent>
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
            <h1>Usernames</h1>
            <div className="user-name-list-container">
                <UsernameList />
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.search.users
})

export default connect(mapStateToProps)(UsersPage)
