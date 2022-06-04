import { Navigate, Outlet, Route, RoutesProps } from 'react-router';
import { User } from '../users/userModel';
import { connect } from "react-redux";
import { Dispatch, useEffect, useState } from 'react';
import axios from 'axios';
import { setUser } from '../../redux/actions/setUserAction';


const AuthenticatedRoutes =  (props: any) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
           async () => {
               try {
                    const {data} = await axios.get('user');
                    props.setUser(new User(
                        data.user.id, 
                        data.user.first_name, 
                        data.user.last_name, 
                        data.user.email,
                        data.user.uuid,
                        data.user.role,
                       )   
                    );

               } catch (error) {
                    setRedirect(true)
               }
           }
        )();
    }, []);
    console.log("is auth", props.user.name)
    return redirect ? <Navigate to="/login"/> : <Outlet/>
};

const mapStateToProps = (state: {user: User}) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AuthenticatedRoutes);
