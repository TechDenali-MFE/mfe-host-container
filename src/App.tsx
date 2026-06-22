import { loadWidget, removeWidget } from "./utils/widgetLoader";

const USER_WIDGET_URL = import.meta.env.VITE_TEST_WIDGET_URL;
const GEORGE_WIDGET_URL = import.meta.env.VITE_GEORGE_WIDGET_URL1;

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
      </button>

      <hr />

      <div id="george-widget"></div>


    </>
  );
}

export default App;