import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
	Row,Col,Card,CardBody,CardTitle,CardText,CardImg
} from 'reactstrap';
import './index.css';

class ContentFeed extends React.Component {
	constructor(){
		super();
		this.state = {
			'items':[]
		}
	}
componentDidMount(){
	this.getItems();
}

  getItems(){
  	fetch('http://127.0.0.1:8000/api/v1/item/')
		.then(results =>  results.json())
		.then(results => this.setState({ 'items':results }));
  }
  render(){
	return (
		<ul>
     { this.state.items.map(
			 function(item,index){
			      return (
				        /*<div>
				          <h1>{ item.title }</h1>
				          <p>{ item.description }</p>
				        </div>*/
								<ContentItem item={item} key={ index }/>
			        )
		     }
		 )}
		</ul>
	);
}
}

class ContentItem extends React.Component{
	render(){
		return (
			<Row className='ContentItem'>
			<Col xs="3"></Col>
			<Col xs="12" sm="6">
			  <Card>
				 <CardBody>
				 <CardTitle>
				 { this.props.item.title }
				</CardTitle>
				<CardImg top width="100%" src={ this.props.item.image }></CardImg>
				<CardText>
				{ this.props.item.description }
			 </CardText>
				 </CardBody>
				</Card>
			</Col>
			</Row>
		)
	}
}

ReactDom.render(
	<ContentFeed />,
	document.getElementById('root')
	)
