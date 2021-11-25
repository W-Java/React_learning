import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as buffer from "buffer";

// Square是一个React组件类，通过接受一些props
// 被封装好了，可以直接使用，来构建复杂的UI界面
class Square extends React.Component {
  // 通过render方法展示出来
  // 本质上render方法返回了React元素
  render() {
    return (
        <button
            className="square"
            // 直接触发Board中的handleClick()
            onClick={() => this.props.onClick()}
        >
          {/*记录自己state属性的结果*/}
          {this.props.value}
        </button>
    );
  }
}

// // 将Square写成一个函数组件类 来替换原来的Square类
// function Square(props) {
//     return (
//         <button className='square' onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }

// 渲染了9个方格
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 建立一个长度为9的空数组
      squares: Array(9).fill(null),
      xIsnext: true
    };
  }
  // 处理子组件squares的点击事件
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares})
  }
  renderSquare(i) {
    // 传递给子组件Square，数组中记录了每一个格子的状态
    return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
    );
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
