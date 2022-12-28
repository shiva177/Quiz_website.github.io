import React, {Component} from 'react';
import Button from './button';
import GeneralConstant from '../constants/general_constant';
import AboutGame from './about-game';

export default class MenuStart extends Component {
    constructor(props) {
        super();
        this.state = {
            aboutGame: false,
            tutorial: false
        };
    }
    
    showDialog() {
        this.setState({
            aboutGame: true
        }); 
    }

    showDialogTutorial() {
        this.setState({
            tutorial: true
        }); 
    }

    hideDialog() {
        this.setState({
            aboutGame: false,
            tutorial: false
        }); 
    }

    tutorial() {
        return (
            <div className="tutorialStep">
                <ul>
                    <ol>1. Enter your name and click START</ol>
                    <ol><img src="/images/tutorial/01.png" /></ol>
                    <ol>2. Choose the answer or ask for help</ol>
                    <ol><img src="/images/tutorial/02.png" /></ol>
                    <ol>3. Boards is a help option</ol>
                    <ol><img src="/images/tutorial/03.png" /></ol>
                    <ol>4. Other help options can be chosen </ol>
                    <ol><img src="/images/tutorial/04.png" /></ol>
                    <ol>5. Every time you hit, you get 50 points</ol>
                    <ol><img src="/images/tutorial/05.png" /></ol>
                    <ol>6. Area that shows the items you hit and missed </ol>
                    <ol><img src="/images/tutorial/06.png" /></ol>
                    <ol>8.If you make a mistake, a dialog with the correct answer will appear </ol>
                    <ol><img src="/images/tutorial/07.png" /></ol>
                    <ol>9.If you don't get the minimum of 85% of the total questions, try again. </ol>
                    <ol><img src="/images/tutorial/08.png" /></ol>
                    <ol>10. If you hit the minimum of 85%, you win! </ol>
                    <ol><img src="/images/tutorial/09.png" /></ol>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="startPage">
                <div className="menuStart">
                    <div>
                        <img src="/images/logo3.png" />
                    </div>
                    <div>
                        <input type="text" name="" placeholder="Enter your name" onChange={this.props.changeName} />
                        <Button title={GeneralConstant.button.START} 
                            btnType="btnStart" 
                            clickCallback={this.props.showMenuStart} />
                    </div>
                </div>
                <a className="aboutGameLink" onClick={ () => { this.showDialog() } } href="#">{GeneralConstant.ABOUT_GAME_TITLE}</a>
                <a className="tutorial" onClick={ () => { this.showDialogTutorial() } } href="#">{GeneralConstant.TUTORIAL}</a>
                {this.state.aboutGame ? <AboutGame closeDialog={() => { this.hideDialog() }} message={GeneralConstant.ABOUT_GAME} /> : ''}
                {this.state.tutorial ? <AboutGame classTutorial="areaTutorialStep" closeDialog={() => { this.hideDialog() }} message={this.tutorial()} /> : ''}
            </div>
        );
    }

}