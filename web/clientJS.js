const createClient = require('@sanity/client');

module.exports = createClient({
    projectId: '5bcy9viz',
    dataset: 'production',
    token: '', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
});
