import React, { Component } from 'react';
import "../styles/list.css";

export default class List extends Component {
    state = {
        list: ["Hello", "World"]
    }
    sayHello() {
        alert('hello');
      }
    render() {
        return (
            <div>
                <button onClick={this.sayHello}>hello</button>
                <ul>
                    {
                        this.state.list.map(item => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}