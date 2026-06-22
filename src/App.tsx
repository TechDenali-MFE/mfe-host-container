import { loadWidget, removeWidget } from "./utils/widgetLoader";

const USER_WIDGET_URL = import.meta.env.VITE_TEST_WIDGET_URL;

const USER_WIDGET_URL1 = import.meta.env.VITE_TEST_WIDGET_URL1;

const GEORGE_WIDGET_URL = import.meta.env.VITE_GEORGE_WIDGET_URL1;
const SOWMYA_WIDGET_URL = import.meta.env.VITE_SOWMYA_WIDGET_URL;
const  SUNAYANA_WIDGET_URL=import.meta.env.VITE_SUNAYANA_WIDGET_URL;
const RAMYA_WIDGET_URL = import.meta.env.VITE_RAMYA_WIDGET_URL;
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

        <div id="george-widget"></div>
        

        <div id='sowmya-widget'> </div>
        <hr />
        <div id="sunayana-widget"></div>

      <button
        onClick={() =>
          loadWidget(RAMYA_WIDGET_URL, "ramya-widget", {
            name: "Ramya",
          })
        }
      >
        Load Ramya Widget
      </button>

      <button
        onClick={() => removeWidget("ramya-widget")}
      >
        Remove Ramya Widget
      </button>


      <hr />
      <div id="ramya-widget"></div>
      
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