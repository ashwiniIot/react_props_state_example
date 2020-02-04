import React,{Component}  from "react";
import { CLIENT_RENEG_LIMIT } from "tls";

interface IProps{

}

interface IState {
    message: string;
  }
class WithState extends Component <IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            message: 'Welcome!!!!!!!!!!!!!!!!!!!!'
        }
    }
    changeMessage() {
        // console.log(this.state)
        // console.log(this.props)
       this.setState({
           message:"Thank You For visiting"
       })
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        return(
            <div>
                <h1>{this.state.message}</h1>
              <button onClick = {()=>
                this.changeMessage()}>
                Change Me
              </button>
            </div>
          );
    }
   
}

export default WithState;