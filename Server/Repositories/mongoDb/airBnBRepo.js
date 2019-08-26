const airBnb = require('./Models/airbnb.model');

exports.get_by_name =async (params) => {
    try{
        let airbnb = await airBnb.find(params, 'name summary description property_type room_type').limit(10).lean().exec();
        return airbnb;
    }
    catch(err){
        return err;
    }
}

exports.get_by_review_score = async (score) => {
    if(score =='top'){
        try{
            let locations = await airBnb.find({ 'review_scores.review_scores_value' : { $gt : score}})
                .limit(10)
                .select('name summary description property_type room_type review_scores.review_scores_value')
                .sort('review_scores.review_scores_value')
                .lean()
                .exec();
            return locations;
        }
        catch(err){
            return err;
        }
    }
}