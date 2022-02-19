import './charList.scss';
import MarvelService from '../../services/MarvelService';
//import abyss from '../../resources/img/abyss.jpg';
import { Component } from 'react';

class CharList extends Component {
    state = {
        char: []
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char});
    }

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(this.onCharLoaded);
    }

    render() {

        const cartHero = this.state.char.map((item, index) => {
            const {thumbnail, name} = item;
            let style = 'cover';

            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style = 'contain';
            }
            return (
                <li className='char__item' key={index}>
                    <img src={thumbnail} alt={name} style={{objectFit: style}}/>
                    <div className="char__name">{name}</div>
                </li>
            )
        })
        
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {cartHero}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;