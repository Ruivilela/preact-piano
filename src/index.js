let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h, Component } from "preact";
import habitat from "preact-habitat";
import { Provider } from "redux-zero/preact";

import "./style.scss";

import Piano from './components/piano/index'

import store from "./state/store";

class App extends Component {
  render(props) {
    return (
      <div>
        <Provider store={store}>
          <Piano octave={3} />
        </Provider>
      </div>
    );
  }
}

let _habitat = habitat(App);

_habitat.render({
  selector: '[data-app="app"]',
  clean: true
});
