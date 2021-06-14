import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import ICard from '../components/ICard'




class Details extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
		
	}


 



  /*this function contains the UI components to show the mapping details of the data*/

 
        
  


	render() {

	
		
			const { data, page, per_page, support, total, total_pages } = this.props;
			const { Handlepage } = this.props;

			
  
			
			return(
				<Container>
				   <h1 className='center'>Details of the People</h1>
				 <Row> 
				  {

				       Object.entries( data ).map((item, id) =>( 
				        
				        
	                    <Col className='card' key={id} >     
   
                            <ICard data={item[1]} key={id}/>
                        </Col>


				      )

				       )	
				  	   
				  	}
				  </Row>
				  <Row>
                     <Col style={{textAlign: 'center'}}>
                        <p>Showing page { page } of {total_pages}</p>
                        <p> Total entries { total }</p>
                        <p>data per page { per_page }</p>
                     </Col>
				  </Row>
				  <Row>
				       <div style={{textAlign: 'center'}}>
				  		<button onClick={() => Handlepage(1)} className='btn'>1</button>
				  		<button onClick={() => Handlepage(2)} className='btn'>2</button>
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


export default Details;