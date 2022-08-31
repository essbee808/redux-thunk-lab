// write your CatList component here
import React from 'react';

class CatList extends React.Component {

    renderList = () => {
        return (
        this.props.catPics.map((pic) => 
         <img key={pic.id} src={pic.url} alt="cat"></img>
         )
      )
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

export default CatList;