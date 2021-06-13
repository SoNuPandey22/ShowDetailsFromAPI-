import React from 'react';


class Details extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}


	componentDidMount(){
		fetch('https://reqres.in/api/users?page=2')
		 .then(res => res.json())
		 .then(data =>{
		 	console.log(data.page)
		 })
	}

	render() {
		return(
			<>
				Deails are comming soon
			</>
			)
	}
}


export default Details;