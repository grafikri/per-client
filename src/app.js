
import appConfig from '../app.config.js';
import PerfAnalyics from './library/PerfAnalytics.js'


const analytics = new PerfAnalyics({ url: appConfig.API_URL })

/**
 * When the tab vibility changed metrics will be fired
 */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    analytics.sendMetrics('/analytics')
  }
});
