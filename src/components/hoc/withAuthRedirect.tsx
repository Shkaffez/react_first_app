import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../Redux/ReduxStore';

const mapStateToProps = (state: AppStateType) => ({ isAuth: state.auth.isAuth });

export const withAuthRedirect = (Component: Component) => {

    type Props = {
        isAuth: boolean
    }

    class RedirectComponent extends React.Component<Props> {
        render() {
            if (!this.props.isAuth) return <Redirect to= '/login' />; 

            return <Component { ...this.props } />
        }

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

