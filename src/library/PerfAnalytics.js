
/**
 * The Class that allow get and send metrics to the spesific api endpoint
 */
export default class PerfAnalyics {

  /**
   * Libray configs
   * 
   * @param {{url: string}} config 
   */
  constructor(config = {}) {
    const { url } = config
    
    if (!url) throw new Error('Url must be exist')

    this.url = url
  }

  /**
   * 
   * @param {string} path url path
   */
  sendMetrics(path) {
    navigator.sendBeacon(this.getFullPath(path), this.getMetrics())
  }

  /**
   * It provides common metrics as string format that generated from json object
   * 
   * @returns {string}
   */
  getMetrics() {
    const ttfb = performance.timing.unloadEventEnd - performance.timing.responseStart
    const domLoading = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;

    const data = {
      ttfb,
      domLoading
    }
    
    return JSON.stringify(data)
  }


  /**
   * It produces full path of target url
   * 
   * @param {string} path 
   * @returns 
   */
  getFullPath(path) {
    return `${this.url}${path}`
  }


}