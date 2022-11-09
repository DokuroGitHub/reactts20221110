import logo from '../../assets/images/logo.svg';
import ToDoList from '../todo/ToDoList';
import ProductDetail from '../productDetail/ProductDetail';
import './Home.scss';
import React = require('react');

const Home = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="content">
                <div className="left">
                    <p>
                        Hello world with reactJS
                    </p>
                    <ToDoList />
                </div>
                <div className="right">
                    <ProductDetail />
                </div>
            </div>
        </div>
    );
}

export default Home;