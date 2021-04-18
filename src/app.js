
import appConfig from '../app.config.js';
import PerfAnalyics from './library/PerfAnalytics.js'



/**
 * When the tab vibility changed metrics will be fired
 */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    (new PerfAnalyics({ url: appConfig.API_URL })).sendMetrics('/analytics')
  }
});
