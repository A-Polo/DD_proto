import apiCall from '../utils/api';
import routes from '../config/routes';

const DiveSites = {
  getSites: apiCall(routes.searchDiveSitesPath)
};

export default { DiveSites };
