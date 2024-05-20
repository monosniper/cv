import './assets/scss/app.scss'
import Bg from "./components/Bg.jsx";
import Stack from "./components/Stack.jsx";
import Main from "./components/Main.jsx";
import Me from "./components/Me.jsx";

function App() {
    return (
        <>
            <Bg/>

            <div className="container">
                <div className="row">
                    <div className="col-5 col-md-6 col-sm-12 col-xs-24 side">
                        <Me />

                        <div className="hidden visible-md hidden-sm">
                            <Stack />
                        </div>
                    </div>
                    <div className="col-13 col-md-16 col-sm-24 col-center order-sm-3">
                        <Main />
                    </div>
                    <div className="col-6 col-xs-24 col-sm-12 hidden-md visible-sm">
                        <Stack />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
