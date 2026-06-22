import { loadWidget, removeWidget } from "./utils/widgetLoader";

const USER_WIDGET_URL = import.meta.env.VITE_TEST_WIDGET_URL;
const USER_WIDGET_URL1 = import.meta.env.VITE_TEST_WIDGET_URL1;
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

      <div id="user-widget"></div>


<div>
 <button
        onClick={() =>
          loadWidget(USER_WIDGET_URL1, "user-widget1", {
            name: "Geethika",
          })
        }
      >
        Load User geethika'sWidget
      </button>

      <button
        onClick={() => removeWidget("user-widget1")}
      >
        Remove User Widget
      </button>
       <div id="user-widget1"></div>
</div>
      <hr />



         
    </>
  );
}

export default App;