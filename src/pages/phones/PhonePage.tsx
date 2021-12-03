import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";
import { fetchUsers } from '../../actions/searchQueriesActions'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import './style.css'

const PhonePage: React.FC = ({dispatch, users}: any): ReactElement => {
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
        
    const PhoneList: React.FC = (): ReactElement => {
        const emailList = users.map((user: any, index: number) => {
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
                                        { user.name }
                                    </Typography>
                                    <Typography>
                                        { user.phone }
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
            <h1>Phones</h1>
            <p>{location.state.phone}</p>
            <div className="phone-list-container">
                <PhoneList />
           </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.search.users
})

export default connect(mapStateToProps)(PhonePage)
