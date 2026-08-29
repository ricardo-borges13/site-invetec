const GTM_ID = 'GTM-KQ3HS7D2';
const GTM_SCRIPT_ID = `gtm-script-${GTM_ID}`;

type GoogleTagManagerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export const initializeGoogleTagManager = () => {
  if (!import.meta.env.PROD || typeof window === 'undefined') {
    return;
  }

  if (document.getElementById(GTM_SCRIPT_ID)) {
    return;
  }

  const gtmWindow = window as GoogleTagManagerWindow;
  const dataLayer = (gtmWindow.dataLayer = gtmWindow.dataLayer || []);

  dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

  document.head.appendChild(script);
};
