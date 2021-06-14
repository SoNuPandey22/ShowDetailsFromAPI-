import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import ICard from '../components/ICard'




class Details extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
		this.index = 2;
		
			
	}


 
	componentDidMount(){
		fetch(`https://reqres.in/api/users?page=${this.index}`)
		 .then(res => res.json())
		 .then(data =>{
	
		 	this.setState({
		 		index: this.index,
		 		data: data.data,
		 		page: data.page,
		 		per_page: data.per_page,
		 		support: data.support,
		 		total: data.total,
		 		total_pages: data.total_pages
		 	})

		 	
		 })
		 .catch(err =>{
		 	console.log(err);
		 })
	}
	 page1(no){
    	this.index = no
    	this.setState({index: this.index})
    	console.log('this.index', this.index)
    	this.forceUpdate();
    }
    page2(no) {
    	this.index = no
    	this.setState({index: this.index})
    	console.log('this.index', this.index)
    	this.forceUpdate();
    }

  /*this function contains the UI components to show the mapping details of the data*/

 
        
  


	render() {

	
		if(!this.state.data) {
			return (
					<h2>Loadig......</h2>
				)
		} else {
			const { page, per_page, support, total, total_pages} = this.state;
			
  
			
			return(
				<Container>
				   <h1 className='center'>Details of the People</h1>
				 <Row> 
				  {

				       Object.entries(this.state.data).map((item, id) =>( 
				        
				        
	                    <Col className='card' key={id} >     
   
                            <ICard data={item[1]} key={id}/>
                        </Col>


				      )

				       )	
				  	   
				  	}
				  </Row>
				  <Row>
                     <Col style={{textAlign: 'center'}}>
                        <p>showing page { page } of {total_pages}</p>
                     </Col>
				  </Row>
				  <Row>
				       <div style={{textAlign: 'center'}}>
				  		<button onClick={() => this.page1(1)} className='btn'>1</button>
				  		<button onClick={() => this.page2(2)} className='btn'>2</button>
				  		</div>
				  </Row>
				  <Row style={{textAlign: 'center', backgroundColor: 'lightgray', padding: 5, color: 'red'}}>
                     <div>
                         {support.url}
                     </div>
                     <div style={{color: 'green'}}>
                        {support.text}
                     </div>

				  </Row>


				  	
				 
				</Container>
			)

		}
	     
		
	}
}


export default Details;