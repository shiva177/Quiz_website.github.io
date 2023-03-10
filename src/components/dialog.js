import React, {Component} from 'react';
import Button from './button';
import CoreBrain from '../core/brain';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardItemChosen: ''
        };
    }

    getButtons() {
        return (
            <div>
                <Button btnType="btnYes" clickCallback={this.props.callbackYes} /> 
                <Button btnType="btnNo" clickCallback={this.props.callbackNo} />
            </div>
        );
    }

    choiceBoard(event) {
        let opt = event.target.parentElement.getAttribute('target');
        event.target.innerHTML = opt;
        this.props.callback(opt);
    }

    closeDialog() {
        this.props.callback();
    }

    getBoardSuggestion() {
        let that = this;
        let optionsToDisable = [1,2,3]; //options that deck will disable
        let shuffleChoices = CoreBrain.shuffleList(optionsToDisable);
        let choices = shuffleChoices.map(function(item, index) {
            return (
                <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                    <div className="helpOptions" target={item} onClick={ (event) => that.choiceBoard(event) }>
                        <p>?</p>
                    </div>
                </div>
            );
        });
        return (
            <div>{choices}</div>
        );
    };

    getDeckSuggestion() {
        let that = this;
        let wrongOrCorrect = CoreBrain.wrongOrCorrect(this.props);
        let itemsQuestion = ['a', 'b', 'c', 'd'];
        let choices = [0,1,2,3].map(function(item, index) {
            return (
                <div key={index} className="col-xs-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                    <div>
                        <img src="/images/deck-option.png" />
                    </div>
                </div>
            );
        });
        let getAnswerFinal = () => {
            return wrongOrCorrect.answerPercent + "% opted for the item (" + itemsQuestion[wrongOrCorrect.answerChosen] + ")";
        };
        return (
            <div>
                <div>
                    <Button btnType="btnQuit" title={getAnswerFinal()} />
                </div>
                {choices}
                <div>
                    <Button btnType="btn" title="OK" clickCallback={ () => that.closeDialog() } />
                </div>
            </div>
        );
    };

    getGuessSuggestion() {
        let that = this;
        let wrongOrCorrect = CoreBrain.wrongOrCorrect(this.props);
        let careers = CoreBrain.getGuessProfessionalCareer();
        let itemsQuestion = ['a', 'b', 'c', 'd'];
        let getAnswerFinal = () => {
            return `${itemsQuestion[wrongOrCorrect.answerChosen]}`;
        };
        return (
            <div>
                <div className="col-xs-12">
                    <div className="col-sm-3 col-md-3 col-xl-3 col-lg-3">
                        <img src="/images/deck-option.png" />
                    </div>
                    <div className="col-sm-12 col-md-9 col-xl-9 col-lg-9">
                        <p className="descriptionGuess">{`O(a) ${careers} states that the correct answer is: `}</p>
                        <label className="answerLabelGuess">
                            ({getAnswerFinal()})
                        </label>
                    </div>
                </div>
                <div>
                    <Button btnType="btn" title="OK" clickCallback={ () => that.closeDialog() } />
                </div>
            </div>
        );    
    };

    getLoseContent() {
        return (
            <div>
                <Button btnType="btn" 
                    title="Next question" 
                    clickCallback={this.props.clickCallback} />
            </div>
        );
    };

    getContent() {
        switch (this.props.type) {
            case "board":
                return (
                    <div>{ this.getBoardSuggestion() }</div>
                );
                break;
            case "deck":
                return (
                    <div>{ this.getDeckSuggestion() }</div>
                );
                break;
            case "guess":
                return (
                    <div>{ this.getGuessSuggestion() }</div>
                );
                break;
        }    
    };

    getContentLose() {
        return (
            <div className="loadingRanking">loading ranking...</div>    
        );
    }

    getContentScore() {
        let ranking = localStorage.getItem('ranking.quizz.game');
        let positionFinal;
        if (ranking) {
            ranking = JSON.parse(ranking);
            positionFinal = ranking.sort(function(a, b) {
                return b.value - a.value;
            })
        }
        let renderRanking = () => {
            positionFinal = positionFinal.slice(0, 3);
            return positionFinal.map((position) => { 
                return (
                    <li className="rankingList">{position.name} : {position.value}</li>
                );
            });
        }

        let status = (this.props.winEasterEggs) ? 'green' : 'red';

        return (
            <div className="col-xs-12">
                <ul>
                    <li className="rankingList"><div className={"pointFinal " + status}>{this.props.winEasterEggs ? 'Congratulations, you won!!!!': 'You did not reach the percentage needed to win. Try again. :)'}</div></li>
                    <li className="rankingList"><div className="pointFinal">Final Score: {this.props.point}</div></li>
                    <li className="rankingList center">Ranking:</li>
                    {renderRanking()}
                </ul>
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className="dropscreen"></div>
                <div className="card dialog">
                    {this.props.showMsgTryAgain ? <h4 className='red-color'>{this.props.message}</h4> : <h4>{this.props.message}</h4>}
                    <p className="center">{this.props.description}</p>
                    {this.props.showScoreFinal ? this.getContentScore() : ''}
                    {this.props.showMsgTryAgain ? this.getLoseContent() : ''}
                    <div>{ (this.props.type && this.props.type !== 'lose') ? this.getContent() : '' }</div>
                    <div>{ (this.props.type && this.props.type === 'lose') ? this.getContentLose() : '' }</div>
                    <div>{ (this.props.type && this.props.type === 'score') ? this.getContentScore() : '' }</div>
                    <div>{this.props.type === 'prompt' ? this.getButtons() : ''}</div>
                </div>
            </div>
        );
    };
}



export default Dialog;