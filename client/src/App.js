import React, { Component } from 'react';
import { Card, Col, Row, Icon } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color: 'white'}}>Yaohuei's React Portfolio</h1>
          <Row gutter={16}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card
                title="NBA Shot Chart" bordered={false}
                actions={[
                  <a href="https://github.com/BillyTseng/nba-shot-chart" target='_blank' rel="noopener noreferrer">
                    <Icon type="github" />{' '}<span>GitHub</span>
                  </a>, 
                  <a href={window.location.href + 'shotchart'} target='_blank' rel="noopener noreferrer">
                    <Icon type="export" />{' '}<span>Demo</span>
                  </a>]}
              >
                <p className="card-content">NBA Player Shots Visualization.</p>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card
                title="Around" bordered={false}
                actions={[
                  <a href="https://github.com/BillyTseng/around" target='_blank' rel="noopener noreferrer">
                    <Icon type="github" />{' '}<span>GitHub</span>
                  </a>, 
                  <a href={window.location.href + 'around'} target='_blank' rel="noopener noreferrer">
                    <Icon type="export" />{' '}<span>Demo</span>
                  </a>]}
              >
                <p className="card-content">Cloud and React-based Social Network.</p>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card
                title="Subreddits Reader" bordered={false}
                actions={[
                  <a href="https://github.com/BillyTseng/Subreddits-Reader" target='_blank' rel="noopener noreferrer">
                    <Icon type="github" />{' '}<span>GitHub</span>
                  </a>, 
                  <a href={window.location.href + 'subreddits'} target='_blank' rel="noopener noreferrer">
                    <Icon type="export" />{' '}<span>Demo</span>
                  </a>]}
              >
                <p className="card-content">A friendly reddit reader.</p>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card
                title="NBA Season Explorer" bordered={false}
                actions={[
                  <a href="https://github.com/BillyTseng/nba-season-explorer" target='_blank' rel="noopener noreferrer">
                    <Icon type="github" />{' '}<span>GitHub</span>
                  </a>, 
                  <a href={window.location.href + 'scores'} target='_blank' rel="noopener noreferrer">
                    <Icon type="export" />{' '}<span>Demo</span>
                  </a>]}
              >
                <p className="card-content">Draw selected NBA teams' score.</p>
              </Card>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default App;
