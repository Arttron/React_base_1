import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from "lodash";
import uuid from "uuid/v1";
import "./style.scss";
import Preloader from '../Preloader/Preloader.jsx';
class Service extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
              data: undefined             
        };
    }
    componentDidMount() {

        }
    render(tmplServ) {
        
        
        if(this.state.data){
            return(
            <div className="content">
                <div className="content__services-head">
                    <h2 className="content__head">Service Directory</h2>
                    <button>Add New Service</button>
                </div>
                <div className="content__services">
                    {this.dataRender}
                </div>
            </div>
            );
        }

        return (
            <div className="content">
                <Preloader/>
            </div>
            )
    }
}

export default Service;