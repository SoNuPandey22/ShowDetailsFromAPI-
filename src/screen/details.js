import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ICard from '../components/ICard'




class Details extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
		
		
		
	}

    

 
	componentDidMount(){
		console.log(typeof(this.data))
		fetch(`https://reqres.in/api/users?page=2`)
		 .then(res => res.json())
		 .then(data =>{
	
		 	this.setState({
		 		pageNo: 2,
		 		data: data.data,
		 		page: data.page,
		 		per_page: data.per_page,
		 		support: data.support,
		 		total: data.total,
		 		total_pages: data.total_pages
		 	})

		 	console.log('name', this.state.data[0].first_name)

		 	
		 })
		 .catch(err =>{
		 	console.log(err);
		 })
	}

  /*this function contains the UI components to show the mapping details of the data*/
       handleClick1 = (p) =>{
       	console.log('hello',p)
         p = 1

        }
        handleClick2 = (p) =>{
         p = 2

        }
  


	render() {

	
		if(!this.state.data) {
			return (
					<h2>Loadig......</h2>
				)
		} else {
			const data = this.state.data;
			const page = this.state.page;

			console.log('pageno',page)
			return(
				<>
				   <div className='btn'>
                     <button onclick={ this.handleClick1 }>1</button>
                     <button onclick={ this.handleClick2 }>2</button>

				   </div>
				  
				  {

				       Object.entries(this.state.data).map((item, id) =>( 
				        
				        
	                    <div className='card'>     
   
                           <ICard data={item[1]} key={id}/>
                        </div>


				      )

				       )	
				  	   
				  	 }


				  	
				 
				</>
			)

		}
	     
		
	}
}


export default Details;