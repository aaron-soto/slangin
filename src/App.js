import { Home } from "./views/Home";
import { PageBase } from "./views/PageBase";
import { ReturnPolicy } from "./views/ReturnPolicy";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tint } from "./views/Tint/Tint";
import { Audio } from "./views/Audio/Audio";
import { Video } from "./views/Video/Video";
import { About } from "./views/About/About";

function App() {
	return (
		<div className='App'>
			<Router>
				<PageBase>
					<Switch>
						<Route path='/return-policy'>
							<ReturnPolicy />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/video'>
							<Video />
						</Route>
						<Route path='/audio'>
							<Audio />
						</Route>
						<Route path='/tint'>
							<Tint />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</PageBase>
			</Router>
		</div>
	);
}

export default App;
