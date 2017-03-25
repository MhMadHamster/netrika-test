import { connect } from 'react-redux';
import { toggleMenu, addItem, toggleItem, changeItem } from '../actions/actions';
import App from '../components/App';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => {
    dispatch(toggleMenu())
  },
  addItem: () => {
    dispatch(addItem())
  },
  toggleItem: (itemId) => {
    dispatch(toggleItem(itemId))
  },
  changeItem: (payload) => {
    dispatch(changeItem(payload))
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;

