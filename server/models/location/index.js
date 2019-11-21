const mongoose = require('mongoose');
const init_data = require('./init_data.json');

const LocationSchema = new mongoose.Schema({
    province: String,
    city: String,
    street: String,
});

LocationSchema.statics.init_data = () => {
    init_data.initial_locations.map(location => {
        Location.findOne({
            province: location.province,
            city: location.city,
            street: location.street
        }).then(found_location => {
            if (!found_location) {
                const newLocation = new Location({
                    province: location.province,
                    city: location.city,
                    street: location.street
                });
                newLocation.save();
            }
        });
    });
};

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
