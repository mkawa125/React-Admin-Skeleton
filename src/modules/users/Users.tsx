import React, { Component } from "react";
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';

class User extends Component {
    render() {
        return ( 
            <div id="main" className="main-content flex-1 bg-white mt-12 md:mt-2 pb-24 p-10 md:pb-5">
                <div className="flex flex-row flex-wrap flex-grow mt-8">

                    <p>
                        Users                    
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos mollitia nihil fugit a voluptates voluptatum hic illo recusandae vitae aperiam perspiciatis architecto, in ducimus odit, explicabo quasi error corporis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil provident, quae atque velit itaque qui, repellendus optio dolorum vitae odit id? Saepe distinctio expedita alias ab iusto nisi. Eos, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae eaque sit voluptatum est saepe asperiores temporibus error distinctio nulla amet facere laboriosam aliquam blanditiis possimus deleniti, aspernatur iste deserunt.
                    </p>
                </div>
            </div>
        );
    }
}

export default User;