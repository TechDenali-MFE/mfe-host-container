declare global {
  interface Window {
    renderReactWidget?: (config: string) => void;
    unmountReactWidget?: (id: string) => void;
  }
}

export const loadWidget = (
  url: string,
  containerId: string,
  data?: Record<string, string>
) => {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container "${containerId}" not found`);
    return;
  }

  // Set data attributes
  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      container.setAttribute(`data-${key}`, value);
    });
  }

  // Create script tag
  const script = document.createElement("script");
  script.src = url;
  script.async = true;

  script.onload = () => {
    window.renderReactWidget?.(
      JSON.stringify({
        containerElementId: containerId,
      })
    );
  };

  script.onerror = () => {
    console.error("Failed to load widget script");
  };

  document.body.appendChild(script);
};


// Remove widget
export const removeWidget = (containerId: string) => {
  window.unmountReactWidget?.(containerId);
};