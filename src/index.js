import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square是一个React组件类，通过接受一些props
// 被封装好了，可以直接使用，来构建复杂的UI界面
class Square extends React.Component {
  // 在所有含有constructor的构造函数的组件，都需要用super(props)开头
  constructor(props) {
    super(props);
    // 通过state来实现"记忆"功能
    this.state = {
      value: null,
    };
  }
  // 通过render方法展示出来
  // 本质上render方法返回了React元素
  render() {
    return (
        <button
            className="square"
            onClick={() => {
              this.setState({value: 'X'})
            }}
        >
          {/*记录自己state属性的结果*/}
          {this.state.value}
        </button>
    );
  }
}

// 渲染了9个方格
class Board extends React.Component {
  renderSquare(i) {
    // 传递给子组件，子组件通过props来接受
    return <Square value={i}/>
  }
  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    );
  }
}

// 渲染了一个棋盘
class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
