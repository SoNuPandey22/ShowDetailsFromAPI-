import React from 'react'
import { Card } from 'react-bootstrap'

const ICard = ({data}) => {
	
   return (
       <div>
              <Card style={{height: 'auto'}}className='my-3 p-3 rounded'>
		         
		           <Card.Img style={{height:150, width: 200}} src={data.avatar} alt='prodcut-image' variant='top' />
		         
			      <Card.Body style={{margin: 20}}>
				       	 <Card.Text as='div'>
				            {`First Name: ${data.first_name}`} 
				          </Card.Text>
				       

				       <Card.Text as='div'>
				           {`Last Name: ${data.last_name}`}
				       </Card.Text>
				       <Card.Text as='div'>
                          {`Email: ${data.email}`}
				       </Card.Text>
			     </Card.Body>
              </Card>
       </div>
   	);

}


export default ICard;