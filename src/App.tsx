import { loadWidget, removeWidget } from "./utils/widgetLoader";

const USER_WIDGET_URL = import.meta.env.VITE_TEST_WIDGET_URL;
<<<<<<< Updated upstream
const GEORGE_WIDGET_URL = import.meta.env.VITE_GEORGE_WIDGET_URL1;
=======
const SOWMYA_WIDGET_URL = import.meta.env.VITE_SOWMYA_WIDGET_URL;
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <h1>Microfrontend Host Application</h1>

      <button
        onClick={() =>
          loadWidget(USER_WIDGET_URL, "user-widget", {
            name: "Nishant",
          })
        }
      >
        Load User Widget
      </button>

      <button
        onClick={() => removeWidget("user-widget")}
      >
        Remove User Widget
      </button>

      <hr />

      <div id="user-widget"></div>
        

<<<<<<< Updated upstream
      <button
        onClick={() =>
          loadWidget(GEORGE_WIDGET_URL, "george-widget", {
            name: "GEORGE",
          })
        }
      >
        Load George Widget
      </button>

      <button
        onClick={() => removeWidget("george-widget")}
      >
        Remove George Widget
=======
        <button
        onClick={() =>
          loadWidget(SOWMYA_WIDGET_URL, "sowmya-widget", {
            name: "Sowmya",
          })
        }
      >
        Load User Widget
      </button>

      <button
        onClick={() => removeWidget("sowmya-widget")}
      >
        Remove User Widget
>>>>>>> Stashed changes
      </button>

      <hr />

<<<<<<< Updated upstream
      <div id="george-widget"></div>


=======

    <div id='sowmya-widget'>

    </div>
      
>>>>>>> Stashed changes
    </>
  );
}

export default App;