import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/searchQueriesActions'
import { IUser } from '../../services/models/IUser'

const FullUsernamesPage = ({ dispatch, users}: any): ReactElement => {
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const FullUsernamesList: React.FC = (): ReactElement => {
        const emailList = users.map((user: IUser, index: number): ReactElement => {
            return (
                <React.Fragment key={index}>
                    <p>{user.name}</p>
                </React.Fragment>
            )
        })
        return emailList
    }

    return (
        <>
            <h1>Full user names</h1>
            <FullUsernamesList />
        </>
    )
}

const mapStateToProps = (state: any) => ({
    users: state.search.users
})

export default connect(mapStateToProps)(FullUsernamesPage)
