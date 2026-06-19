import { loadWidget, removeWidget } from "./utils/widgetLoader";

const USER_WIDGET_URL = import.meta.env.VITE_TEST_WIDGET_URL;

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

      
    </>
  );
}

export default App;