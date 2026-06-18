declare global {
  interface Window {
    renderReactWidget?: (config: string) => void;
    unmountReactWidget?: (id: string) => void;
  }
}

function App() {
  const loadWidget = () => {
    const containerId = "user-widget";

    const container = document.getElementById(containerId);

    if (!container) {
      console.error("Container not found");
      return;
    }
    container.setAttribute("data-name", "Nishant");
    
    const script = document.createElement("script");
    script.src = "http://localhost:4173/bundle.js";
    script.async = true;

    script.onload = () => {
      window.renderReactWidget?.(
        JSON.stringify({
          containerElementId: containerId,
        })
      );
    };

    document.body.appendChild(script);
  };

  const removeWidget = () => {
    window.unmountReactWidget?.("user-widget");
  };

  return (
    <>
      <h2>Microfrontend Widget Demo</h2>

      <button onClick={loadWidget}>
        Load Nishant Widget
      </button>

      <button onClick={removeWidget}>
        Remove Widget
      </button>

      <div id="user-widget"></div>
    </>
  );
}

export default App;