import React from 'react';

import youtube from '../Apis/Youtube';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {videos: []};

    onTermSubmit = async (term) => {
        console.log(term);

        const results = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({videos: results.data.items});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;