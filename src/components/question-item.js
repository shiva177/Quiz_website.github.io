import React, { Component } from 'react';
import Dialog from './dialog';
import ConstantGeneral from '../constants/general_constant';
import CoreBrain from '../core/brain';

class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPromptDialog: false,
            showDialog: false,
            message: '',
            desc: '',
            isAnswerOk: false,
            showAnswerCorrect: false,
            showGameOver: false,
            winEasterEggs: false
        };
    }
    checkAnswer (answerClicked, correctAnswer) {
        return (answerClicked == correctAnswer) ? true : false;
    }
    openConfirmationDialog() {
        this.setState({showPromptDialog: true, message: ConstantGeneral.DO_YOU_HAVE_SURE_THE_ANSWER});
    }
    incrementPos(event) {
        let answerClicked = parseInt(event.target.getAttribute('target'), 10);
        let correctAnswer = this.props.correctAnswer;
        let isAnswerOk = this.checkAnswer(answerClicked, correctAnswer);
        this.setState({isAnswerOk: isAnswerOk});
        this.openConfirmationDialog();
    }
    callbackYes() {
        let newPos = this.props.position + 1;
        let valueSuccess = this.state.isAnswerOk ? this.props.valueSuccess + 1 : this.props.valueSuccess;
        let valueError = !this.state.isAnswerOk ? this.props.valueError + 1 : this.props.valueError;
        if (newPos === this.props.questions.length) {
            this.setState({
                showDialog: false,
                showPromptDialog: false,
                showGameOver: true,
                winEasterEggs: CoreBrain.goalAim(this.props.valueSuccess)
            });
            return;
        }
        this.props.onItemSelect(this.props.questions[newPos], newPos, valueSuccess, valueError, this.state.isAnswerOk);
    }
    callbackNo() {
        this.setState({showPromptDialog: false});
    }
    callbackGameOver() {
        let that = this;
        let position = this.props.position;
        let item = this.props.questions[position];
        let options = ['a', 'b', 'c', 'd'];
        let message = `The Correct answer is the item(${options[item.correct.position]})`;
        let desc = `${item.correct.desc}`;
        that.setState({showDialog: true, message: message, desc: desc});
    }
    processAnswer() {
        this.state.isAnswerOk ? this.callbackYes() : this.callbackGameOver();
    }
    renderGameOver() {
        var snd = new Audio("lose.ogg");
        snd.play();
        return (
            <Dialog point={this.props.point} 
                type={ConstantGeneral.dialog.NORMAL} 
                valueSuccess={this.props.valueSuccess} 
                valueError={this.props.valueError} 
                showScoreFinal={true} 
                winEasterEggs={this.state.winEasterEggs}
                message=''
                description={ConstantGeneral.CONGRATULATIONS} />
        );
    }
    renderDialogNormal(isTryAgain) {
        return (
            <Dialog clickCallback={() => { this.callbackYes() }} type={ConstantGeneral.dialog.NORMAL} showMsgTryAgain={isTryAgain} description={this.state.desc} message={this.state.message} />
        );
    }
    renderDialogPrompt() {
        return (
            <Dialog type={ConstantGeneral.dialog.PROMPT} 
                callbackYes={ () => { this.processAnswer() } } 
                callbackNo={ () => { this.callbackNo() } } 
                message={this.state.message} />
        );
    }
    renderList() {
        return (
            <li onClick={ (event) => this.incrementPos(event) } 
                target={this.props.target}
                className="listItem">
                    {this.props.item}
            </li>
        );
    }
    renderListDisabled() {
        return (
            <li className="listItemDisabled">{this.props.item}</li>
        );
    }
    render() {
        return (
            <div>
                {this.state.showGameOver ? this.renderGameOver() : ''}
                {this.state.showPromptDialog ? this.renderDialogPrompt() : ''}
                {this.state.showDialog ? this.renderDialogNormal(true) : ''}
                {(this.props.disabled) ? this.renderListDisabled() : this.renderList() }
            </div>    
        );
    }
}

export default QuestionItem;