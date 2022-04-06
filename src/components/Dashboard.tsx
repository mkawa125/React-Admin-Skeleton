import React, { PureComponent } from 'react'

interface DashboardProps {
    
}
 
interface DashboardState {
    
}
 
class Dashboard extends React.Component<DashboardProps, DashboardState> {
    render() { 
        return ( 
            <div className="flex flex-row flex-wrap flex-grow mt-8">
                This is the dashboard
            </div>
         );
    }
}
 
export default Dashboard;