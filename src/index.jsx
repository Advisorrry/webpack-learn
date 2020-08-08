import * as $ from 'jquery'
import Post from '../src/post'
import './babel'
import React from 'react'
import {render} from 'react-dom'
import './styles/styles.css'
import WebpackLogo from '@assets/webpack-logo.png'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack Post Title', WebpackLogo)
// $('pre').html(post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        <pre className="code"/>
        <hr/>
        <div className="box">
            <h2>less</h2>
        </div>
        <hr/>
        <div className="card">
            <h2>scss</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'))

console.log('post to string', post.toString())
