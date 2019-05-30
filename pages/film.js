import React, { Component } from 'react';
import axios from 'axios';

export default class Film extends Component {
    static async getInitialProps() {
        const res = await axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9536231', {
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        return {
            films: res.data.data.films
        }
    }
    render() {
        return (
            <div>
                <h2>电影</h2>
                <ul>
                    {
                        this.props.films.map(item => {
                            return <li>
                                <img src={item.poster} />
                                {item.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
