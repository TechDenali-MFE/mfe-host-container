import { loadWidget, removeWidget } from "./utils/widgetLoader";

const USER_WIDGET_URL = import.meta.env.VITE_TEST_WIDGET_URL;
const GEORGE_WIDGET_URL = import.meta.env.VITE_GEORGE_WIDGET_URL1;
const SOWMYA_WIDGET_URL = import.meta.env.VITE_SOWMYA_WIDGET_URL;
const  SUNAYANA_WIDGET_URL=import.meta.env.VITE_SUNAYANA_WIDGET_URL;
const ROHITH_WIDGET_URL = import.meta.env.VITE_ROHITH_WIDGET_URL;

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
        </button>

        <hr />


         <button
        onClick={() =>
          loadWidget(SUNAYANA_WIDGET_URL, "sunayana-widget", {
            name: "Sunayana",
          })
        }
      >
        Load Sunayana Widget
      </button>

      <button
        onClick={() => removeWidget("sunayana-widget")}
      >
        Remove Sunayana Widget
      </button>
        <div id="george-widget"></div>



        <div id='sowmya-widget'>

        </div>
<div id="sunayana-widget"></div>
      
      <div>
        <hr />

        <button
          onClick={() =>
            loadWidget(ROHITH_WIDGET_URL, "rohith-widget", {
              name: "Rohith",
            })
          }
        >
          Load Rohith Widget
        </button>

        <button onClick={() => removeWidget("rohith-widget")}>
          Remove Rohith Widget
        </button>

        <div id="rohith-widget"></div>
      </div>     
    </>
  );
}
export default App;