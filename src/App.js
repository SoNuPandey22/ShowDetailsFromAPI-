import Header from './components/Header';
import Footer from './components/Footer'; 

import React from 'react'
import Details from './screen/details'


class App extends React.Component {
 constructor() {
 	super();
 	this.state= {
 	};
 	
 }

 componentDidMount(){

		fetch(`https://reqres.in/api/users?page=1`)
		 .then(res => res.json())
		 .then(data =>{
	
		 	this.setState({
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

	//function to handle the page 

	Handlepage = (no) =>{
	    	
	    	fetch(`https://reqres.in/api/users?page=${no}`)
			 .then(res => res.json())
			 .then(data =>{
		
			 	this.setState({
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
    
    // page2() {
	   //  	console.log('page reqested')

	   //  	fetch(`https://reqres.in/api/users?page=2`)
			 // .then(res => res.json())
			 // .then(data =>{
			 // 	this.setState({
			 // 		data: data.data,
			 // 		page: data.page,
			 // 		per_page: data.per_page,
			 // 		support: data.support,
			 // 		total: data.total,
			 // 		total_pages: data.total_pages
			 // 	})

			 	
			 // })
			 // .catch(err =>{
			 // 	console.log(err);
			 // })
    	
    // }





	render() {
		if(!this.state.data){
			return (<h2>Loading ......</h2>)
		}
		const {  data, page, per_page, support, total, total_pages } = this.state;
		
		
	  return (
	     <>
	      <Header />
	      <main>

	          <Details 
	             data={data}
	             page={page}
	             per_page={ per_page }
	             support = { support }
	             total = { total }
	             total_pages = { total_pages }
	             Handlepage = { this.Handlepage }
	            
	           />
	      </main>
	      <Footer />
	     </>
	  );
 }
}

export default App;
