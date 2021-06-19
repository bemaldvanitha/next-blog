const { PHASE_DEVELOPMENT_SERVER }  = require('next/constants');

module.exports = (phase) => {

    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: 'bemaldvanitha',
                mongodb_password: 'Bemal123',
                mongodb_clustername: 'devconnector',
                mongodb_database: 'nextblog'
            }
        }
    }

    return {
        env: {
            mongodb_username: 'bemaldvanitha',
            mongodb_password: 'Bemal123',
            mongodb_clustername: 'devconnector',
            mongodb_database: 'nextblog'
        }
    }
};