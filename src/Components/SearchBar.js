import React from 'react';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {term: ''};


    onInputChage = (event) => {
        this.setState({term: event.target.value});
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        // TODO: make sure we call
        // callback from parent component
    }

    render() {

        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        onChange={this.onInputChage}
                        value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;